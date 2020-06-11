import React from 'react';
import Header from '../Component/Header';
import { Switch, Route, RouteComponentProps } from 'react-router';
import Home from '../Container/Home';
import About from '../Container/About';
import EmployeeList from './EmployeeList';
import Footer from '../Component/Footer';
import AddEmployee from '../Container/AddEmployee';
import { SessionConsumer, SessionProvider } from '../Container/SessionContext';
import { IUser } from '../classes/IUser';
import Login from './Login';
import Add from './Add';
type EventHandler = (user: IUser) => void;

class InternalContainer extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <SessionConsumer>
          {({ user }) => (
            <Header
              currentPath={this.props.location.pathname}
              user_name={user.first_name}
            ></Header>
          )}
        </SessionConsumer>
        <SessionProvider>
          <SessionConsumer>
            {({ user, saveUserHandler }) =>
              this.routes(user.first_name, saveUserHandler)
            }
          </SessionConsumer>
        </SessionProvider>
        {/* <Footer></Footer> */}
      </div>
    );
  }

  routes = (user_name: string, saveUserHandler: EventHandler) => {
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
        )}
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
}
export default InternalContainer;
