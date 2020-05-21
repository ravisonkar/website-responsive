import axios from 'axios';
import iUserForm from '../classes/inew';
import { valueEventAriaMessage } from 'react-select/src/accessibility';

export const addUserFormRequest = (data: iUserForm) => {
  return axios
    .post(`http://localhost:5000/customers`, data)
    .then((value) => value.data);
};

export const editUserFormRequest = (id: any) => {
  return axios
    .get(`http://localhost:5000/customers/${id}`)
    .then((value) => value.data);
};

export const fetchUserDataRequest = () => {
  return axios
    .get(`http://localhost:5000/customers`)
    .then((value) => value.data);
};

export const DeleteUserDataRequest = (id: number) => {
  return axios
    .delete(`http://localhost:5000/customers/${id}`)
    .then((value) => value.data);
};
