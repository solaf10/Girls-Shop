import "./FullCart.css";
import { Link, useNavigate } from "react-router-dom";
import CartProductRow from "../../components/CartProductRow/CartProductRow";
import usePrivateRoute from "../../custom hooks/usePrivateRoute";
import config from "../../Constants/enviroment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const FullCart = ({ cartProduct, setCartProduct }) => {
  const navigate = useNavigate();

  const handleSendData = () => {
    navigate("/cart/complate-cart");
  };
  const privateRouteHandler = usePrivateRoute(handleSendData);

  const handleDelete = (id) => {
    axios
      .delete(`${config.baseUrl}/${config.cartProducts}/${id}`)
      .then(() => {
        setCartProduct((prev) => prev.filter((pro) => pro.id !== id));
        toast.success("Product was deleted from the cart successfully!!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("process failed!!");
      });
  };

  return (
    <div className="fullcart">
      <div className="container">
        <div className="info">
          <div className="pro">
            <div className="title">
              <h2> Cart </h2>
            </div>
            <div className="table">
              <div className="header">
                <div className="td">
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
                {cartProduct.map((pro) => (
                  <CartProductRow
                    key={pro.id}
                    id={pro.id}
                    image={pro.image}
                    color={pro.color}
                    price={pro.price}
                    name={pro.name}
                    amount={pro.amount}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
            <div className="ret">
              <Link to="/shop">Return Shopping</Link>
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
            <button className="check-out" onClick={privateRouteHandler}>
              Continue to check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCart;
