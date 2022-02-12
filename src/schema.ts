import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    transactions: [Transaction]
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

module.exports = {
  typeDefs
}