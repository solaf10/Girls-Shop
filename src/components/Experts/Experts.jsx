import "./Experts.css";
import { useTranslation } from "react-i18next";

const Experts = () => {
  const { t } = useTranslation();

  return (
    <div className="experts-holder container">
      <div className="experts">
        <div className="card">
          <p className="num">15</p>
          <p className="text">{t("experts.yearsExperience")}</p>
        </div>
        <div className="card">
          <p className="num">2</p>
          <p className="text">{t("experts.openedInCountry")}</p>
        </div>
        <div className="card">
          <p className="num">10k+</p>
          <p className="text">{t("experts.furnitureSold")}</p>
        </div>
        <div className="card">
          <p className="num">260+</p>
          <p className="text">{t("experts.designsDownloaded")}</p>
        </div>
      </div>
    </div>
  );
};

export default Experts;
