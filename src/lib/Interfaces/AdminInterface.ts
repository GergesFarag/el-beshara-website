export interface IAdmin {
  _id: string;
  email: string;
  username: string;
  isSuperAdmin?: boolean;
}

export interface INewAdmin {
  email: string;
  username: string;
  password: string;
}