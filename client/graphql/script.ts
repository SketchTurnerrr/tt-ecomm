import { PrismaClient } from '@prisma/client';

// 2
const prisma = new PrismaClient();

// 3
async function main() {
  const allUsers = await prisma.link.findMany()
  console.log(allUsers);
}

main().finally(async () => {
  await prisma.$disconnect();
});
