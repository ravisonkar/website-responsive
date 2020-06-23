import { IGender } from './IGender';
export interface ITeam {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  description?: string;
}
