import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router';
import { RouteComponentProps } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// interface TeamState {
//   shouldRedirectToEmployeeEventForm: boolean;
// }

class Team extends React.Component {
  state = {
    shouldRedirectToEmployeeEventForm: false,
  };
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
                  <th scope="col">Gender</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Saigita</td>
                  <td>saigita@theprocedure.in</td>
                  <td>9844565767</td>
                  <td>Female</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Sachin</td>
                  <td>sachin@theprocedure.in</td>
                  <td>9656554544</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Ravi</td>
                  <td>ravi@theprocedure.in</td>
                  <td>96545454545</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Pankaj</td>
                  <td>pankaj@theprocedure.in</td>
                  <td>96545454545</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Rohit</td>
                  <td>rohit@theprocedure.in</td>
                  <td>96545454545</td>
                  <td>Male</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Team;
