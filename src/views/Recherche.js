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
import Select from 'react-select';

function ListeSignalements() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [compteur, setCompteur] = useState(true);
  const [type, setType] = useState({value:null, label:"aucun"});
  const [etat, setEtat] = useState({value:null, label:"aucun"});
  const listeType = [];
  const listeEtat = [];
  const [dateAvant, setDateAvant] = useState(null);
  const [dateApres, setDateApres] = useState(null);
  const and = "&";
  const begin = "?";
  const listeArgs = [
    {value:type.value, label:"type"}, 
    {value:etat.value, label:"etat"}, 
    {value:dateAvant, label:"avant"}, 
    {value:dateApres, label:"apres"}
  ];
  const [misy,setMisy] = useState(false);
  const myStyle={
    // borderColor="fff",
    borderRadius:20,
    padding:"10px",
    marging:"10pxs"
  };
  
  useEffect(() => {
    let req= "https://projetcloudrayansedraravo.herokuapp.com/ato/signalements";
    if (compteur){
      if(misy){
        let condition = "";
        listeArgs.forEach(zavatra=>{
          if(zavatra.value){
            condition+=zavatra.label+"="+zavatra.value+and;
          }
        })
        if(condition!="")req += (begin+condition);
      }
      Promise.all([
        fetch(req),
        fetch('https://projetcloudrayansedraravo.herokuapp.com/ato/type'),
        fetch('https://projetcloudrayansedraravo.herokuapp.com/ato/etat')
        ]).then(function (responses) {
          return Promise.all(responses.map(function (response) {
            return response.json();
          }));
        })
      .then((data) => {
        console.log(req)
        setData(data);
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

  function listeObjet(liste,listeRetour){
    listeRetour.push({value:null, label:"aucun"});
    liste.forEach(obj => {
      listeRetour.push({ value:obj.id, label:obj.nom });
    })
  }

  function setLien(){
    listeArgs.splice(0,1,type.value);
    listeArgs.splice(1,1,etat.value);
    listeArgs.splice(2,1,dateAvant);
    listeArgs.splice(3,1,dateApres);
    setMisy(true);
    setCompteur(true);
  }

  if (loading) return "Loading...";
  if (error) return "Error!";

  if(data){
    listeObjet(data[1],listeType);
    listeObjet(data[2],listeEtat);
  }
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
                <Form >
                  <Row >
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>type de signalement</label>
                        <Select 
                            style={myStyle}
                            placeholder="type"
                            onChange={setType}
                            options={listeType}/>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="2">
                      <FormGroup>
                        <label >Statut</label>
                        <Select 
                            style={myStyle}
                            placeholder="etat"
                            onChange={setEtat}
                            options={listeEtat}/>
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="2">
                      <FormGroup>
                        <label>date avant</label>
                        <Input
                          onChange={event => setDateAvant(event.target.value)} 
                          placeholder="mettez ici la description du signalement"
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="2">
                      <FormGroup>
                        <label>date apres</label>
                        <Input
                          onChange={event => setDateApres(event.target.value)} 
                          placeholder="mettez ici la description du signalement"
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pt-3" md="3">
                      <Button onClick={setLien} >
                        rechercher
                      </Button> 
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
                    {data[0]
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
