import React from 'react';
import Header from '../Component/Header';
import { Switch, Route, RouteComponentProps } from 'react-router';
import Home from '../Container/Home';
import About from '../Container/About';
import Team from '../Container/Team';
import Footer from '../Component/Footer';
import AddEmployee from '../Container/AddEmployee';

class InternalContainer extends React.Component<RouteComponentProps> {
  render() {
    console.log('ksjvn');
    return (
      <div>
        <Header currentPath={this.props.location.pathname}></Header>
        {this.routes}
        <Footer></Footer>
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
        exact={false}
        render={() => {
          return <About></About>;
        }}
      ></Route>
      <Route
        path="/team"
        exact={false}
        render={() => {
          return <Team></Team>;
        }}
      ></Route>
      <Route
        path="/event/add"
        exact={false}
        render={() => {
          return <AddEmployee></AddEmployee>;
        }}
      ></Route>
    </Switch>
  );
}
export default InternalContainer;
