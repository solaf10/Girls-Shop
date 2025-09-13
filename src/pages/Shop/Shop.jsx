import Product from "../../components/Product/Product";
import ReviewShop from "../../components/ReviewShop/ReviewShop";
import Models from "../../components/3DModel/Models";
import ShopHero from "../../components/ShopHero/ShopHero";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";
import Cart from "../Cart/Cart";
import { DesignTypeProvider } from "../../context/DesignType";

const Shop = () => {
  return (
    <div className="shop">
      <TopGreenBar />
      <div className="container">
        <DesignTypeProvider>
          <ShopHero />
          <div
            style={{
              width: " 100%",
              height: " 1px",
              backgroundColor: " #c0c0c0",
              position: " relative",
              top: " 40px",
            }}
          ></div>
          <Models />
          <ReviewShop />
        </DesignTypeProvider>
      </div>
    </div>
  );
};

export default Shop;
