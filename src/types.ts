export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  friends?: string[];
  companies?: string[];
}

export interface ICompany {
  id: string;
  name: string;
  employees: string[];
}

export interface IGetUserByIdArgs {
  id: string;
}

export interface IAddUserArgs {
  first_name: string;
  last_name: string;
}

export interface IFriendToUserArgs {
  user_id: string;
  friend_id: string;
}

export type TUserID = string;
export type TCompanyID = string;
