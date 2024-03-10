import React, { useState } from 'react'
import data from './AccordionData'
import AccordionItem from './AccordionItem'
import './accordion.css'


// main Accordion component
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
   
    return (
     <div className='container'>
       {data.map((item, index) => (
       <AccordionItem
        key={index}
        question={item.question}
        answer={item.answer}
        isOpen={activeIndex === index}
        onClick={() => handleItemClick(index)}
       />
      ))}
     </div>
    )
   };
   

   export default Accordion;