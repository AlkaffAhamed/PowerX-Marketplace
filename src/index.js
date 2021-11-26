import * as React from "react";
import * as ReactDOM from "react-dom";
import { AuthProvider } from "./domains/auth";
import "./index.css";
import { MarketplacePublic } from "./pages/marketplace-public";
import { Login, LockedRoute } from "./pages/login";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <Switch>
        <Login path="/login" endPath="/marketplace" />
        <LockedRoute path="/marketplace" component={MarketplacePublic} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </AuthProvider>
  </Router>,
  document.querySelector("#root")
);
