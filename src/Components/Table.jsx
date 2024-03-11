import React from 'react';  
import '../Style/Table.css'

class Tabular extends React.Component {  
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
      const data = [  
        { id: 1, name: 'Data 1', value: 10 },  
        { id: 2, name: 'Data 2', value: 20 },  
        { id: 3, name: 'Data 3', value: 30 }  
      ];  
    
      const { hoverIndex } = this.state;  
    
      return (  
        <table className="striped-table">  
          <thead>  
            <tr>  
              <th>Header 1</th>  
              <th>Header 2</th>  
              <th>Header 3</th>  
            </tr>  
          </thead>  
          <tbody>  
            {data.map((item, index) => (  
              <tr  
                key={item.id}  
                onMouseEnter={() => this.handleMouseEnter(index)}  
                onMouseLeave={this.handleMouseLeave}  
                className={hoverIndex === index ? 'hovered' : ''}  
              >  
                <td>{item.name}</td>  
                <td>{item.value}</td>  
                <td>{item.value * 2}</td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      );  
    }  
  }  
    
export default Tabular;  
