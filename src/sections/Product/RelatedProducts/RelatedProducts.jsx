import "./RelatedProducts.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../Constants/enviroment";
import Card from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import SkeletonCard from "../../../components/Skeleton/SkeletonCard";

const productsNum = 8;

const RelatedProducts = ({ category, id }) => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(productsNum);
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
  }, [category, id]);
  const relatedProducts = products.filter(
    (product) => product.category === category && product.id !== id
  );
  const cards = relatedProducts.slice(0, limit).map((card) => (
    <Card
      key={card.id}
      // image={card.image}
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
      <div className="cards">
        {isLoading ? <SkeletonCard count={4} /> : cards}
      </div>
      {limit < products.length && (
        <button
          onClick={() =>
            setLimit((prev) => Math.min(prev + productsNum, products.length))
          }
          className="all-btn"
        >
          View more
        </button>
      )}
    </div>
  );
};

export default RelatedProducts;
