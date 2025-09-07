import "./RelatedProducts.css";
import { useEffect, useState } from "react";
import "./RelatedProducts.css";
import axios from "axios";
import config from "../../../Constants/enviroment";
import Card from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ category, id }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
  const relatedProducts = products.filter(
    (product) => product.category == category && product.id != id
  );
  const cards = relatedProducts.map((card) => (
    <Card
      key={card.id}
      image={card.images[0]}
      name={card.name}
      price={card.price}
      onClick={() => {
        navigate(`/shop/${card.id}`);
      }}
    />
  ));
  return (
    <div className="related-products">
      <h2 className="title">Related Products</h2>
      <div className="cards">{cards}</div>
    </div>
  );
};

export default RelatedProducts;
