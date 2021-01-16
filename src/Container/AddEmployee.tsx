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
<<<<<<< HEAD
  updateEmployeeUserFormRequest,
} from '../http/userForm';
interface EmployeeState {
  shouldRedirectToEmployeeEventForm: boolean;
  employeeUsers: ITeam;
  isButtonDisabled: boolean;
  first_name_error: string;
=======
  updateERmployeeUserFormRequest,
} from '../http/employeeUser';
interface IEmployeeState {
  shouldRedirectToEmployeeEventForm: boolean;
  employeeUser: ITeam;
>>>>>>> master
}

class AddEmployee extends React.Component<RouteComponentProps, IEmployeeState> {
  state = {
    shouldRedirectToEmployeeEventForm: false,
<<<<<<< HEAD
    employeeUsers: {} as ITeam,
    isButtonDisabled: true,
    first_name_error: '',
=======
    employeeUser: {} as ITeam,
>>>>>>> master
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
<<<<<<< HEAD
          changeHandler={this.changeHandler}
          employeeUsers={this.state.employeeUsers}
          submitHandler={this.submitHandler}
=======
          onMychangeHandler={this.onMychangeHandler}
          employeeUser={this.state.employeeUser}
          onMySubmitHandler={this.onMySubmitHandler}
>>>>>>> master
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
<<<<<<< HEAD
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
=======
      let { id }: any = this.props.match?.params;
      if (id) {
        await updateERmployeeUserFormRequest(data, id);
        this.setState({ shouldRedirectToEmployeeEventForm: true });
      } else {
        await addEmployeeUserFormRequest(data);
        this.setState({ shouldRedirectToEmployeeEventForm: true });
>>>>>>> master
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
<<<<<<< HEAD
      employeeUsers: {
        ...this.state.employeeUsers,
        [event.target.name]: event.target.value,
      },
=======
      employeeUser: { ...this.state.employeeUser },
      [event.target.name]: event.target.value,
      shouldRedirectToEmployeeEventForm: false,
>>>>>>> master
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
<<<<<<< HEAD
      const employeeUser = await editEmployeeUserFormRequest(id);
      this.setState({ employeeUsers: employeeUser });
      this.buttonDisabledEnable();
=======
      const employeUser = await editEmployeeUserFormRequest(id);
      console.log(employeUser);
      this.setState({ employeeUser: employeUser });
>>>>>>> master
    } catch (error) {
      console.log(error);
    }
  };

  searchEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
}
export default AddEmployee;
