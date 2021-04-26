import { gql } from 'apollo-server-express';
import { users } from '../data';
import { IUser, TUserID, ICompany } from '../types';

export const companyTypeDefs = gql`
  type Company {
    id: String!
    name: String!
    employees: [User]
  }
`;

export const companyResolvers = {
  Company: {
    employees: (parent: ICompany) => {
      const parent_employees = parent.employees.map((user_id: TUserID) => {
        return users.find((user: IUser) => user.id === user_id);
      });
      return parent_employees;
    },
  },
};
