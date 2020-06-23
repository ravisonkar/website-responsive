import React from 'react';
import AddFormEmployee from '../Component/AddFormEmployee';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router';
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
}

class AddEmployee extends React.Component<RouteComponentProps, EmployeeState> {
  state = {
    shouldRedirectToEmployeeEventForm: false,
    employeeUsers: {} as ITeam,
    isButtonDisabled: true,
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
          onMychangeHandler={this.onMychangeHandler}
          employeeUsers={this.state.employeeUsers}
          onMySubmitHandler={this.onMySubmitHandler}
          searchEventHandler={this.searchEventHandler}
          isButtonDisabled={this.state.isButtonDisabled}
        ></AddFormEmployee>
      </div>
    );
  }

  onMySubmitHandler = async (event: any) => {
    event.persist();
    let data = {
      ...this.state,
    };
    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  buttonDisabledEnable = () => {
    console.log(this.state.employeeUsers);
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

  onMychangeHandler = (event: any) => {
    this.setState({
      employeeUsers: {
        ...this.state.employeeUsers,
        [event.target.name]: event.target.value,
      },
      [event.target.name]: event.target.value,
      shouldRedirectToEmployeeEventForm: false,
      isButtonDisabled: true,
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
      this.onMychangeHandler('');
    } catch (error) {
      console.log(error);
    }
  };

  searchEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
}
export default AddEmployee;
