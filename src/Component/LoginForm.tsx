import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const LoginForm = () => {
  return (
    <div>
      <Form>
        <Container>
          <Row>
            <div className="mx-auto text-center g">
              <img className="img mb-3" src="assets/image/logo.png" />
              <div className="card a p-lg-5 p-md-4 p-3 shadow-lg">
                <h3 className="text-center mb-3">Login</h3>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Password"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">
                        <FontAwesomeIcon icon="eye"></FontAwesomeIcon>
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    type="submit"
                    className="float-right mt-3"
                  >
                    Login
                  </Button>
                </Col>
              </div>
            </div>
          </Row>
        </Container>
      </Form>
    </div>
  );
};
export default LoginForm;
