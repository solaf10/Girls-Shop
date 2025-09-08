import { Link } from "react-router";
import "./HomeHero.css";
import { useState } from "react";
import CustomizeOrder from "../../../components/CustomizeOrder/CustomizeOrder";
import { useTranslation } from "react-i18next";

const HomeHero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="home-hero">
      <div className="container">
        <h1>{t("homeHero.title")}</h1>
        <p className="desc">{t("homeHero.desc")}</p>
        <div className="btns">
          <Link to="/shop" className="shop-btn btn">
            {t("homeHero.shopNow")}
          </Link>
          <button className="customize-btn btn" onClick={openPopup}>
            {t("homeHero.customizeOrder")}
          </button>
          {isPopupOpen && <CustomizeOrder closePopup={closePopup} />}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
