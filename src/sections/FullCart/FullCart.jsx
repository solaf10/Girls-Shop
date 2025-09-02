import React from 'react'
import './FullCart.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const FullCart = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/cart/complate-cart');
    };
return (
    <div className='fullcart'>
    <div className="container">
        <div className="info">
            <div className="product-table">
                <table>
                    <caption> Cart </caption>
                    <thead>
                        <tr>
                            <td> PRODUCT</td>
                            <td> PRICE</td>
                            <td> AMOUNT</td>
                            <td> TOTAL PRAICE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price} $</td>
                            </tr>
                        ))} */}
                        <tr>
                            <td className='first-td'> <span className='icon'><IoIosCloseCircleOutline /></span> <img src="/public/assets/Images/Image.png" alt="" /> <p>sofa</p></td>
                            <td> 150$ </td>
                            <td className='third-td'> <p><span>+</span>3 <span>-</span></p></td>
                            <td> 750$</td>
                        </tr>
                    </tbody>
                </table>
                    <button> Return Shopping </button>
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
