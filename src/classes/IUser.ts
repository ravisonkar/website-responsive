import { IGender } from './IGender';

export interface IUser {
  first_name: string;
  last_name: string;
  phone: number;
  address: string;
  description: string;
  gender: IGender;
}
export interface IUserPayload {
  first_name: string;
  last_name: string;
  gender: string;
  phone: number;
  address: string;
  description: string;
}
