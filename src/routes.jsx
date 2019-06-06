import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./views/Home";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";

import "./assets/css/index.css";

const Routes = () => (
  <Router>
    <ScrollToTop>
      <main>
        <div className="main">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </main>
    </ScrollToTop>
  </Router>
);

export default Routes;
