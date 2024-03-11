import React from 'react';  
import '../Style/Table.css'
import data from './CertificationData'
import { Button } from "react-bootstrap"; // Assuming you are using react-bootstrap  


class CertTableComp extends React.Component {  
    state = {  
      hoverIndex: null  
    };  
    
    handleMouseEnter = (index) => {  
      this.setState({ hoverIndex: index });  
    };  
    
    handleMouseLeave = () => {  
      this.setState({ hoverIndex: null });  
    };  
    
    render() {  
   
      const { hoverIndex } = this.state;  
    
      const tableRows = data.map((item, index) => {  
        return (  
          <tr key={item.id}  
          onMouseEnter={() => this.handleMouseEnter(index)}  
          onMouseLeave={this.handleMouseLeave}  
          className={hoverIndex === index ? 'hovered' : ''}  >  
           <td>{item.name}</td>  
        
            <td>{item.Verify ===''? item.CertId : <Button className="btn btn-primary" variant="primary" target='_blank' href={item.Verify}>{item.CertId}</Button> }   </td>
            <td> 
              <Button className="btn btn-primary" variant="primary" target='_blank' href={item.Resource}>Learn more</Button>             
            </td>  
          </tr>  
        );  
      });  

      return (  
        <table className="striped-table">  
          <thead>  
            <tr>  
              <th>Certification Name</th>  
              <th>Certification ID</th>  
              <th>Resources</th>  
            </tr>  
          </thead>  
          <tbody>  
          {tableRows}  
        {/*     {data.map((item, index) => (  
              <tr  
                key={item.id}  
                onMouseEnter={() => this.handleMouseEnter(index)}  
                onMouseLeave={this.handleMouseLeave}  
                className={hoverIndex === index ? 'hovered' : ''}  
              >  
                <td>{item.name}</td>  
                <td>{item.CertId}</td>  
                <td>{item.Resource}</td>  
              </tr>  
            ))}  
 */}
          </tbody>  
        </table>  
      );  
    }  
  }  
    
export default CertTableComp;  
