import React from "react"; 
import data from './MyData.js';


const AboutMeDesc = () => {
    
  
    return (
      <ul>
        {data.map(item => (
         <strong><p >{item}</p></strong> 
        ))}
      </ul>
    );
  };

export default AboutMeDesc;