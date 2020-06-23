import { IGender } from './IGender';

export interface IUser {
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  description: string;
  gender: IGender;
}
export interface IUserPayload {
  id?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  phone?: string;
  address?: string;
  description?: string;
}
