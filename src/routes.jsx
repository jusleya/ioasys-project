import React from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import withConsumer from "./components/AppContext/withConsumer";

import Header from "./components/Header";
import Home from "./views/Home";
import Login from "./views/Login";
import ScrollToTop from "./components/ScrollToTop";

import "./assets/css/index.css";

const PrivateRoute = withConsumer(
  ({ component: Component, isAdmin, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        if (isAdmin && rest.userScope && !rest.userScope.admin) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }

        return rest.userAuth ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }}
    />
  )
);

// Se o usuário estiver deslogado, o header não é mostrado
const CustomHeader = withConsumer(({ ...rest }) =>
  rest.userAuth ? <Header /> : null
);

const Routes = () => (
  <Router>
    <ScrollToTop>
      <main>
        <div className="main">
          <CustomHeader />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </div>
      </main>
    </ScrollToTop>
  </Router>
);

export default Routes;
