import React from "react";
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

class Header extends React.Component {
    constructor() {
      super();
  
      this.state = {
        expression: ""
      };
    }
    
    render() {
        const myStyle={
            // borderColor="fff",
            borderRadius:20,
            padding:"10px",
            marging:"10pxs"
        };
        
        return(
            /*<div id="all" >
            
              
                <h5>Recheche avancé</h5>
              
                <div id="contH">
                    
                    <div>
                        <label>type de signalement</label>
                        <p>
                        <select style={myStyle}>
                            <option>troue</option>
                            <option>ordure</option>
                            <option>accident</option>
                        </select>
                        </p>
                    </div>
                    
                    <div> 
                        <label >Statut</label>
                        s<p>
                        <select style={myStyle}>
                            <option>Nouveau</option>
                            <option>Traitement</option>
                            <option>Finie</option>
                        </select>
                        </p>
                    </div>
                    
                    <div> 
                        <label>date de signalement</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="dates"
                          type="date"
                        />
                    </div> 
                    
                   
                  
                </div>
              
          
        </div>*/
        <div style={{backgroundColor:"white", borderRadius:"8px",marginLeft:"40px", marginRight:"40px", marginTop:"10px",marginBottom:"20px", boxShadow: "1px 1px 1px #9E9E9E"}}>
        <h3>Recherche Avancé</h3>
        <div style={{display:"flex",flexDirection:"row" }}>
                <div style={{width:"300px", margin:"auto"}}>
                    <label>type de signalement</label>
                    <p>
                    <select style={myStyle}>
                        <option>troue</option>
                        <option>ordure</option>
                        <option>accident</option>
                    </select>
                    </p>
                </div>
                <div style={{width:"300px", margin:"auto"}}>
                    <label >Statut</label>
                    s<p>
                    <select style={myStyle}>
                        <option>Nouveau</option>
                        <option>Traitement</option>
                        <option>Finie</option>
                    </select>
                    </p>
                </div>
                <div style={{width:"300px", margin:"auto"}}>
                    <label>date de signalement</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="dates"
                          type="date"
                        />    
                </div>
            
        </div>
        </div>
                  
        );
    }
}

export default Header;