import React, { useState } from 'react';
import './DropDownDesigner.css';
import { IoIosArrowDown } from "react-icons/io";
const DropDownDesigner = ({ options = [], placeholder = 'choose' }) => {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button onClick={() => setOpen(!open)} className="dropdown-button">
        {selected || placeholder}
          <IoIosArrowDown  className='drop-icon'/>
      </button>

      {open && (
        
             <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="dropdown-item"
            >
              {option}
            </li>
            
          ))}
        </ul>
     
  
       
      )}
    </div>
  );
};

export default DropDownDesigner;
