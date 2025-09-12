import { Link } from "react-router";
import "./HomeHero.css";
import { useState } from "react";
import CustomizeOrder from "../../../components/CustomizeOrder/CustomizeOrder";
import { useTranslation } from "react-i18next";
import UserAutherization from "../../../components/UserAutherization/UserAutherization";

const HomeHero = () => {

  const { t } = useTranslation();

 
  return (
    <div className="home-hero">
      <div className="container">
        <h1>{t("homeHero.title")}</h1>
        <p className="desc">{t("homeHero.desc")}</p>
        <div className="btns">
          <Link to="/shop" className="shop-btn btn">
            {t("homeHero.shopNow")}
          </Link>

          
          <UserAutherization>
            <Link to="/customizeOrder">
             <button className="customize-btn btn" >
                 {t("homeHero.customizeOrder")}
              </button>
            </Link>
            
          
          </UserAutherization>

        </div>
      </div>
    </div>
  );
};

export default HomeHero;
