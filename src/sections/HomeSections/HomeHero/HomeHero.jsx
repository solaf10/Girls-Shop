import { Link, useNavigate } from "react-router";
import "./HomeHero.css";
import { useTranslation } from "react-i18next";
import UserAutherization from "../../../components/UserAutherization/UserAutherization";
import usePrivateRoute from "../../../custom hooks/usePrivateRoute";

const HomeHero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/customizeOrder");
  };
  const handlePrivateRoute = usePrivateRoute(handleNavigation);
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
            <button className="customize-btn btn" onClick={handlePrivateRoute}>
              {t("homeHero.customizeOrder")}
            </button>
          </UserAutherization>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
