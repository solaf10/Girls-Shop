import "./Features.css";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="features">
      <div className="container">
        <div className="image">
          <img src="/assets/Images/features-image.png" alt="" />
        </div>
        <div className="text">
          <div className="sub-title">
            <h2>{t("features.title")}</h2>
            <p>{t("features.subtitle")}</p>
          </div>
          <div className="holder">
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>{t("features.premiumTitle")}</h3>
                <p>{t("features.premiumDesc")}</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>{t("features.blocksTitle")}</h3>
                <p>{t("features.blocksDesc")}</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>{t("features.allInOneTitle")}</h3>
                <p>{t("features.allInOneDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="dotted-bg" src="/assets/Images/Dotted.png" alt="" />
    </section>
  );
};

export default Features;
