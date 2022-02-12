import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const port = process.env.PORT || 8090;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }, () => console.log(`Listening at http://localhost:${port}`));