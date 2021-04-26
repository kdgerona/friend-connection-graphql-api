import { gql } from 'apollo-server-express';
import { users, companies } from '../data';
import { IUser, TUserID, ICompany, TCompanyID } from '../types';

export const userTypeDefs = gql`
  type User {
    id: String
    first_name: String
    last_name: String
    friends: [User]
    companies: [Company]
  }
`;

export const userResolvers = {
  User: {
    friends: (parent: IUser) => {
      const parent_friends = parent.friends?.map((user_id: TUserID) => {
        return users.find((user: IUser) => user.id === user_id);
      });
      return parent_friends;
    },
    companies: (parent: IUser) => {
      const parent_companies = parent.companies?.map(
        (company_id: TCompanyID) => {
          return companies.find(
            (company: ICompany) => company.id === company_id
          );
        }
      );

      return parent_companies;
    },
  },
};
