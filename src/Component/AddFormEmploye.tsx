import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { VoidHandler } from '../shared/types';
import Select from 'react-select';
import Dropdown from 'react-dropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import iEmploye from '../classes/iEmploye';
import 'react-dropdown/style.css';

type EventHandler = (event: any) => void;
interface AddFormEmployeeProps {
  onCancelClick: VoidHandler;
  onMychangeHandler: EventHandler;
  onMySubmitHandler: EventHandler;
  searchEventHandler: EventHandler;
  // data: iEmploye;
}
interface IBusinessUnit {
  label: string;
  value: string;
}
const detail = [
  {
    value: 'stanford',
    label: 'Stanfordxfjngfkjd',
  },
  {
    value: 'Stanford University',
    label: 'Stanford',
  },
  {
    value: 'Stanford University',
    label: 'Stanford',
  },
  {
    value: 'Stanford University',
    label: 'Stanford',
  },
  {
    value: 'Stanford University',
    label: 'Stanford',
  },
  {
    value: 'Stanford University',
    label: 'Stanford',
  },
];

const AddFormEmployee = ({
  onCancelClick,
  onMychangeHandler,
  onMySubmitHandler,
  searchEventHandler,
}: // data,
AddFormEmployeeProps) => {
  return (
    <Row>
      <Container>
        <Form>
          <div className="mb-3">
            <h3>Enter The Details</h3>
            {/* <Select
              name="university"
              options={detail}
              onChange={(value) => searchEventHandler(value)}
            /> */}
            {/* <Dropdown
              options={detail}
              onChange={searchEventHandler}
              placeholder="Select an option"
            /> */}
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter firstname</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter firstname"
              onChange={onMychangeHandler}
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter lastname</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter email"
              onChange={onMychangeHandler}
              name="lastname"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={onMychangeHandler}
              name="email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="phonenumber"
              placeholder="Phonenumber"
              onChange={onMychangeHandler}
              name="phonenumber"
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
