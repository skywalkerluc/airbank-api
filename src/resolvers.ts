import { transactions } from './data/tempDatabase';
import prisma from './prisma/client';

const resolvers = {
  Query: {
    transactions: () => {
      return prisma.transactions.findMany();
    },
    transactionsAtRange: (parent: any, args: any) => {
      // create filter
      return prisma.transactions.findMany();
    }
  }
}

export default resolvers;