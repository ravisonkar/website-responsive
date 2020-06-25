import React from 'react';
import LoginForm from '../Component/LoginForm';
import { loginUserRequest } from '../http/userForm';
import ILogin from '../classes/ILogin';

type EventHandler = (event: any) => void;

interface ILoginState {
  loginData: ILogin;
  showPassword: boolean;
  isButtonDisabled: boolean;
}

interface ILoginProps {
  saveUserHandler: EventHandler;
}

class Login extends React.Component<ILoginProps, ILoginState> {
  state = {
    loginData: {} as ILogin,
    showPassword: false,
    isButtonDisabled: true,
  };

  render() {
    return (
      <div>
        <LoginForm
          loginSubmitHandler={this.loginSubmitHandler}
          handleChange={this.handleChange}
          showPassword={this.state.showPassword}
          onShowPassword={this.onShowPassword}
          Responsefacebbokhandler={this.Responsefacebbokhandler}
          responseGoogleHandler={this.responseGoogleHandler}
          isButtonDisabled={this.state.isButtonDisabled}
        ></LoginForm>
      </div>
    );
  }

  buttonDisabledEnable = () => {
    const { user_name, password } = this.state.loginData;
    if (user_name && password) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({
      loginData: {
        ...this.state.loginData,
        [event.target.name]: event.target.value,
      },
    });
    this.buttonDisabledEnable();
  };

  loginSubmitHandler = async (event: any) => {
    event.preventDefault();
    let employeeUserData = {
      ...this.state.loginData,
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

  Responsefacebbokhandler = (response: any) => {
    this.props.saveUserHandler(response);
  };

  responseGoogleHandler = (response: any) => {
    console.log(response);
  };
}
export default Login;
