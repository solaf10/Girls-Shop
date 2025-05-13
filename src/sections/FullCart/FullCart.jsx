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
                            <p>Amount</p>
                        </div>
                        <div>
                            <p>Total Price</p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="row-info">
                            {/* <div className="pro-info1"> */}
                            
                                {/* <div className="icon-close">
                                </div> */}
                                <div className="img-pro">
                                    <IoIosCloseCircleOutline  className='close'/>
                                    <img src="/assets/Images/Image.png" alt="" />
                                    <p className='pro-name'>Modern Desk</p>
                                </div>
                            {/* </div> */}
                            {/* <div className="pro-info2"> */}
                                <div><p>price</p></div>
                                <div className="count"><p><span>+</span> number <span>-</span></p></div>
                                <div><p>number</p></div>
                            {/* </div> */}
                            
                        </div>
                    </div>
                    {/* <table>
                        <thead>
                            <tr>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Amount</td>
                                <td>Total Price</td>
                            </tr>
                        </thead>
                        <tbody>
                                <div className="icon-false"></div>
                            <tr>
                                <td>
                                    <div className="pro-info">
                                        <img src="" alt="" />
                                        <p className='pro-name'></p>
                                    </div>
                                </td>
                                <td> price</td>
                                <td><div className="count">
                                    <p><span>+</span> number <span>-</span></p>
                                    </div></td>
                                <td>number</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
                <div className='ret'>
                <button>Return Shopping</button>
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
