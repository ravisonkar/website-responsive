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
  updateERmployeeUserFormRequest,
} from '../http/employeeUser';
interface IEmployeeState {
  shouldRedirectToEmployeeEventForm: boolean;
  employeeUser: ITeam;
}

class AddEmployee extends React.Component<RouteComponentProps, IEmployeeState> {
  state = {
    shouldRedirectToEmployeeEventForm: false,
    employeeUser: {} as ITeam,
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
          employeeUser={this.state.employeeUser}
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
        await updateERmployeeUserFormRequest(data, id);
        this.setState({ shouldRedirectToEmployeeEventForm: true });
      } else {
        await addEmployeeUserFormRequest(data);
        this.setState({ shouldRedirectToEmployeeEventForm: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  onMychangeHandler = (event: any) => {
    event.persist();
    this.setState({
      employeeUser: { ...this.state.employeeUser },
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
      const employeUser = await editEmployeeUserFormRequest(id);
      console.log(employeUser);
      this.setState({ employeeUser: employeUser });
    } catch (error) {
      console.log(error);
    }
  };

  searchEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
}
export default AddEmployee;
