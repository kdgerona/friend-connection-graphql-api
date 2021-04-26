import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';

const { SERVER_PORT = 5000 } = process.env;

const run = async () => {
  const server = new ApolloServer({
    schema,
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen(+SERVER_PORT, () =>
    console.log(`Server listening at port ${SERVER_PORT}`)
  );
};

run();
