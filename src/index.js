
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import pageLogin from "login";

ReactDOM.render(
//   <BrowserRouter>
//   <Switch>
//     <Route path="/" componet={pageLogin}/>
//     {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
//     <Redirect to="/login" />
//   </Switch>
// </BrowserRouter>,
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" componet={pageLogin}/> */}
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
