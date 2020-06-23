import React from 'react';
import AddFormik from '../Component/AddFormik';
import { RouteComponentProps } from 'react-router';
import { addFormRequest } from '../http/userForm';
import { IUserPayload } from '../classes/IUser';
import { FormikActions } from 'formik';
import { IUser } from '../classes/IUser';
interface IAddState {
  userData: IUser;
}
class Add extends React.Component<RouteComponentProps, IAddState> {
  state = { userData: {} as IUser };
  render() {
    return (
      <div>
        <AddFormik
          userData={this.state.userData}
          submitHandler={this.submitHandler}
        />
      </div>
    );
  }

  setUserData = async (employeeUser: IUser) => {
    const employeeUserData: IUserPayload = {
      first_name: employeeUser.first_name,
      last_name: employeeUser.last_name,
      phone: employeeUser.phone,
      address: employeeUser.address,
      description: employeeUser.description,
      gender: employeeUser.gender.id,
    };
    return employeeUserData;
  };

  submitHandler = async (userData: IUser, actions: FormikActions<any>) => {
    this.setState({ userData });
    try {
      const user = await this.setUserData(userData);
      addFormRequest(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
}
export default Add;
