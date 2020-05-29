import axios from 'axios';

export const addUserFormRequest = (data: any) => {
  return axios
    .post(`http://localhost:3000/notes`, data)
    .then((value) => value.data);
};

export const editUserFormRequest = (id: any) => {
  return axios
    .get(`http://localhost:3000/notes/${id}`)
    .then((value) => value.data);
};

export const fetchUserDataRequest = () => {
  return axios.get(`http://localhost:3000/notes`).then((value) => value.data);
};

export const DeleteUserDataRequest = (id: number) => {
  return axios
    .delete(`http://localhost:3000/notes/${id}`)
    .then((value) => value.data);
};
export const updateUserFormRequest = (data: any, id: any) => {
  return axios
    .put(`http://localhost:3000/notes/${id}`, data)
    .then((value) => value.data);
};
