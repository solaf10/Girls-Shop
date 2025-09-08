import "./ReviewForm.css";
import { useTranslation } from "react-i18next";

const ReviewForm = () => {
  const { t } = useTranslation();

  return (
    <div className="review-form">
      <div className="container">
        <div className="image">
          <img src="/assets/Images/home-contact-sofa.png" alt="sofa" />
        </div>
        <div className="text">
          <div className="home-main-title">
            <h2>{t("reviewForm.title")}</h2>
          </div>
          <form>
            <textarea
              className="review-input"
              placeholder={t("reviewForm.placeholder")}
            ></textarea>
            <input
              className="send-btn"
              type="submit"
              value={t("reviewForm.button")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
