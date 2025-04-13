import { Link } from "react-router";
import "./HomeHero.css";

const HomeHero = () => {
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
          <button className="customize-btn btn">Customize order</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
