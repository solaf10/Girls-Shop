import React from "react";
import "./Card.css";
export default function Card({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} />
      <p>{name}</p>
      <div className="price">{price} </div>
    </div>
  );
}
