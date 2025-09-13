import { useEffect, useState } from "react";
import EmptyCart from "../../sections/EmptyCart/EmptyCart";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import FullCart from "../../sections/FullCart/FullCart";
import axios from "axios";
import config from "../../Constants/enviroment";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    axios
      .get(config.baseUrl + "/" + config.cartProducts)
      .then((res) => {
        console.log(res.data);
        setCartProduct(res.data);
        localStorage.setItem("cart", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="cart">
      <TopGreenBar />
      {cartProduct.length == 0 ? (
        <EmptyCart />
      ) : (
        <FullCart cartProduct={cartProduct} setCartProduct={setCartProduct} />
      )}
    </div>
  );
};

export default Cart;
