import React from 'react';
import { Switch, Route } from 'react-router';
import InternalContainer from '../Container/InternalContainer';
const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact={false}
        render={(props: any) => {
          return <InternalContainer {...props}></InternalContainer>;
        }}
      ></Route>
    </Switch>
  );
};
export default Routes;
