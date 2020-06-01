import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { VoidHandler } from '../shared/types';
import ITeam from '../classes/ITeam';
import { RouteComponentProps } from 'react-router';
import Select from 'react-select';
import Dropdown from 'react-dropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IOption from '../classes/IEmploye';
import 'react-dropdown/style.css';

type EventHandler = (event: any) => void;
interface IAddFormEmployeeProps {
  onCancelClick: VoidHandler;
  onMychangeHandler: EventHandler;
  onMySubmitHandler: EventHandler;
  searchEventHandler: EventHandler;
  employeeUser: ITeam;
}

const AddFormEmployee = ({
  onCancelClick,
  onMychangeHandler,
  onMySubmitHandler,
  searchEventHandler,
  employeeUser,
}: IAddFormEmployeeProps) => {
  return (
    <Row>
      <Container>
        <Form>
          <div className="mb-3">
            <h3>Enter The Details</h3>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={onMychangeHandler}
              name="first_name"
              value={employeeUser.first_name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={onMychangeHandler}
              name="last_name"
              value={employeeUser.last_name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email Address"
              onChange={onMychangeHandler}
              name="email"
              value={employeeUser.email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              onChange={onMychangeHandler}
              name="phone"
              value={employeeUser.phone}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Description"
              onChange={onMychangeHandler}
              name="description"
              value={employeeUser.description}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={onMychangeHandler}
              name="address"
              value={employeeUser.address}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="mr-3"
            onClick={onMySubmitHandler}
          >
            Submit
          </Button>
          <Button variant="outline-secondary" onClick={onCancelClick}>
            Cancel
          </Button>
        </Form>
      </Container>
    </Row>
  );
};
export default AddFormEmployee;
