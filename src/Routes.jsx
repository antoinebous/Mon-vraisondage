import { Route, Switch } from "react-router-dom";
import Poll from "./pages/Poll";
import Home from "./pages/Home";
import React from "react";

const Routes = props => {
  return (
    <Switch>
      <Route path="/poll/:pollId" exact component={Poll} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
