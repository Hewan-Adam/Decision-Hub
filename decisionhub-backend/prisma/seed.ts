import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const categories = [
    'Technology',
    'Education',
    'Career',
    'Finance',
    'Business',
    'Travel',
    'Food',
    'Health',
    'Shopping',
    'Lifestyle',
  ];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name, description: `${name} related decisions` },
    });
  }

  const password = await bcrypt.hash('password123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@decisionhub.com' },
    update: {},
    create: {
      email: 'admin@decisionhub.com',
      name: 'Admin User',
      password,
      role: 'ADMIN',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
