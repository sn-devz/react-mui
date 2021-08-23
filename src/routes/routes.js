import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Home, CarDetails, LoginRegister} from '../pages';

function Routes() {
  return (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/car-details' component={CarDetails}/>
        <Route exact path="/login-register" component={LoginRegister}/>
    </Switch>
  );
}

export default Routes;