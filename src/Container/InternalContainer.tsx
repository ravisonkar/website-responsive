import React from 'react';
import Header from '../Component/Header';
import { Switch, Route, RouteComponentProps } from 'react-router';
import Home from '../Container/Home';
import About from '../Container/About';
import EmployeeList from './EmployeeList';
import Footer from '../Component/Footer';
import AddEmployee from '../Container/AddEmployee';
<<<<<<< HEAD
import { SessionConsumer, SessionProvider } from '../Container/SessionContext';
import IsaveUser from '../classes/IsaveUser';
import Login from './Login';
import Add from './Add';
type EventHandler = (user: IsaveUser) => void;
=======
import AddUserForm from './AddUserForm';
import List from '../Container/List';
import Login from './login';
>>>>>>> master

class InternalContainer extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Header currentPath={this.props.location.pathname}></Header>
        <SessionProvider>
          <SessionConsumer>
            {({ user, saveUserHandler }) => this.routes(user, saveUserHandler)}
          </SessionConsumer>
        </SessionProvider>
        {/* <Footer></Footer> */}
      </div>
    );
  }

<<<<<<< HEAD
  routes = (user: IsaveUser, saveUserHandler: EventHandler) => {
    return (
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
          path="/employees"
          exact={true}
          render={(props) => {
            return <EmployeeList {...props}></EmployeeList>;
          }}
        ></Route>
        <Route
          path="/employee/add"
          exact={true}
          render={(props) => {
            return <AddEmployee {...props}></AddEmployee>;
          }}
        ></Route>
        <Route
          path="/employee:id"
          exact={true}
          render={(props) => {
            return <AddEmployee {...props}></AddEmployee>;
          }}
        ></Route>
        <Route
          path="/login"
          exact={false}
          render={(props) => {
            return <Login {...props} saveUserHandler={saveUserHandler}></Login>;
          }}
        ></Route>
        <Route
          path="/add"
          exact={false}
          render={(props) => {
            return <Add {...props}></Add>;
          }}
        ></Route>
      </Switch>
    );
  };
=======
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
        path="/employees"
        exact={true}
        render={(props) => {
          return <EmployeList {...props}></EmployeList>;
        }}
      ></Route>
      <Route
        path="/employee/add"
        exact={true}
        render={(props) => {
          return <AddEmployee {...props}></AddEmployee>;
        }}
      ></Route>
      <Route
        path="/employee:id"
        exact={true}
        render={(props) => {
          return <AddEmployee {...props}></AddEmployee>;
        }}
      ></Route>
      <Route
        path="/userform"
        exact={true}
        render={() => {
          return <AddUserForm></AddUserForm>;
        }}
      ></Route>

      <Route
        path="/user:id"
        exact={true}
        render={() => {
          return <AddUserForm></AddUserForm>;
        }}
      ></Route>

      <Route
        path="/list"
        exact={false}
        render={() => {
          return <List></List>;
        }}
      ></Route>
      {/* <Route
        path="/user"
        exact={false}
        render={(props) => {
          return <Login {...props}></Login>;
        }}
      ></Route> */}
    </Switch>
  );
>>>>>>> master
}
export default InternalContainer;
