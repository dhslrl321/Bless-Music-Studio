import React from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Tour from "../pages/Tour";
import Pricing from "../pages/Pricing";
import Event from "../pages/Event";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/tour" component={Tour} />
    <Route path="/pricing" component={Pricing} />
    <Route path="/event" component={Event} />
    <Route />
  </Switch>
);
