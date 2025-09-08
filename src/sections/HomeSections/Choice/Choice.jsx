import "./Choice.css";
import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";

const Choice = () => {
  const { t } = useTranslation();

  return (
    <section className="choice">
      <div className="container">
        <div className="text">
          <div className="sub-title">
            <h2>{t("choice.title")}</h2>
            <p>{t("choice.description")}</p>
          </div>
        </div>

        <div className="image">
          <img src="/assets/Images/choice-image.png" alt="" />
        </div>
      </div>
      <img className="dotted-bg" src="/assets/Images/Dotted.png" alt="" />
    </section>
  );
};

export default Choice;
