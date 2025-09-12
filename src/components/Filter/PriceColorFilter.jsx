import "./Filter.css";

function PriceColorFilter({ chosenColor, setChosenColor, price, setPrice }) {
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

  return (
    <div className="filter-container">
      <hr />
      <div className="filter-section">
        <p className="title">Price</p>

        <div className="range-slider">
          <input
            type="range"
            min="100"
            step="50"
            max="10000"
            value={price || 100}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </div>
        <p className="price-text">Price: ${price}</p>
      </div>

      <hr />

      <div className="filter-section">
        <p className="title">Color</p>

        <div className="color-options">
          {colors.map((color, i) => (
            <div key={i} className="holder">
              <label
                className={
                  color === chosenColor ? "active choose-color" : "choose-color"
                }
                style={{ backgroundColor: color }}
                htmlFor={`color-${i}`}
              ></label>
              <input
                type="radio"
                name="color"
                id={`color-${i}`}
                onChange={() => setChosenColor(color)}
                checked={chosenColor === color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceColorFilter;
