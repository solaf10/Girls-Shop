import React from "react";
import EmptyCart from "../../sections/EmptyCart/EmptyCart";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import FullCart from "../../sections/FullCart/FullCart";
import ComplateCart from "../../sections/ComplateCart/ComplateCart";

const Cart = () => {
  //   const cartProducts = [];
  const cartProducts = [{ name: "" }]; //لازم هون تكون البيانات الجاي من الباك وبتمرريها لل FullCart
  return (
    <div className="cart">
      <TopGreenBar />
      {cartProducts.length == 0 ? <EmptyCart /> : <FullCart />}
    </div>
  );
};

export default Cart;
