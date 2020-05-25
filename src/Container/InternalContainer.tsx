import React from 'react';
import Header from '../Component/Header';
import { Switch, Route, RouteComponentProps } from 'react-router';
import Home from '../Container/Home';
import About from '../Container/About';
import EmployeList from './EmployeList';
import Footer from '../Component/Footer';
import AddEmployee from '../Container/AddEmployee';
import New from './AddUserForm';
import List from '../Container/List';
import Login from './login';

class InternalContainer extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Header currentPath={this.props.location.pathname}></Header>
        {this.routes}
        {/* <Footer></Footer> */}
      </div>
    );
  }

  private routes = (
    <Switch>
      <Route
        path="/"
        exact={true}
        render={() => {
          return <Home></Home>;
        }}
      ></Route>
      <Route
        path="/about"
        exact={true}
        render={() => {
          return <About></About>;
        }}
      ></Route>
      <Route
        path="/employelist"
        exact={true}
        render={(props) => {
          return <EmployeList {...props}></EmployeList>;
        }}
      ></Route>
      <Route
        path="/event/add"
        exact={true}
        render={(props) => {
          return <AddEmployee {...props}></AddEmployee>;
        }}
      ></Route>
      <Route
        path="/event/add:id"
        exact={true}
        render={(props) => {
          return <AddEmployee {...props}></AddEmployee>;
        }}
      ></Route>
      <Route
        path="/newdata"
        exact={true}
        render={(props) => {
          return <New></New>;
        }}
      ></Route>

      <Route
        path="/newdata:id"
        exact={true}
        render={() => {
          return <New></New>;
        }}
      ></Route>

      <Route
        path="/list"
        exact={false}
        render={() => {
          return <List></List>;
        }}
      ></Route>
      <Route
        path="/user"
        exact={false}
        render={(props) => {
          return <Login {...props}></Login>;
        }}
      ></Route>
    </Switch>
  );
}
export default InternalContainer;
