import React, { useState, useEffect } from 'react';
import iEmploye from '../classes/iEmploye';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { addUserFormRequest, editUserFormRequest } from '../http/userForm';
import { useParams, Redirect } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import iUserForm from '../classes/inew';

const defaultValues: iUserForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address: '',
  description: '',
};

const New = () => {
  const [values, setvalue] = useState(defaultValues as iUserForm);

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
      const customer = await editUserFormRequest(id);
      await setvalue(customer);
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
              onChange={handleChange}
              name="first_name"
              value={values.first_name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter lastname</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter email"
              onChange={handleChange}
              name="last_name"
              value={values.last_name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
              value={values.email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="phonenumber"
              placeholder="Phonenumber"
              onChange={handleChange}
              name="phone"
              value={values.phone}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter firstname</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter firstname"
              onChange={handleChange}
              name="address"
              value={values.address}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter firstname</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter firstname"
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
