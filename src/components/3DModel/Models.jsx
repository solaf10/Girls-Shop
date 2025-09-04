import "./index.css";
import img from "../../../public/assets/Images/3d-models-2.png";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import config from "../../Constants/enviroment";
export default function Models() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (id) => {
    navigate(`/shop/${id}`);
  };
  /* const products = [
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
  ]; */
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(config.baseUrl + "/" + config.products)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div className="models">
      <h3>3D Scenesv</h3>
      {/* <div className="topBar">
        <div className="search">
          <input placeholder="Search products..."></input>
          <img src={search} />I
        </div>
         <div className="results">Showing 1-12 of 18 results</div>
        <div className="sorting">
          <span>Default sorting</span>
          <span>
            <FaAngleDown />
          </span>
        </div>
      </div> */}
      <div className="products">
        <div className="filters">
          <Filter />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </div>
  );
}
