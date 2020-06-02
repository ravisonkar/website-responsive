import React from 'react';
import AddFormEmployee from '../Component/AddFormEmploye';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ITeam from '../classes/ITeam';
import Container from 'react-bootstrap/Container';
import {
  addEmployeeUserFormRequest,
  editEmployeeUserFormRequest,
  updateEmployeeUserFormRequest,
} from '../http/userForm';
interface EmployeeState {
  shouldRedirectToEmployeeEventForm: boolean;
  employeeUsers: ITeam;
}

class AddEmployee extends React.Component<RouteComponentProps, EmployeeState> {
  state = {
    shouldRedirectToEmployeeEventForm: false,
    employeeUsers: {} as ITeam,
  };
  componentDidMount() {
    const { id }: any = this.props.match?.params;
    if (id) {
      this.editEmplpoyeUserData(id);
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
      let { id }: any = this.props.match?.params;
      if (id) {
        this.setState({ shouldRedirectToEmployeeEventForm: true });
        await updateEmployeeUserFormRequest(data, id);
      } else {
        await addEmployeeUserFormRequest(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  onMychangeHandler = (event: any) => {
    event.persist();
    this.setState({
      employeeUsers: { ...this.state.employeeUsers },
      [event.target.name]: event.target.value,
      shouldRedirectToEmployeeEventForm: false,
    });
  };

  onCancelClick = () => {
    this.setState({
      shouldRedirectToEmployeeEventForm: true,
    });
  };

  editEmplpoyeUserData = async (id: any) => {
    try {
      const employeeUser = await editEmployeeUserFormRequest(id);
      this.setState({ employeeUsers: employeeUser });
    } catch (error) {
      console.log(error);
    }
  };

  searchEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
}
export default AddEmployee;
