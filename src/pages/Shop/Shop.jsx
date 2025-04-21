import ReviewShop from "../../components/ReviewShop/ReviewShop";
import Models from "../../components/Shop/3DModel/Models";
import ShopHero from "../../components/Shop/ShopHero/ShopHero";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";

const Shop = () => {
  return (
    <div className="shop">
      {/* <TopGreenBar /> */}
      <div className="container">
        <ShopHero />
        <div
          style={{
            width: " 100%",
            height: " 1px",
            backgroundColor: " #c0c0c0",
            position: " relative",
            top: " 100px",
          }}
        ></div>
        <Models />
        <ReviewShop />
      </div>
    </div>
  );
};

export default Shop;
