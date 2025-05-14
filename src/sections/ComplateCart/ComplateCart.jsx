import React from 'react'
import './ComplateCart.css'
import { useNavigate } from 'react-router-dom';
const ComplateCart = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/shop');
    };
return (
    <div className='complatecart'>
        <div className="container">
            <div className="box">
                <img src="/public/assets/Images/CheckCircle.png" alt="" />
                <h3>Your request has been successfully completed.</h3>
                <p>Here you can write text Here you can write text Here you can write text Here you can write text
                    Here you can write text Here you can write text Here you can write text Here you can write text 
                    Here you can write text Here you can write text 
                    Here you can write text</p>
                <button onClick={handleClick}>Return to shop</button>
            </div>
        </div>
    </div>
)
}

export default ComplateCart
