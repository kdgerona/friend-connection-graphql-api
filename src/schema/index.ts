import { makeExecutableSchema } from 'apollo-server-express';

// Schemas
import { queryTypeDefs, queryResolvers } from './Query';
import { userTypeDefs, userResolvers } from './User';
import { companyTypeDefs, companyResolvers } from './Company';

export default makeExecutableSchema({
  typeDefs: [queryTypeDefs, userTypeDefs, companyTypeDefs],
  resolvers: [queryResolvers, userResolvers, companyResolvers],
});
