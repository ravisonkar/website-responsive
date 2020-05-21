import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { RouteComponentProps } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ilogin from '../classes/ilogin';

interface iloginstate {
  username: string;
  password: string;
  usertype: string;
}

interface ISessionProps {
  cookies: Cookies;
  children?: React.ReactNode;
}

class Login extends React.PureComponent<
  ISessionProps & RouteComponentProps,
  iloginstate
> {
  state = {
    username: '',
    password: '',
    usertype: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event: any) => {
    event.persist();
    let data = {
      ...this.state,
    };
    axios.post(`http://localhost:5000/login`, data);
    this.savehandler(this.state.username);
  };
  savehandler = (name: string) => {
    this.props.cookies.set('KJHKJ', name, { path: '/' });
  };

  render() {
    return (
      <Row>
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter firstname</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter firstname"
                onChange={this.handleChange}
                name="username"
                value={this.state.username}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter lastname</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter email"
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter email"
                onChange={this.handleChange}
                name="usertype"
                value={this.state.usertype}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mr-3"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </Row>
    );
  }
}
export default withCookies(Login);
