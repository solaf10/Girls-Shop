import { useState } from 'react';
import './CustomizeOrder.css'
import { IoMdClose } from "react-icons/io";
const CustomizeOrder = ({ closePopup }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
  
      <div className='popupOverlay '>
        <div className='pop-central' >
        <div className='pop-up-costomize-order-page'>
      <button
      className='close-btn'
          onClick={closePopup} 
        >
          <div className='circle-close-icon'>  
          <IoMdClose className='close-icon'/>
          </div>
        </button>
        <div className='bring-idea-container'>
        <div className='Bring-idea-tolife-sec'>
          <img src='/assets/Images/design-thinking 1.png'/>
          <h1 className='bring-your-idea-title'>Bring Your Ideas to Life</h1>
          <p className='bring-your-idea-paragraph'>
          Create a custom design form tailored to your needs. Easily personalize fields, layout, and style to match your brand or project requirements.
          </p>
        </div>
        <div className='customize-form'>
          <div className='dimenision-inputs'>
            <div className='dimenision-label'>
              <label>width:</label>
            <input type='text' required />
            </div>
             
            <div className='dimenision-label'>
              <label>heigh:</label>
            <input type='text' required />
            </div>
            <div className='dimenision-label'>
              <label>length:</label>
            <input type='text' required />
            </div>
          </div>
          <div className='location-box'>
            <label>Location:</label>
            <input type='text' placeholder='Syria, Homs, Al-Hamra'/>
            
          </div>
        
    <div className='color-counter-box'>
    <div className='count'>
     <div className='plus-minuce-box'><button onClick={decrement} className='decrement' >-</button></div> 
      <div className='count-number'>{count}</div>
     <div className='plus-minuce-box'><button onClick={increment} className='increment'>+</button></div> 
    </div>
    <div className='choose-color'>
    <label className='label-choose-color'> Wrapping Color:</label>
    <input type='color'  value="#385854"/>
    </div>
    </div>
           <div className='chose-product-img'>
      <label >
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
         
       
        />
      </label>
     
    </div> 

    <input type='submit' value="Send" className='submit-send'/>

       

        
        </div>
        </div>
       
      </div>
        </div>
        
      
    </div>
  )
}


 


export default CustomizeOrder
