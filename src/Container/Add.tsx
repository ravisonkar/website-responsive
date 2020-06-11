import React from 'react';
import AddFormik from '../Component/AddFormik';
import { RouteComponentProps } from 'react-router';
import { addEmployeeUserFormReques } from '../http/userForm';
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

  setEmployeeUserDat = async (employeeUser: IUser) => {
    const employeeUserData: IUserPayload = {
      first_name: employeeUser.first_name,
      last_name: employeeUser.last_name,
      phone: employeeUser.phone,
      address: employeeUser.address,
      description: employeeUser.description,
      email: employeeUser.email.id,
    };
    addEmployeeUserFormReques(employeeUserData);
    console.log(employeeUserData);
  };

  submitHandler = async (userData: IUser, actions: FormikActions<any>) => {
    this.setState({ userData });
    try {
      const user = await this.setEmployeeUserDat(userData);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
}
export default Add;
