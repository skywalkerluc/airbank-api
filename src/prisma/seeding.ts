import prisma from '../prisma/client';
import { transactions } from '../data/tempDatabase';

async function handler() {
  await prisma.transaction.createMany({
    data: transactions
  })
}

handler().catch((error) => {
  console.warn(error);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});