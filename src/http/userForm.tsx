import axios from 'axios';

export const addUserFormRequest = (data: any) => {
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
