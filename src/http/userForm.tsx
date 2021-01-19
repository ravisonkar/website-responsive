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

export const fetchEmployeesUserDataRequest = () => {
  return axios
    .get(`https://detailsem.herokuapp.com/customers`)
    .then((value) => value.data);
};

export const DeleteEmployeeUserDataRequest = (id: number) => {
  return axios
    .delete(`https://detailsem.herokuapp.com/customers/${id}`)
    .then((value) => value.data);
};
export const updateEmployeeUserFormRequest = (data: any, id: any) => {
  return axios
    .put(`https://detailsem.herokuapp.com/customers/${id}`, data)
    .then((value) => value.data);
};
export const loginUserRequest = (data: any) => {
  return axios
    .post(`http://localhost:5000/login/`, data)
    .then((value) => value.data);
};

export const addFormRequest = (data: any) => {
  return axios
    .post(`http://localhost:5000/add`, data)
    .then((value) => value.data);
};
