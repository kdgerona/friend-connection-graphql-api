import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  type User {
    id: String
    first_name: String
    last_name: String
    friends: [User]
  }
`;

export const userResolvers = {
  User: {
    friends: () => 'Hello user!',
  },
};
