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
import PagenationControllers from "../PagenationControllers/PagenationControllers";
import usePagenation from "../../custom hooks/usePagenation";
export default function Models() {
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

  return (
    <div className="models">
      <h3>Our Products</h3>
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
          <div className="products-holder" style={{ width: "100%" }}>
            <div className="cards">
              {currentCards.map((product) => (
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
