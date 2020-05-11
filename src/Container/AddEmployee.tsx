import React from 'react';
import AddFormEmployee from '../Component/AddFormEmploye';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iEmploye from '../Container/iEmploye';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
interface EmployeState {
  shouldRedirectToEmployeeEventForm: boolean;
  data: iEmploye[];
  username: string;
  name: string;
  lastname: string;
  email: string;
  phonenumber: string;
  eventparam: string;
  val: string;
}

class AddEmployee extends React.Component<RouteComponentProps, EmployeState> {
  state = {
    shouldRedirectToEmployeeEventForm: false,
    data: [] as iEmploye[],
    name: '',
    lastname: '',
    email: '',
    phonenumber: '',
    username: '',
    eventparam: '',
    val: '',
  };

  onMychangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };
  onMySubmitHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let datauser = [
      {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        phonenumber: this.state.phonenumber,
        eventparam: this.state.eventparam,
        val: this.state.val,
      },
    ];
    this.setState({
      data: [...datauser, ...this.state.data],
    });
    event.preventDefault();
    alert('you are submitting');
    console.log(this.state.data);
  };

  searchEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    this.setState({ val: event.target.value });
    console.log(this.state.val);
  };
  render() {
    if (this.state.shouldRedirectToEmployeeEventForm) {
      return <Redirect to="/team"></Redirect>;
    }
    return (
      <div>
        <AddFormEmployee
          onCancelClick={this.onCancelClick}
          onMychangeHandler={this.onMychangeHandler}
          // data={this.state.data}
          onMySubmitHandler={this.onMySubmitHandler}
          searchEventHandler={this.searchEventHandler}
        ></AddFormEmployee>
        <Container>
          <Row className="mt-3">
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
                    <th scope="col">Gender</th>
                  </tr>
                </thead>
                {this.state.data.map((data, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{data.name}</td>
                        <td>{data.lastname}</td>
                        <td>{data.email}</td>
                        <td>{data.phonenumber}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  onCancelClick = () => {
    this.setState({
      shouldRedirectToEmployeeEventForm: true,
    });
  };
}
export default AddEmployee;
