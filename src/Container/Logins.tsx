import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import LoginForm from '../Component/LoginForm';
import Ilogin from '../classes/Ilogin';
import IUser from '../classes/IUser';
type EventHandler = (event: any) => void;

interface ILoginState {
  login: Ilogin;
}
interface ILoginProps {
  saveUserHandler: EventHandler;
  user_name: string;
}
class Logins extends React.Component<ILoginProps> {
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
          user_name={this.props.user_name}
        ></LoginForm>
      </div>
    );
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.setState({
      login: { user_name: this.state.user_name, password: this.state.password },
      [event.target.name]: event.target.value,
    });
  };

  loginSubmitHandler = (event: any) => {
    event.persist();
    let data = {
      ...this.state,
    };
    axios.post(`http://localhost:5000/login`, data).then((value) => {
      return value.data;
    });
    this.props.saveUserHandler(data);
  };

  onShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
}
export default Logins;
