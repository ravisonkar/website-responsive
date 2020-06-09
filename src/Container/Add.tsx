import React from 'react';
import { IAdd } from '../classes/IAdd';
import Addmik from '../Component/AddFormik';
import { RouteComponentProps } from 'react-router';
import { addEmployeeUserFormRequest } from '../http/userForm';
import { FormikActions, Formik, Field, FormikValues } from 'formik';
interface IAddstate {
  user_data: IAdd;
}
class Add extends React.Component<RouteComponentProps, IAddstate> {
  state = { user_data: {} as IAdd };
  render() {
    return (
      <div>
        <Addmik
          user_data={this.state.user_data}
          submitHandler={this.submitHandler}
        ></Addmik>
      </div>
    );
  }
  submitHandler = async (user_data: IAdd, actions: FormikActions<any>) => {
    await this.setState({ user_data });
    let data = {
      first_name: this.state.user_data.first_name,
      last_name: this.state.user_data.last_name,
      email: this.state.user_data.email,
      phone: this.state.user_data.phone,
      address: this.state.user_data.address,
      description: this.state.user_data.description,
    };
    try {
      await addEmployeeUserFormRequest(data);
    } catch (error) {
      console.log(error);
    }
  };
}
export default Add;
