import React, { useState, useEffect } from 'react';
import iEmploye from '../classes/IEmploye';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { addUserFormRequest, editUserFormRequest } from '../http/userForm';
import { useParams, Redirect } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import IUserForm from '../classes/Inew';

const New = () => {
  const [values, setvalue] = useState({} as IUserForm);

  const handleChange = (event: any) => {
    event.persist();
    setvalue((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.persist();
    try {
      await addUserFormRequest(values);
    } catch (error) {
      console.error(error);
    }
  };

  const { id } = useParams();

  const getData = async () => {
    try {
      const userData = await editUserFormRequest(id);
      await setvalue(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Row>
      <Container>
        <Form>
          <div className="mb-3">
            <h3>Enter The Details</h3>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="name"
              placeholder="First Name"
              onChange={handleChange}
              name="first_name"
              value={values.first_name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="name"
              placeholder="Last Name"
              onChange={handleChange}
              name="last_name"
              value={values.last_name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={values.email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="phonenumber"
              placeholder="Phone Number"
              onChange={handleChange}
              name="phone"
              value={values.phone}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="name"
              placeholder="Address"
              onChange={handleChange}
              name="address"
              value={values.address}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="name"
              placeholder="Description"
              onChange={handleChange}
              name="description"
              value={values.description}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mr-3"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </Row>
  );
};
export default New;
