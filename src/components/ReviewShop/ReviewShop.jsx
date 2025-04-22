import React from "react";
import icon1 from "./1.svg";
import icon2 from "./2.svg";
import icon3 from "./3.svg";
import icon4 from "./4.svg";
import "./ReviewShop.css";
export default function ReviewShop() {
  return (
    <div
      className="review"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "100px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50px", height: "50px", marginRight: "25px" }}>
          <img src={icon1} />
        </div>
        <div>
          <h4>High Quality</h4>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50px", height: "50px", marginRight: "25px" }}>
          <img src={icon2} />
        </div>
        <div>
          <h4>Warrany Protection</h4>
          <p>Over 2 years</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50px", height: "50px", marginRight: "25px" }}>
          <img src={icon3} />
        </div>
        <div>
          <h4>Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50px", height: "50px", marginRight: "25px" }}>
          <img src={icon4} />
        </div>
        <div>
          <h4>24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
