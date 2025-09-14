import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CartProductRow = ({id, image, color, name, price, amount , onDelete ,onAmountChange}) => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(amount);
  const handleCount1 = () => {
    if (count == 0) return;
    setCount((c) => c - step);
  };
  const handleCount2 = () => {
    setCount((c) => c + step);
  };
  const numPrice = parseFloat(price.replace("$", ""));
  const total = numPrice * amount;

  return (
    <div>
      <div className="row-pro">
        <div className="img-pro">
          <IoIosCloseCircleOutline 
          className="close"
          style={{cursor:"pointer"}} 
          onClick={ () => onDelete(id)}/>
          <img src={image} />
          <p className="pro-name">{name}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
        <div>
          <p
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: color,
              borderRadius: "50%",
            }}
          ></p>
        </div>

        <div className="product-number">
          <button
            type="button"
            style={{
              color: count == 0 ? "#ccc" : "var(--primary-color)",
              background: "white",
            }}
            onClick={() => onAmountChange(id, amount - 1)}
          >
           
            -
          </button>
          <input
            style={{
              border: "none",
              width: "20px",
              textAlign: "center",
            }}
            type="text"
            value={amount}
            onChange={(e) => onAmountChange(id, Number(e.target.value))}
          />
          <button
            type="button"
            onClick={() => onAmountChange(id, amount + 1)}
            style={{ background: "white" }}
          >
            +
          </button>
        </div>
        <div>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProductRow;
