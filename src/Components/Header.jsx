import React from 'react';  
import '../Style/Header.css'


class Header extends React.Component {  
  render() {  
    return (  
      <div className="header">  
        <ul className="menu">  
          <li><a href="#">Home</a></li>  
          <li><a href="#">About me</a></li>
          <li><a href="#">Tech Skills</a></li>  
          <li><a href="#">Projects</a></li>  
          <li><a href="#">Certifications</a></li>
          <li><a href="#">Education</a></li>    
        </ul>  
      </div>  
    );  
  }  
}  
  
export default Header;  
