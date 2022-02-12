import { transactions } from './data/tempDatabase';
// TODO: update to target postgres
// TODO: rename alias from parent to "dot"

const resolvers = {
  Query: {
    transactions: (parent: any, args: any) => {
      return transactions
    },
    transactionsAtRange: (parent: any, args: any) => {
      // create filter
      return transactions;
    }
  }
}

export default resolvers;