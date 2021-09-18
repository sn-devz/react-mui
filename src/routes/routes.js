import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, CarDetails, LoginRegister, Errors, Panal } from "../pages";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/car-details" component={CarDetails} />
      <Route exact path="/login-register" component={LoginRegister} />
      <Route exact path="/404-PageNotFound" component={Errors} />
      <Route exact path="/panel" component={Panal} />
    </Switch>
  );
}

export default Routes;
