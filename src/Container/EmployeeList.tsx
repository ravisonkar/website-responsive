import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
<<<<<<< HEAD:src/Container/EmployeeList.tsx
=======
import {
  fetchUserDataRequest,
  DeleteEmployeeUserDataRequest,
} from '../http/employeeUser';
import IEmploye from '../classes/IEmploye';
>>>>>>> master:src/Container/EmployeList.tsx
import {
  fetchEmployeesUserDataRequest,
  DeleteEmployeeUserDataRequest,
} from '../http/userForm';
import IEmployee from '../classes/IEmployee';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

interface IEmployeeState {
  shouldRedirectToEmployeeEventForm: boolean;
  employeUsers: IEmployee[];
}

<<<<<<< HEAD:src/Container/EmployeeList.tsx
class EmployeeList extends React.Component<RouteComponentProps, TeamState> {
=======
class EmployeList extends React.Component<RouteComponentProps, IEmployeeState> {
>>>>>>> master:src/Container/EmployeList.tsx
  state = {
    shouldRedirectToEmployeeEventForm: false,
    employeUsers: [] as IEmployee[],
  };

  componentDidMount() {
<<<<<<< HEAD:src/Container/EmployeeList.tsx
    this.getEmployeesUserData();
=======
    this.getEmployeeUserData();
>>>>>>> master:src/Container/EmployeList.tsx
  }

  render() {
    if (this.state.shouldRedirectToEmployeeEventForm) {
      return <Redirect to="/employee/add"></Redirect>;
    }

    return (
      <Container>
        <Row className="m-3">
          <Col>
            <Row className="mb-3">
              <Col>
                <h3>Employee List</h3>
              </Col>
              <Col>
                <Button
                  className="float-right m1-3"
                  onClick={() => {
                    this.setState({
                      shouldRedirectToEmployeeEventForm: true,
                    });
                  }}
                >
                  <FontAwesomeIcon icon="plus" className="mr-3" />
                  <strong>Add</strong>
                </Button>
              </Col>
            </Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Address</th>
                  <th scope="col">Description</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employeUsers.map((employeUser, index) => {
                  return (
                    <tr>
                      <th>{employeUser.id}</th>
                      <td>{employeUser.name}</td>
                      <td>{employeUser.email}</td>
                      <td>{employeUser.phone}</td>
                      <td>{employeUser.address}</td>
                      <td>{employeUser.description}</td>
                      <td>
                        <Link to={`/employee${employeUser.id}`}>
                          <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                        </Link>
                      </td>
                      <td>
                        <span
                          className="delete"
                          onClick={(e) =>
<<<<<<< HEAD:src/Container/EmployeeList.tsx
                            this.deleteEmployeeUserData(e, employeUser.id)
=======
                            this.deleteEmoloyeeUserData(e, employeUser.id)
>>>>>>> master:src/Container/EmployeList.tsx
                          }
                        >
                          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }

<<<<<<< HEAD:src/Container/EmployeeList.tsx
  deleteEmployeeUserData = async (event: any, id: any) => {
    event.persist();
    try {
      await DeleteEmployeeUserDataRequest(id);
      toast.success('User Delete successfully', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      this.getEmployeesUserData();
=======
  deleteEmoloyeeUserData = async (event: any, id: any) => {
    event.persist();
    try {
      await DeleteEmployeeUserDataRequest(id);
      this.getEmployeeUserData();
>>>>>>> master:src/Container/EmployeList.tsx
    } catch (error) {
      console.error(error);
    }
  };

<<<<<<< HEAD:src/Container/EmployeeList.tsx
  getEmployeesUserData = async () => {
=======
  getEmployeeUserData = async () => {
>>>>>>> master:src/Container/EmployeList.tsx
    try {
      let employeUsers = await fetchEmployeesUserDataRequest();
      employeUsers = employeUsers.map((employeUser: IEmployee) => {
        if (employeUser) {
          employeUser.name =
            employeUser.first_name + ' ' + employeUser.last_name;
        }

        return employeUser;
      });
      this.setState({ employeUsers });
    } catch (error) {
      console.error(error.response);
    }
  };
}
export default EmployeeList;
