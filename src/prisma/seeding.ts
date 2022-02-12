import prisma from '../prisma/client';
import { transactions } from '../data/tempDatabase';

async function handler() {
  await prisma.transaction.createMany({
    data: transactions
  })
}

handler();