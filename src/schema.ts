import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    transactions: [Transaction]
    transactionsAtRange(start: String, end: String): [Transaction]
  }

  type Transaction {
    id: String!
    account: String
    description: String
    category: String
    reference: String
    currency: String
    amount: Float
    status: String
    transactionDate: String
    createdAt: String
    updatedAt: String
  }
`

export default typeDefs;