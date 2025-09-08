import "./MainCategories.css";
import { useTranslation } from "react-i18next";

const MainCategories = () => {
  const { t } = useTranslation();

  return (
    <section className="main-categories">
      <div className="container">
        <div className="home-main-title">
          <h2>{t("mainCategories.title")}</h2>
          <p>{t("mainCategories.subtitle")}</p>
        </div>
        <div className="holder">
          <div className="card interior">
            <p>{t("mainCategories.interior")}</p>
          </div>
          <div className="card scenes">
            <p>{t("mainCategories.scenes")}</p>
          </div>
          <div className="card exterior">
            <p>{t("mainCategories.exterior")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
