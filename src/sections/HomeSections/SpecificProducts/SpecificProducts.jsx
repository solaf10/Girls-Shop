import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card/Card";
import "./SpecificProducts.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import config from "../../../Constants/enviroment";

const SpecificProducts = () => {
  /* const products = [
    {
      id: 1,
      image: "/assets/Images/3d-models.png",
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 2,
      image: "/assets/Images/3d-models.png",
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 3,
      image: "/assets/Images/3d-models.png",
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 4,
      image: "/assets/Images/3d-models.png",
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 5,
      image: "/assets/Images/3d-models.png",
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 6,
      image: "/assets/Images/3d-models.png",
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 7,
      image: "/assets/Images/3d-models.png",
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
    {
      id: 8,
      image: "/assets/Images/3d-models.png",
      name: "XORA corner desk",
      price: "$560.00",
      realPrice: "$600.00",
      color: "#eee",
    },
  ]; */
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(config.baseUrl + "/" + config.topsellers)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  const productCards = products.map((card) => (
    <Card
      onClick={() => {
        navigate(`/shop/${card.id}`);
      }}
      key={card.id}
      image={card.image}
      name={card.name}
      price={card.price}
      realPrice={card.realPrice}
    />
  ));
  return (
    <section className="specific-products">
      <div className="container">
        <div className="home-main-title">
          <h2>Top Sellers</h2>
          <p>
            Our top sellers are carefully selected from the world’s best
            products, offering you number-one quality and trusted excellence.
          </p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="cards">{productCards}</div>
            <div className="btn-holder">
              <Link className="all-btn" to="/shop">
                View All
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SpecificProducts;
