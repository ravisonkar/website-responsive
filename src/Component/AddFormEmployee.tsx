import React from 'react';
import { Row, Container, Form, Button } from 'react-bootstrap';
import { VoidHandler } from '../shared/types';
import { ITeam } from '../classes/ITeam';
import 'react-dropdown/style.css';

type EventHandler = (event: any) => void;
interface AddFormEmployeeProps {
  onCancelClick: VoidHandler;
  onMychangeHandler: EventHandler;
  onMySubmitHandler: EventHandler;
  searchEventHandler: EventHandler;
  employeeUsers: ITeam;
  isButtonDisabled: boolean;
}

const AddFormEmployee = ({
  onCancelClick,
  onMychangeHandler,
  onMySubmitHandler,
  searchEventHandler,
  employeeUsers,
  isButtonDisabled,
}: AddFormEmployeeProps) => {
  return (
    <Row>
      <Container>
        <Form>
          <div className="mb-3">
            <h3>Enter The Details</h3>
          </div>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={onMychangeHandler}
              name="first_name"
              value={employeeUsers.first_name ? employeeUsers.first_name : ''}
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={onMychangeHandler}
              name="last_name"
              value={employeeUsers.last_name ? employeeUsers.last_name : ''}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email Address"
              onChange={onMychangeHandler}
              name="email"
              value={employeeUsers.email ? employeeUsers.email : ''}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              onChange={onMychangeHandler}
              name="phone"
              value={employeeUsers.phone ? employeeUsers.phone : ''}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="text"
              onChange={onMychangeHandler}
              name="description"
              value={employeeUsers.description ? employeeUsers.description : ''}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={onMychangeHandler}
              name="address"
              value={employeeUsers.address ? employeeUsers.address : ''}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="mr-3"
            onClick={onMySubmitHandler}
            disabled={isButtonDisabled}
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
