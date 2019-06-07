import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Home from "./views/Home";
import Login from "./views/Login";
import ScrollToTop from "./components/ScrollToTop";

import "./assets/css/index.css";

const Routes = () => (
  <Router>
    <ScrollToTop>
      <main>
        <div className="main">
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/inicio" component={Home} />
          </Switch>
        </div>
      </main>
    </ScrollToTop>
  </Router>
);

export default Routes;
