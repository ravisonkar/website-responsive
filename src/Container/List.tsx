import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { fetchUserDataRequest, DeleteUserDataRequest } from '../http/userForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilAlt,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export interface IValues {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}

const List = () => {
  const [data, setData] = useState([] as IValues[]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const userData = await fetchUserDataRequest();
      setData(userData);
    } catch (error) {
      console.error(error.response);
    }
  };

  const deleteUserData = async (event: any, id: number) => {
    event.persist();
    try {
      await DeleteUserDataRequest(id);
      getUserData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row className="m-3">
      <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Description</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {data.map((data, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.address}</td>
                  <td>{data.description}</td>
                  <td>
                    <Link to={`newdata${data.id}`}>
                      <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                    </Link>
                  </td>
                  <td>
                    <span onClick={(e) => deleteUserData(e, data.id)}>
                      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </Col>
    </Row>
  );
};
export default List;
