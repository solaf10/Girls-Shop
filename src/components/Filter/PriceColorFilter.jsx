import { useState } from "react";
import "./Filter.css";

function PriceColorFilter() {
  const [price, setPrice] = useState([0, 1000]);
  const colors = [
    "#ddd",
    "#a00",
    "#400",
    "#660",
    "#377",
    "#f95",
    "#506",
    "#bcd",
    "#faa",
    "#a00",
    "#911",
    "#339",
    "#96f",
    "#080",
    "#0f0",
    "#930",
    "#fff",
    "#000",
  ];

  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value);
    if (newMin <= price[1]) {
      setPrice([newMin, price[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value);
    if (newMax >= price[0]) {
      setPrice([price[0], newMax]);
    }
  };

  return (
    <div className="filter-container">
      <hr />
      <div className="filter-section">
        <p className="title">Price</p>

        <form className="range-slider">
          <input
            type="range"
            min="0"
            max="1000"
            value={price[0]}
            onChange={handleMinChange}
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={price[1]}
            onChange={handleMaxChange}
          />
        </form>
        <p className="price-text">
          Price: ${price[0]} - ${price[1]}
        </p>
      </div>

      <hr />

      <div className="filter-section">
        <p className="title">Color</p>

        <div className="color-options">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className="color-circle"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceColorFilter;
