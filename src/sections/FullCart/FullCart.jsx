import "./FullCart.css";
import { Link, useNavigate } from "react-router-dom";
import CartProductRow from "../../components/CartProductRow/CartProductRow";
import usePrivateRoute from "../../custom hooks/usePrivateRoute";
import config from "../../Constants/enviroment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useTranslation } from "react-i18next";
const FullCart = ({ cartProduct, setCartProduct }) => {
  const { t } = useTranslation();
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

 const handleAmountChange = (id, newAmount) => {
  setCartProduct((prev) =>
    prev.map((pro) =>
      pro.id === id ? { ...pro, amount: newAmount >= 0 ? newAmount : 0 } : pro
    )
  );
};

const grandTotal = cartProduct.reduce((acc, pro) => {
  const numPrice = parseFloat(pro.price.replace("$", "")) || 0;
  return acc + numPrice * (pro.amount || 0);
}, 0);


  return (
    <div className="fullcart">
      <div className="container">
        <div className="info">
          <div className="pro">
            <div className="title">
              <h2> {t("FullCart.cart")} </h2>
            </div>
            <div className="table">
              <div className="header">
                <div className="td">
                  <p>{t("FullCart.product")}</p>
                </div>
                <div>
                  <p>{t("FullCart.price")}</p>
                </div>
                <div>
                  <p>{t("FullCart.color")}</p>
                </div>
                <div>
                  <p>{t("FullCart.amount")}</p>
                </div>
                <div>
                  <p>{t("FullCart.total_price")}</p>
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
                    onAmountChange={handleAmountChange}
                  />
                ))}
              </div>
            </div>
            <div className="ret">
              <Link to="/shop">{t("FullCart.return_shopping")}</Link>
            </div>
          </div>
          <div className="price">
            <div className="desc">
              <div className="location-order">
                <label htmlFor="">{t(`FullCart.Location`)}</label>
                <input type="text" placeholder="location for delivery"></input>
              </div>
              <div className="total">
                <p>{t("FullCart.total")}</p>
                <p>{grandTotal} AED</p>
              </div>
            </div>
            <button className="check-out" onClick={privateRouteHandler}>
              {t("FullCart.checkout")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCart;
