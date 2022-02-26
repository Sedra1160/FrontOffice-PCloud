import React from "react";
import { Table } from "reactstrap";
import { thead, tbody } from "variables/general";


class Body extends React.Component {
  constructor() {
    super();

    this.state = {
      expression: ""
    };
  }


  render() {
    return (
        <div style={{backgroundColor:"white", borderRadius:"8px",marginLeft:"20px", marginRight:"20px", boxShadow: "1px 3px 1px #9E9E9E"}}>
          <h1>Simple Table</h1>
        <div style={{ display:"flex" }}>
           <Table>     
                <thead>
                    <tr>                    
                    {thead.map((prop, key) => {
                      if (key === thead.length - 1)
                        return (      
                          <th key={key} className="text-right" style={{color:"red"}}>
                            {prop}
                          </th>
                        );
                      return <th key={key} style={{color:"red"}}>{prop}</th>;
                    })}
                    </tr>

                </thead>
                {tbody.map((prop, key) => {
                return (
                    <tbody key={key}>
                    <tr>                    
                        {prop.data.map((prop, key) => {
                        if (key === thead.length - 1)
                            return (
                                <td key={key} className="text-right">
                                    {prop}
                                </td>
                            );
                        return <td key={key}>{prop}</td>;
                      })}
                      </tr>

                    </tbody>
                    );
                })}
            
        </Table>
      </div>
      </div>
    );
  }
}

export default Body;
