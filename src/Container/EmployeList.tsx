import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { fetchUserDataRequest, DeleteUserDataRequest } from '../http/userForm';
import IEmploye from '../classes/IEmploye';
import {
  faPencilAlt,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TeamState {
  shouldRedirectToEmployeeEventForm: boolean;
  employeUsers: IEmploye[];
}

class EmployeList extends React.Component<RouteComponentProps, TeamState> {
  state = {
    shouldRedirectToEmployeeEventForm: false,
    employeUsers: [] as IEmploye[],
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    if (this.state.shouldRedirectToEmployeeEventForm) {
      return <Redirect to="/event/add"></Redirect>;
    }

    return (
      <Container>
        <Row className="m-3">
          <Col>
            <Row className="mb-3">
              <Col>
                <h3>Details Of Employee</h3>
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
                        <Link to={`event/add${employeUser.id}`}>
                          <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                        </Link>
                      </td>
                      <td>
                        <span
                          onClick={(e) =>
                            this.deleteUserData(e, employeUser.id)
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

  deleteUserData = async (event: any, id: any) => {
    event.persist();
    try {
      await DeleteUserDataRequest(id);
      this.getUserData();
    } catch (error) {
      console.error(error);
    }
  };

  getUserData = async () => {
    try {
      let employeUsers = await fetchUserDataRequest();
      employeUsers = employeUsers.map((employeUser: IEmploye) => {
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
export default EmployeList;