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
import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { Link } from 'react-router-dom';
import { thead, tbody } from "variables/signalements";

function ListeSignalements() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [compteur, setCompteur] = useState(true);

  const myStyle={
    // borderColor="fff",
    borderRadius:20,
    padding:"10px",
    marging:"10pxs"
  };
  
  useEffect(() => {
    if (compteur){
    fetch("http://localhost:8090/ato/signalement")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setCompteur(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }
  },[compteur]);

  if (loading) return "Loading...";
  if (error) return "Error!";
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
      <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Recheche avancé</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>type de signalement</label>
                        <p>
                        <select style={myStyle}>
                            <option>troue</option>
                            <option>ordure</option>
                            <option>accident</option>
                        </select>
                        </p>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label >Statut</label>
                        <p>
                        <select style={myStyle}>
                            <option>Nouveau</option>
                            <option>Traitement</option>
                            <option>Fini</option>
                        </select>
                        </p>
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>date de signalement</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="dates"
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">liste des signalements</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-right">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      .filter((prop, nombre) => nombre < 10)
                      .map((prop, key) => {
                      const dateDebut = new Date(prop.dateSignalement);
                      const dateFin = new Date(prop.dateFinSignalement);
                      return (
                        <tr key={key}>
                          <td key='index' className="text-left">
                            <a href={'maps?id='+prop.id}>#</a>
                          </td>
                          <td key='type' className="text-left">
                            {(prop.type)?prop.type.nom : "..."}
                          </td>
                          <td key='etat' className="text-center">
                            {(prop.etat)?prop.etat.nom : "..."}
                          </td> 
                          <td key='dateSignalement' className="text-center">
                            {(prop.dateSignalement)?dateDebut.getDate()+"-"+(dateDebut.getMonth()+1)+"-"+dateDebut.getFullYear() : "..."}
                          </td>  
                          <td key='dateFinSignalement' className="text-center">
                            {(prop.dateFinSignalement)?dateFin.getDate()+"-"+(dateFin.getMonth()+1)+"-"+dateFin.getFullYear() : "..."}
                          </td>                          
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ListeSignalements;
