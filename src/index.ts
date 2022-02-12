import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { createServer } from 'http';
import express from 'express';

const serverSetup = async () => {
  const port = process.env.PORT || 8090;

  const app = express();
  const httpServer = createServer(app);

  const apolloServer = new ApolloServer({ resolvers, typeDefs });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: '/v1'
  });

  httpServer.listen({ port }, () =>
    console.log(`Listening at http://localhost:${port}${apolloServer.graphqlPath}`)
  );
}

serverSetup();