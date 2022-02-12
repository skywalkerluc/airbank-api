import { transactions } from './data/tempDatabase';
import prisma from './prisma/client';

const resolvers = {
  Query: {
    transactions: () => {
      return prisma.transaction.findMany();
    },
    transactionsAtRange: (parent: any, args: any) => {
      // create filter
      return prisma.transaction.findMany();
    }
  }
}

export default resolvers;