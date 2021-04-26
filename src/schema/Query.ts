import { gql } from 'apollo-server-express';
import { users, companies } from '../data';
import {
  IUser,
  IGetUserByIdArgs,
  IAddUserArgs,
  IFriendToUserArgs,
} from '../types';

export const queryTypeDefs = gql`
  type Query {
    user(id: String): User
    users: [User]
    company(id: String): Company
    companies: [Company]
  }

  type Mutation {
    addUser(first_name: String!, last_name: String!): String
    addFriendToUser(user_id: String!, friend_id: String!): Boolean
  }
`;

export const queryResolvers = {
  Query: {
    user: (_: unknown, args: IGetUserByIdArgs) => {
      return users.find((user: IUser) => user.id === args.id);
    },
    users: () => {
      return users;
    },
    companies: () => {
      return companies;
    },
  },
  Mutation: {
    addUser: (_: unknown, args: IAddUserArgs) => {
      const id = users.length + 1 + '';
      users.push({ ...args, id, friends: [], companies: [] });
      return id;
    },
    addFriendToUser: (_: unknown, args: IFriendToUserArgs) => {
      const { user_id, friend_id } = args;

      const user = users.find((user: IUser) => user.id === user_id);

      if (!user) return false;

      user.friends = [...user.friends!, friend_id];

      return true;
    },
  },
};
