import React from "react";
import { Route, Switch } from "react-router-dom";
import SectionView from "./Containers/SectionView/SectionView";

const routes = (
  <Switch>
    <Route exact path="/" component={SectionView} />
    <Route path="/work" component={<h1>hi</h1>} />
  </Switch>
);

export default routes;