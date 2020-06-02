import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import LoginForm from '../Component/LoginForm';
import Ilogin from '../classes/Ilogin';
import IUser from '../classes/IUser';
import { loginUserRequest } from '../http/userForm';
type EventHandler = (event: any) => void;

interface ILoginState {
  login: Ilogin;
}
interface ILoginProps {
  saveUserHandler: EventHandler;
}
class Login extends React.Component<ILoginProps> {
  state = {
    user_name: '',
    password: '',
    showPassword: false,
  };
  render() {
    return (
      <div>
        <LoginForm
          loginSubmitHandler={this.loginSubmitHandler}
          handleChange={this.handleChange}
          showPassword={this.state.showPassword}
          onShowPassword={this.onShowPassword}
        ></LoginForm>
      </div>
    );
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.setState({
      user_name: this.state.user_name,
      password: this.state.password,
      [event.target.name]: event.target.value,
    });
  };

  loginSubmitHandler = (event: any) => {
    event.persist();
    let employeeUserData = {
      ...this.state,
    };
    try {
      this.props.saveUserHandler(employeeUserData);
      const employeeUser = loginUserRequest(employeeUserData);
    } catch (error) {
      console.log(error);
    }
  };

  onShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
}
export default Login;
