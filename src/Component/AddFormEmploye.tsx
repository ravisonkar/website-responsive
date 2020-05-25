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
interface AddFormEmployeeProps {
  onCancelClick: VoidHandler;
  onMychangeHandler: EventHandler;
  onMySubmitHandler: EventHandler;
  searchEventHandler: EventHandler;
  data: ITeam;
}

const AddFormEmployee = ({
  onCancelClick,
  onMychangeHandler,
  onMySubmitHandler,
  searchEventHandler,
  data,
}: AddFormEmployeeProps) => {
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
              type="name"
              placeholder="First Name"
              onChange={onMychangeHandler}
              name="first_name"
              value={data.first_name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Last Name"
              onChange={onMychangeHandler}
              name="last_name"
              value={data.last_name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={onMychangeHandler}
              name="email"
              value={data.email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="phonenumber"
              placeholder="Phone Number"
              onChange={onMychangeHandler}
              name="phone"
              value={data.phone}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="name"
              placeholder="Description"
              onChange={onMychangeHandler}
              name="description"
              value={data.description}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="name"
              placeholder="Address"
              onChange={onMychangeHandler}
              name="address"
              value={data.address}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mr-3"
            onClick={onMySubmitHandler}
          >
            Submit
          </Button>
          <Button variant="primary" onClick={onCancelClick}>
            Cancel
          </Button>
        </Form>
      </Container>
    </Row>
  );
};
export default AddFormEmployee;
