import "./FullCart.css";
import { Link, useNavigate } from "react-router-dom";
import CartProductRow from "../../components/CartProductRow/CartProductRow";
import usePrivateRoute from "../../custom hooks/usePrivateRoute";
const FullCart = ({ cartProduct }) => {
  const navigate = useNavigate();
  // const totalPrice = cartProduct.reduce((sum, item) => sum + item.price * count,0);

  const handleSendData = () => {
    navigate("/cart/complate-cart");
  };
  const privateRouteHandler = usePrivateRoute(handleSendData);
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
                    image={pro.image}
                    color={pro.color}
                    price={pro.price}
                    name={pro.name}
                    amount={pro.amount}
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
