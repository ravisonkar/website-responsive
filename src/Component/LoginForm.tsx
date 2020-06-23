import React from 'react';
import {
  InputGroup,
  FormControl,
  Row,
  Col,
  Container,
  Button,
  Form,
} from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookLogin from 'react-facebook-login';

type EventHandler = (event: any) => void;
type ShowHandler = () => void;
interface LoginProps {
  loginSubmitHandler: EventHandler;
  handleChange: EventHandler;
  showPassword: boolean;
  onShowPassword: ShowHandler;
  Responsefacebbokhandler: EventHandler;
  responseGoogleHandler: EventHandler;
}

const LoginForm = ({
  loginSubmitHandler,
  handleChange,
  showPassword,
  onShowPassword,
  Responsefacebbokhandler,
  responseGoogleHandler,
}: LoginProps) => {
  return (
    <div>
      <Form>
        <Container>
          <Row>
            <div className="mx-auto text-center g">
              <img className="img mb-3" src="assets/image/logo.png" />
              <div className="card a p-lg-5 p-md-4 p-3 shadow-lg">
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
                    className="float-right mt-3"
                    onClick={loginSubmitHandler}
                  >
                    Login
                  </Button>
                </Col>
                {/* <div>
                  <FacebookLogin
                    appId="1181770952178346"
                    fields="name,email,picture"
                    callback={Responsefacebbokhandler}
                  />
                  <GoogleLogin
                    clientId="698145525999-5efuo0ff7hkpm7gpt3vn6uo9rur805hl.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogleHandler}
                    onFailure={responseGoogleHandler}
                  />
                </div> */}
              </div>
            </div>
          </Row>
        </Container>
      </Form>
    </div>
  );
};
export default LoginForm;
