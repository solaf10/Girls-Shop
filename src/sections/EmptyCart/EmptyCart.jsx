import React from 'react'
import "./EmptyCart.css"
import { useNavigate } from 'react-router-dom'
const EmptyCart = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/shop')
    }
return (
    <div className='emptycart'>
    <div className="container">
        <div className="box">
        <img src="/assets/Images/empty-cart.png" alt="" />
        <p> Your cart is currently empty.</p>
        <button onClick={handleClick}>Return to shop</button>
        </div>
    </div>
    </div>
)
}

export default EmptyCart
