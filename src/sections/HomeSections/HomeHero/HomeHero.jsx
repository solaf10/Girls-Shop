import { Link } from "react-router";
import "./HomeHero.css";
import { useState } from "react";
import CustomizeOrder from "../../../components/CustomizeOrder/CustomizeOrder";

const HomeHero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true); 
  };
  
  const closePopup = () => {
    setIsPopupOpen(false); 
  };
  return (
    <div className="home-hero">
      <div className="container">
        <h1>Style Meets Comfort Furniture Made for You</h1>
        <p className="desc">
          From cozy sofas to elegant dining sets, discover furniture that turns
          your house into a home." Let me know if you’d like a different tone or
          style!
        </p>
        <div className="btns">
          <Link to="/shop" className="shop-btn btn blurry">
            Shop Now
          </Link>
          <button className="customize-btn btn"  onClick={openPopup}>Customize order</button>
          {isPopupOpen && <CustomizeOrder closePopup={closePopup} />}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
