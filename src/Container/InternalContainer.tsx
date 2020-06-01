import React from 'react';
import Header from '../Component/Header';
import { Switch, Route, RouteComponentProps } from 'react-router';
import Home from '../Container/Home';
import About from '../Container/About';
import EmployeList from './EmployeList';
import Footer from '../Component/Footer';
import AddEmployee from '../Container/AddEmployee';
import { SessionConsumer, SessionProvider } from '../Container/SessionContext';
import IUser from '../classes/IUser';

import New from './AddUserForm';
import List from '../Container/List';
import Login from './login';
import LoginForm from '../Component/LoginForm';
import Logins from './Logins';
type EventHandler = (user: IUser) => void;

interface SessionState {
  user: IUser[];
  saveUserHandler: EventHandler;
}
class InternalContainer extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <SessionProvider>
          <SessionConsumer>
            {({ user_name }) => (
              <Header
                currentPath={this.props.location.pathname}
                user_name={user_name}
              ></Header>
            )}
          </SessionConsumer>
        </SessionProvider>
        <SessionProvider>
          <SessionConsumer>
            {({ user_name, saveUserHandler }) =>
              this.routes(user_name, saveUserHandler)
            }
          </SessionConsumer>
        </SessionProvider>
        {/* <Footer></Footer> */}
      </div>
    );
  }

  routes = (user_name: string, saveUserHandler: EventHandler) => {
    console.log(user_name);
    return (
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => {
            return <Home user_name={user_name}></Home>;
          }}
        ></Route>
        <Route
          path="/about"
          exact={true}
          render={() => {
            return <About></About>;
          }}
        ></Route>
        )}
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
        <Route
          path="/login"
          exact={false}
          render={(props) => {
            return (
              <Logins
                {...props}
                saveUserHandler={saveUserHandler}
                user_name={user_name}
              ></Logins>
            );
          }}
        ></Route>
      </Switch>
    );
  };
}
export default InternalContainer;
