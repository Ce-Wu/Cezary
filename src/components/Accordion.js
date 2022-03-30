import React, { useState } from 'react';
import '../style/faq.scss'
import iconArrow from '../assets/icon-arrow.svg'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>

        <div className='accordion-title-item'>
            <p>{title}</p>    
            <div>{isActive ? 
            <svg className='rotate-arrow' xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#fa5757" stroke-width="3" d="M1 1l8 8 8-8"/></svg> 
            : <img src={iconArrow}/>}</div>
            </div>
            {isActive && <div className="accordion-content"><p>{content}</p></div>}
              <hr></hr>
        </div>
        </div>
  );
};

export default Accordion;