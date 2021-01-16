import axios from 'axios';

export const addEmployeeUserFormRequest = (data: any) => {
  return axios
    .post(`http://localhost:5000/customers`, data)
    .then((value) => value.data);
};

export const editEmployeeUserFormRequest = (id: any) => {
  return axios
    .get(`http://localhost:5000/customers/${id}`)
    .then((value) => value.data);
};

export const fetchUserDataRequest = () => {
  return axios
    .get(`http://localhost:5000/customers`)
    .then((value) => value.data);
};

export const DeleteEmployeeUserDataRequest = (id: number) => {
  return axios
    .delete(`http://localhost:5000/customers/${id}`)
    .then((value) => value.data);
};
export const updateERmployeeUserFormRequest = (data: any, id: any) => {
  return axios
    .put(`http://localhost:5000/customers/${id}`, data)
    .then((value) => value.data);
};