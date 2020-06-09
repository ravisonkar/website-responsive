import React from 'react';
import AddFormik from '../Component/AddFormik';
import { RouteComponentProps } from 'react-router';
import { addEmployeeUserFormRequest } from '../http/userForm';
import { FormikActions, Formik, Field, FormikValues } from 'formik';
import IUser from '../classes/IUser';
interface IAddstate {
  userData: IUser;
}
class Add extends React.Component<RouteComponentProps, IAddstate> {
  state = { userData: {} as IUser };
  render() {
    return (
      <div>
        <AddFormik
          user_data={this.state.userData}
          submitHandler={this.submitHandler}
        />
      </div>
    );
  }
  submitHandler = async (userData: IUser, actions: FormikActions<any>) => {
    console.log(userData)
     this.setState({ userData });

    try {
      await addEmployeeUserFormRequest(userData);
    } catch (error) {
      console.log(error);
    }
  };
}
export default Add;
