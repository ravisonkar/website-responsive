import { IGender } from './IGender';

export interface IUser {
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  description: string;
  email: IGender;
}
export interface IUserPayload {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  address?: string;
  description?: string;
}
