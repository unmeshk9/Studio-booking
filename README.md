# Time-Based Booking Application

A Progressive Web Application (PWA) for managing time-based bookings between studios and freelancers.

## Features

- 🔐 JWT Authentication
- 👥 Role-based Access Control
- 📅 Booking Management
- 💳 Payment Integration
- 📱 Responsive Design
- 🔄 Real-time Updates

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Testing**: Jest + React Testing Library
- **Styling**: CSS Modules

## Quick Start

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/Studio-booking.git
cd Studio-booking
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

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Documentation

For detailed documentation, please see the [Project Documentation](docs/project-documentation.md).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE)

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/YOUR_USERNAME/Studio-booking](https://github.com/YOUR_USERNAME/Studio-booking) 