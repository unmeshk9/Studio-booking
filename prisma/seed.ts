import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.review.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.slot.deleteMany();
  await prisma.user.deleteMany();

  // Create a studio user
  const studioUser = await prisma.user.create({
    data: {
      email: 'studio@example.com',
      password: await bcrypt.hash('password123', 10),
      role: UserRole.STUDIO,
      name: 'Studio One',
      studioName: 'Studio One Productions',
      location: 'New York, NY',
      bio: 'Professional recording studio in the heart of NYC',
      phoneNumber: '+1234567890',
    },
  });

  // Create a freelancer user
  const freelancerUser = await prisma.user.create({
    data: {
      email: 'freelancer@example.com',
      password: await bcrypt.hash('password123', 10),
      role: UserRole.FREELANCER,
      name: 'John Doe',
      skills: ['Audio Engineering', 'Music Production'],
      hourlyRate: 50,
      bio: 'Experienced audio engineer with 5+ years of experience',
      phoneNumber: '+1987654321',
    },
  });

  console.log({ studioUser, freelancerUser });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 