import axios from 'axios';

export const addEmployeeUserFormRequest = (data: any) => {
  return axios
    .post(`https://detailsem.herokuapp.com/customers`, data)
    .then((value) => value.data);
};

export const editEmployeeUserFormRequest = (id: any) => {
  return axios
    .get(`https://detailsem.herokuapp.com/customers/${id}`)
    .then((value) => value.data);
};

export const fetchUserDataRequest = () => {
  return axios
    .get(`https://detailsem.herokuapp.com/customers`)
    .then((value) => value.data);
};

export const DeleteEmployeeUserDataRequest = (id: number) => {
  return axios
    .delete(`https://detailsem.herokuapp.com/customers/${id}`)
    .then((value) => value.data);
};
export const updateERmployeeUserFormRequest = (data: any, id: any) => {
  return axios
    .put(`https://detailsem.herokuapp.com/customers/${id}`, data)
    .then((value) => value.data);
};
// http://localhost:5000/customers