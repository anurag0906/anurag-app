import React, { useRef, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import data from './ProjectData'
import '../Style/Accordion.css'

//  accordionitem component
const AccordionItem = ({ ProjectName, Client, Role, Duration, Summary, Technology, isOpen, onClick }) => {
  const contentHeight = useRef()

  return (
    <div className="wrapper" >
      <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
        <p className='question-content'>{ProjectName}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
      </button>

      <div ref={contentHeight} className="answer-container" style={
        isOpen
          ? { height: '200px' }
          : { height: "0px" }
      }>
        <p className="answer-content">{Client}</p>
        <p className="answer-content">{Role}</p>
        <p className="answer-content">{Duration}</p>
        <p className="answer-content">{Summary}</p>
        <p className="answer-content">{Technology}</p>
      </div>
    </div>
  )
}


const ProjectAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=''>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          ProjectName={item.ProjectName}
          Client={item.Client}
          Role={item.Role}
          Duration={item.Duration}
          Summary={item.Summary}
          Technology={item.Technology}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  )
};


export default ProjectAccordion;
