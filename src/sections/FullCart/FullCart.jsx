import React, { useEffect, useState } from 'react'
import './FullCart.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../Constants/enviroment';
import Cart from '../../pages/Cart/Cart';
import CartProductRow from '../../components/CartProductRow/CartProductRow';
const FullCart = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/cart/complate-cart');
    };
    const handleClick2 = () => {
        navigate('/shop')
    }
        const [cartProduct , setCartProduct] = useState([]); 
        // const totalPrice = cartProduct.reduce((sum, item) => sum + item.price * count,0); 
        useEffect( () => {
            axios
            .get(config.baseUrl + "/" + config.cartProducts)
            .then( (res) => {console.log(res.data);setCartProduct(res.data)})
            .catch( (err) => console.log(err))
        },[]);
return (
    <div className='fullcart'>
    <div className="container">
        <div className="info">
            <div className="pro">
                <div className="title">
                    <h2> Cart </h2>
                </div>
                <div className="table">
                    <div className="header">
                        <div className='td'>
                            <p>Product</p>
                        </div>
                        <div>
                            <p>Price</p>
                        </div>
                        <div>
                            <p>color</p>
                        </div>
                        <div>
                            <p>Amount</p>
                        </div>
                        <div>
                            <p>Total Price</p>
                        </div>
                    </div>
                    <div className="body">
                        {cartProduct.map( (pro) =>( <CartProductRow 
                        key={pro.id}
                        image={pro.image}
                        color={pro.color}
                        price={pro.price} 
                        name={pro.name}
                        amount={pro.amount}
                        />) ) }
                        
                    </div>
                    
                </div>
                <div className='ret'>
                <button onClick={handleClick2}>Return Shopping</button>
                </div>
            </div>
            <div className="price">
                <div className="title">
                    <p>Over All</p>
                </div>
                <div className="desc">
                    <div className="box">
                        <p>Sub Total</p>
                        <span>300$</span>
                    </div>
                    <div className="box">
                        <p>Shipping</p>
                        <span>Next step</span>
                    </div>
                    <div className="box">
                        <p>Discount</p>
                        <span>10$</span>
                    </div>
                    <hr />
                    <div className="total">
                        <p>Total</p>
                        <p>476 AED</p>
                    </div>
                </div>
                <button className='check-out' onClick={handleClick}>Continue to check out</button>
            </div>
        </div>
    </div>
    </div>
)
}

export default FullCart
