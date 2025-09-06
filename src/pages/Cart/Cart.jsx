import React, { useEffect, useState } from "react";
import EmptyCart from "../../sections/EmptyCart/EmptyCart";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import FullCart from "../../sections/FullCart/FullCart";
import ComplateCart from "../../sections/ComplateCart/ComplateCart";

const Cart = () => {
  
  const cartProducts = [{ name: "" }]; //لازم هون تكون البيانات الجاي من الباك وبتمرريها لل FullCart
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
      {cartProducts.length == 0 ? <EmptyCart /> : <FullCart />}
    </div>
  );
};

export default Cart;
