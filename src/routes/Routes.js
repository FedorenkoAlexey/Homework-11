import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "../components/Header/Header";
import HomeComponent from "../components/Home/HomeComponent";
import AboutComponent from "../components/About/AboutComponent";
import ProductComponent from "../components/Product/ProductComponent";

class Routes extends PureComponent {
  render() {
    return (
      <div className="app-routes">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/home" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/product" component={ProductComponent} />

            <Redirect from="/" to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

Routes.defaultProps = {};

export default Routes;
