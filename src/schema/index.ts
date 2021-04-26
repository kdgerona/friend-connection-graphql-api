import { makeExecutableSchema } from 'apollo-server-express';

// Schemas
import { queryTypeDefs, queryResolvers } from './Query';
import { userTypeDefs, userResolvers } from './User';

export default makeExecutableSchema({
  typeDefs: [queryTypeDefs, userTypeDefs],
  resolvers: [queryResolvers, userResolvers],
});
