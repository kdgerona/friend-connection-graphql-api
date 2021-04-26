import { gql } from 'apollo-server-express';

const users = [];
const companies = [];

export const queryTypeDefs = gql`
  type Query {
    hello: String
  }
`;

export const queryResolvers = {
  Query: {
    hello: () => 'Hello World!',
  },
};
