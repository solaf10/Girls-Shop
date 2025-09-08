import React from 'react'
import "./EmptyCart.css"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const EmptyCart = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/shop')
    }
return (
    <div className='emptycart'>
    <div className="container">
        <div className="box">
        <img src="/assets/Images/empty-cart.png" alt="" />
        <p> {t(`EmptyCart.Your cart is currently empty.`)}</p>
        <button onClick={handleClick}>{t(`EmptyCart.Return to shop`)}</button>
        </div>
    </div>
    </div>
)
}

export default EmptyCart
