import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { VoidHandler } from '../Component/types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface AddFormEmployeeProps {
  onCancelClick: VoidHandler;
}
const AddFormEmployee = ({ onCancelClick }: AddFormEmployeeProps) => {
  return (
    <Row>
      <Container>
        <Form>
          <div className="mb-3">
            <h3>Enter The Details</h3>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter firstname</Form.Label>
            <Form.Control type="email" placeholder="Enter firstname" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter lastname</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="phonenumber" placeholder="Phonenumber" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mr-3">
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
