# Time-Based Booking Application Documentation

## Overview
This application is a Progressive Web App (PWA) that facilitates time-based bookings between studios and freelancers. It's built using modern web technologies and follows best practices for security, testing, and code organization.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based auth
- **Testing**: Jest + React Testing Library
- **Styling**: CSS Modules

## Project Structure 
project-root/
├── src/
│ ├── assets/ # Static assets (images, fonts)
│ ├── components/ # Reusable React components
│ ├── context/ # React context providers
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Page components
│ ├── services/ # API and other services
│ ├── types/ # TypeScript type definitions
│ ├── utils/ # Utility functions
│ └── styles/ # Global styles and CSS modules
├── prisma/
│ ├── schema.prisma # Database schema
│ └── seed.ts # Database seeding
└── tests/
└── tests/ # Test files


## Key Features
1. **Authentication System**
   - JWT-based authentication
   - Role-based access (Studio/Freelancer)
   - Protected routes
   - Persistent sessions

2. **Booking System**
   - Slot creation (by Studios)
   - Slot booking (by Freelancers)
   - Status management (Available, Requested, Assigned, Completed, Cancelled)
   - Payment integration

3. **User Management**
   - User profiles
   - Role-specific features
   - Preferences management

## Database Schema

### User Model
prisma
model User {
id String @id @default(cuid())
email String @unique
password String
role UserRole
name String
bio String?
phoneNumber String?
address String?
profileImage String?
studioName String?
location String?
skills String[]
hourlyRate Float?
}


### Slot Model
prisma
model Slot {
id String @id @default(cuid())
startTime DateTime
endTime DateTime
status SlotStatus @default(AVAILABLE)
price Float
description String?
createdBy User @relation("CreatedBy")
bookedBy User? @relation("BookedBy")
}


## Authentication Flow
1. User submits login credentials
2. Backend validates and returns JWT token
3. Frontend stores token in localStorage
4. Token is included in subsequent API requests
5. Protected routes check for valid token

## API Endpoints

### Authentication
- POST /auth/login
  ```typescript
  body: { email: string, password: string }
  response: { access_token: string, user: User }
  ```

### Slots
- POST /slots
  ```typescript
  body: { startTime: Date, endTime: Date, price: number }
  ```
- GET /slots/studio/:studioId
- POST /slots/:slotId/request

## Environment Variables
env
Frontend (.env)
VITE_API_URL=http://localhost:3000

Backend (.env)
DATABASE_URL="postgresql://username:password@localhost:5432/time_booking_db"
JWT_SECRET="your-jwt-secret"


## Getting Started

### Prerequisites
- Node.js (v16+)
- PostgreSQL
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone [repository-url]
   cd time-booking-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

4. Set up the database
   ```bash
   npx prisma migrate dev
   npm run db:seed
   ```

5. Start development servers
   ```bash
   # Frontend
   npm run dev

   # Backend
   npm run start:dev
   ```

### Testing
bash
Run all tests
npm test
Run tests in watch mode
npm run test:watch
Generate coverage report
npm run test:coverage


## Development Workflow

### Creating New Components
1. Create component file in `src/components`
2. Create corresponding test file in `__tests__` directory
3. Create CSS module if needed
4. Export from index.ts

Example:
typescript
// src/components/MyComponent/MyComponent.tsx
import styles from './MyComponent.module.css';
export const MyComponent: React.FC = () => {
return <div className={styles.container}>...</div>;
};


### Adding New API Endpoints
1. Create DTO if needed
2. Add endpoint to controller
3. Implement service method
4. Add tests
5. Update API documentation

## Best Practices

### Code Style
- Use TypeScript strict mode
- Follow ESLint rules
- Use proper typing
- Write JSDoc comments for complex functions

### Testing
- Write tests for new components
- Maintain high coverage
- Test edge cases
- Mock external dependencies

### State Management
- Use React Context for global state
- Use local state for component-specific state
- Consider performance implications

### Security
- Validate all inputs
- Sanitize data
- Use proper authentication
- Handle errors gracefully

## Common Issues and Solutions

### Authentication Issues
- Check token expiration
- Verify localStorage persistence
- Confirm API endpoint functionality

### Database Connection
- Verify DATABASE_URL
- Check PostgreSQL service
- Confirm migration status

## Deployment

### Frontend Deployment
1. Build the application
   ```bash
   npm run build
   ```
2. Deploy to hosting service (e.g., Vercel, Netlify)

### Backend Deployment
1. Set up production database
2. Configure environment variables
3. Deploy to cloud service (e.g., AWS, Heroku)

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Create pull request
5. Wait for review

## Support
- GitHub Issues
- Documentation
- Team chat

## Future Enhancements
1. Real-time notifications
2. Advanced scheduling
3. Payment integration
4. Analytics dashboard
5. Mobile applications

## License
[Your License Here]