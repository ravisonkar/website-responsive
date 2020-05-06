import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

class Team extends React.Component {
  render() {
    return (
      <Container>
        <Row className="m-3">
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
        </Row>
      </Container>
    );
  }
}
export default Team;
