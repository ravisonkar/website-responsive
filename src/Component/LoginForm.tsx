import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

type EventHandler = (event: any) => void;
type ShowHandler = () => void;
interface LoginProps {
  loginSubmitHandler: EventHandler;
  handleChange: EventHandler;
  showPassword: boolean;
  onShowPassword: ShowHandler;
  user_name: string;
}

const LoginForm = ({
  loginSubmitHandler,
  handleChange,
  showPassword,
  onShowPassword,
  user_name,
}: LoginProps) => {
  return (
    <div>
      <Form>
        <Container>
          <Row>
            <div className="mx-auto text-center g">
              <img className="img mb-3" src="assets/image/logo.png" />
              <div className="card a p-lg-5 p-md-4 p-3 shadow-lg">
                <h3 className="text-center mb-3">Login</h3>
                <h6>{user_name}</h6>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      onChange={handleChange}
                      name="user_name"
                    />
                  </Form.Group>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Password"
                      aria-label="Recipient's username"
                      onChange={handleChange}
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text
                        id="basic-addon2"
                        onClick={onShowPassword}
                      >
                        {showPassword ? (
                          <FontAwesomeIcon icon="eye-slash"></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon icon="eye"></FontAwesomeIcon>
                        )}
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    type="submit"
                    className="float-right mt-3"
                    onClick={loginSubmitHandler}
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
