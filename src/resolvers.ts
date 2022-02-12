import { transactions } from './data/tempDatabase';
// TODO: update to target postgres

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

module.exports = {
  resolvers
}