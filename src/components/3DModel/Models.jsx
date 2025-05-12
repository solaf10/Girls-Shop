import "./index.css";
import img from "../../../public/assets/Images/3d-models-2.png";
import Card from "../Card/Card";
import search from "../../../public/assets/Images/search.svg";
import Filter from "../Filter/Filter";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
export default function Models() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  const products = [
    {
      id: 1,
      image: img,
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 2,
      image: img,
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 3,
      image: img,
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 4,
      image: img,
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 5,
      image: img,
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 6,
      image: img,
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 7,
      image: img,
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 8,
      image: img,
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 9,
      image: img,
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
  ];
  return (
    <div className="models">
      <h3>3D Scenesv</h3>
      <div className="topBar">
        <div className="search">
          <input placeholder="Search products..."></input>
          <img src={search} />
        </div>
        <div className="sorting-holder">
          <div className="results">Showing 1-12 of 18 results</div>
          <div className="sorting">
            <span>Default sorting</span>
            <span>
              <FaAngleDown />
            </span>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="filters">
          <Filter />
        </div>
        <div className="cards">
          {products.map((product) => (
            <Card
              onClick={() => {
                handleClick(product.id);
              }}
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              realPrice={product.realPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
