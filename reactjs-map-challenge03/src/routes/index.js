import React, { Fragment } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/main";
const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={main} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
