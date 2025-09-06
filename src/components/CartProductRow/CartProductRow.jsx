import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const CartProductRow = ({image , color , name , price , amount , totalPrice}) => {
            const [step, setStep] = useState(1);
            const [count, setCount] = useState(amount);
            const handleCount1 = () => {
        if (count == 0) return;
        setCount((c) => c - step);
        };
        const handleCount2 = () => {
        setCount((c) => c + step);}
        const total = parseFloat(price.replace("$", ""));
        
    return (
    <div>
    <div className='row-pro'>
        <div className="img-pro">
            <IoIosCloseCircleOutline  className='close'/>
            <img src={image} />
            <p className='pro-name'>{name}</p>
        </div>
        <div><p>{price}</p></div>
        <div><p style={{width:'12px',height:"12px",backgroundColor:color ,borderRadius:"50%"}}></p></div>
        
        <div className="product-number">
            <button
                type="button"
                style={{
                color: count == 0 ? "#ccc" : "var(--primary-color)",
                background : "white" ,}}
                onClick={handleCount1}> -
            </button>
            <input
                style={{
                border: "none",
                width: "20px",
                textAlign: "center",
                }}
                type="text"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
            />
            <button type="button" onClick={handleCount2}
            style={{ background : "white" ,}}>
            +
            </button>
        </div>
        <div><p>{total}</p></div>
        </div>
    </div>
    )
}

export default CartProductRow;
