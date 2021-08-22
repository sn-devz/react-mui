import React from "react";
import {Switch, Route} from 'react-router-dom';
import {Home, CarDetails} from '../pages';

function Routes() {
  return (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/car-details' component={CarDetails}/>
    </Switch>
  );
}

export default Routes;