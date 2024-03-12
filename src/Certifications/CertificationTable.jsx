import React from 'react';
import '../Style/CertificationTable.css'
import certData from './CertificationData'
import { Button } from "react-bootstrap";


class CertificationTable extends React.Component {
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

    const tableRows = certData.map((item, index) => {
      return (
        <tr key={item.id}
          onMouseEnter={() => this.handleMouseEnter(index)}
          onMouseLeave={this.handleMouseLeave}
          className={hoverIndex === index ? 'hovered' : ''}  >
          <td>{item.name}</td>

          <td>{item.Verify === '' ? item.CertId : <Button className="btn btn-primary" variant="primary" target='_blank' href={item.Verify}>{item.CertId}</Button>}   </td>
          <td> 
            {/* {item.logo===''? '' : <img src={require('../img/aws.JPG')} height={100} width={100}  alt='image not found'/> }<br/> */}
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
        </tbody>
      </table>
    );
  }
}

export default CertificationTable;  
