import React from 'react';
import LoginForm from '../Component/LoginForm';
import { loginUserRequest } from '../http/userForm';
import ILogin from '../classes/ILogin';
type EventHandler = (event: any) => void;

interface ILoginState {
  loginData: ILogin;
  showPassword: boolean;
}
interface ILoginProps {
  saveUserHandler: EventHandler;
}
class Login extends React.Component<ILoginProps, ILoginState> {
  state = {
    loginData: {} as ILogin,
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
      loginData: { ...this.state.loginData },
      [event.target.name]: event.target.value,
      showPassword: false,
    });
  };

  loginSubmitHandler = async (event: any) => {
    event.persist();
    let employeeUserData = {
      ...this.state,
    };
    try {
      const employeeUser = await loginUserRequest(employeeUserData);
      this.props.saveUserHandler(employeeUser);
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
