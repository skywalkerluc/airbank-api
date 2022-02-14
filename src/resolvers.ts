import prisma from './prisma/client';

const resolvers = {
  Query: {
    transactions: () => {
      return prisma.transaction.findMany();
    },
    transactionsAtRange: (parent: any, args: any) => {
      return prisma.transaction.findMany({
        where: {
          OR: [
            {
              transactionDate: {
                gte: String(new Date(args.start)),
                lte: String(new Date(args.end))
              }
            },
            {
              transactionDate: {
                startsWith: args.end
              }
            }
          ]
        }
      });
    }
  }
};

export default resolvers;