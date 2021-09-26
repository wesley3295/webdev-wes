import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import "assets/scss/material-kit-pro-react.scss?v=1.10.0";
import WelcomePage from "views/WelcomePage/LandingPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={WelcomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
