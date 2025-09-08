import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card/Card";
import "./SpecificProducts.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import config from "../../../Constants/enviroment";
import { useTranslation } from "react-i18next";
import SkeletonCard from "../../../components/Skeleton/SkeletonCard";

const SpecificProducts = () => {
  const { t } = useTranslation();
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
          <h2>{t("specificProducts.title")}</h2>
          <p>{t("specificProducts.subtitle")}</p>
        </div>
        {isLoading ? (
          <div className="cards">
            <SkeletonCard count={8} />
          </div>
        ) : (
          <>
            <div className="cards">{productCards}</div>
            <div className="btn-holder">
              <Link className="all-btn" to="/shop">
                {t("specificProducts.viewAll")}
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SpecificProducts;
