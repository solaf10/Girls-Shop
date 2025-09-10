import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../Constants/enviroment";
import { useTranslation } from "react-i18next"; 
import "./index.css";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import PagenationControllers from "../PagenationControllers/PagenationControllers";
import usePagenation from "../../custom hooks/usePagenation";
import SkeletonCard from "../Skeleton/SkeletonCard";

export default function Models() {
  const { t } = useTranslation(); 
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (id) => {
    navigate(`/shop/${id}`);
  };

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

  const {
    goToPage,
    nextPage,
    currentPage,
    currentCards,
    totalPages,
    isBtnDisabled,
  } = usePagenation(products);

  const scrollEl = useRef(null);

  useEffect(() => {
    if (scrollEl.current) {
      scrollEl.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="models">
   
      <h3 ref={scrollEl}>{t('models.title')}</h3>
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
          <div className="cards">
            <SkeletonCard count={12} />
          </div>
        ) : (
          <div className="products-holder" style={{ width: "100%" }}>
            <div className="cards">
              {currentCards.map((product) => (
                <Card
                  onClick={() => {
                    handleClick(product.id);
                  }}
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  sale={product.sale}
                  realPrice={product.realPrice}
                />
              ))}
            </div>
            <PagenationControllers
              goToPage={goToPage}
              nextPage={nextPage}
              currentPage={currentPage}
              totalPages={totalPages}
              isBtnDisabled={isBtnDisabled}
            />
          </div>
        )}
      </div>
    </div>
  );
}