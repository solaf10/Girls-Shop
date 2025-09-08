import React from 'react'
import './ComplateCart.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const ComplateCart = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/shop');
    };
return (
    <div className='complatecart'>
        <div className="container">
            <div className="box">
                <img src="/public/assets/Images/CheckCircle.png" alt="" />
                <h3>{t(`ComplateCart.Your request has been successfully completed.`)}</h3>
                <p>{t(`ComplateCart.Our team will review and process it shortly, 
                    and we will contact you with updates regarding your order status. 
                    Thank you for choosing us.`)}
                </p>
                <button onClick={handleClick}>{t(`ComplateCart.Return to shop`)}</button>
            </div>
        </div>
    </div>
)
}

export default ComplateCart
