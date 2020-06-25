import React from 'react';
import AddFormEmployee from '../Component/AddFormEmployee';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router';
import { IFormError } from '../classes/IFormError';
import { ITeam } from '../classes/ITeam';
import { toast } from 'react-toastify';
import {
  addEmployeeUserFormRequest,
  editEmployeeUserFormRequest,
  updateEmployeeUserFormRequest,
} from '../http/userForm';
interface EmployeeState {
  shouldRedirectToEmployeeEventForm: boolean;
  employeeUsers: ITeam;
  isButtonDisabled: boolean;
  first_name_error: string;
}

class AddEmployee extends React.Component<RouteComponentProps, EmployeeState> {
  state = {
    shouldRedirectToEmployeeEventForm: false,
    employeeUsers: {} as ITeam,
    isButtonDisabled: true,
    first_name_error: '',
  };

  componentDidMount() {
    const { id }: any = this.props.match?.params;
    if (id) {
      this.editEmplpoyeeUserData(id);
    }
  }

  render() {
    if (this.state.shouldRedirectToEmployeeEventForm) {
      return <Redirect to="/employees"></Redirect>;
    }

    return (
      <div>
        <AddFormEmployee
          onCancelClick={this.onCancelClick}
          changeHandler={this.changeHandler}
          employeeUsers={this.state.employeeUsers}
          submitHandler={this.submitHandler}
          searchEventHandler={this.searchEventHandler}
          isButtonDisabled={this.state.isButtonDisabled}
          first_name_error={this.state.first_name_error}
        ></AddFormEmployee>
      </div>
    );
  }

  validation = () => {
    const {
      first_name,
      last_name,
      email,
      phone,
      address,
      description,
    } = this.state.employeeUsers;
    if (!first_name) {
      console.log(!first_name);
      let first_name_error = 'first name is required';
      this.setState({ first_name_error });
      return false;
    }
    return true;
  };

  submitHandler = async (event: any) => {
    event.persist();
    let data = {
      ...this.state.employeeUsers,
    };
    try {
      let isValid = this.validation();
      if (isValid) {
        let id: any = this.state.employeeUsers.id;
        if (id) {
          await updateEmployeeUserFormRequest(data, id);
          toast.success('User update successfully', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          this.setState({ shouldRedirectToEmployeeEventForm: true });
        } else {
          await addEmployeeUserFormRequest(data);
          toast.success('User added successfully', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          this.setState({ shouldRedirectToEmployeeEventForm: true });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  buttonDisabledEnable = () => {
    const {
      first_name,
      last_name,
      email,
      phone,
      address,
      description,
    } = this.state.employeeUsers;
    if (first_name && last_name && email && phone && address && description) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  };

  changeHandler = (event: any) => {
    this.setState({
      employeeUsers: {
        ...this.state.employeeUsers,
        [event.target.name]: event.target.value,
      },
    });

    this.buttonDisabledEnable();
  };

  onCancelClick = () => {
    this.setState({
      shouldRedirectToEmployeeEventForm: true,
    });
  };

  editEmplpoyeeUserData = async (id: any) => {
    try {
      const employeeUser = await editEmployeeUserFormRequest(id);
      this.setState({ employeeUsers: employeeUser });
      this.buttonDisabledEnable();
    } catch (error) {
      console.log(error);
    }
  };

  searchEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
}
export default AddEmployee;
