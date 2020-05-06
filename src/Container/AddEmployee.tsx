import React from 'react';
import AddFormEmployee from '../Component/AddFormEmploye';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router';

interface EmployeState {
  shouldRedirectToEmployeeEventForm: boolean;
}

class AddEmployee extends React.Component<RouteComponentProps, EmployeState> {
  state = {
    shouldRedirectToEmployeeEventForm: false,
  };
  render() {
    if (this.state.shouldRedirectToEmployeeEventForm) {
      return <Redirect to="/team"></Redirect>;
    }
    return (
      <AddFormEmployee onCancelClick={this.onCancelClick}></AddFormEmployee>
    );
  }
  onCancelClick = () => {
    this.setState({
      shouldRedirectToEmployeeEventForm: true,
    });
  };
}
export default AddEmployee;
