/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import Body from "components/Body";
import Header from "components/Header";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";


import { thead, tbody } from "variables/general";

const myStyle={
    // borderColor="fff",
    borderRadius:20,
    padding:"10px",
    marging:"10pxs"
};

function recheche() {
  return (
    <>
      <PanelHeader size="sm" />
      <Header/>
      <Body/>
          
          
      
    </>
  );
}

export default recheche ;
