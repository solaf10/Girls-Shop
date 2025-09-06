import React, { useEffect, useState } from "react";
import EmptyCart from "../../sections/EmptyCart/EmptyCart";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import FullCart from "../../sections/FullCart/FullCart";
import ComplateCart from "../../sections/ComplateCart/ComplateCart";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]); //لازم هون تكون البيانات الجاي من الباك وبتمرريها لل FullCart
  // const [cartProduct , setCartProduct] = useState([]);
  //   useEffect( () => {
  //       axios
  //       .get(config.baseUrl + "/" + config.cartProducts)
  //       .then( (res) => setCartProduct(res.data))
  //       .catch( (err) => console.log(err))
  //   })
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
