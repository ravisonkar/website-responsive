import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {
  fetchUserDataRequest,
  DeleteEmployeeUserDataRequest,
} from '../http/employeeUser';
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
  const [employeesData, setEmployeesData] = useState([] as IValues[]);

  useEffect(() => {
    getEmployeesUserData();
  }, []);

  const getEmployeesUserData = async () => {
    try {
      const employeesData = await fetchUserDataRequest();
      setEmployeesData(employeesData);
    } catch (error) {
      console.error(error.response);
    }
  };

  const deleteEmployeeUserData = async (event: any, id: number) => {
    event.persist();
    try {
      await DeleteEmployeeUserDataRequest(id);
      getEmployeesUserData();
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
          {employeesData.map((employeeData, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{employeeData.id}</td>
                  <td>{employeeData.first_name}</td>
                  <td>{employeeData.last_name}</td>
                  <td>{employeeData.email}</td>
                  <td>{employeeData.phone}</td>
                  <td>{employeeData.address}</td>
                  <td>{employeeData.description}</td>
                  <td>
                    <Link to={`user${employeeData.id}`}>
                      <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                    </Link>
                  </td>
                  <td>
                    <span
                      onClick={(e) =>
                        deleteEmployeeUserData(e, employeeData.id)
                      }
                    >
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
