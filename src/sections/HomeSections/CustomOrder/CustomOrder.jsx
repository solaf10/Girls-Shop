import { useState } from "react";
import "./CustomOrder.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import CustomizeOrder from "../../../components/CustomizeOrder/CustomizeOrder";
import { useTranslation } from "react-i18next";

const CustomOrder = () => {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="custom-order">
      <div className="container">
        <div className="image">
          <img
            className="dotted-bg right"
            src="/assets/Images/Dotted.png"
            alt=""
          />
          <img src="/assets/Images/customOrder-image.png" alt="" />
          <img
            className="dotted-bg left"
            src="/assets/Images/Dotted.png"
            alt=""
          />
        </div>
        <div className="text">
          <div className="sub-title">
            <h2>{t("customOrder.title")}</h2>
            <p>{t("customOrder.subtitle")}</p>
          </div>
          <div className="holder">
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>{t("customOrder.box1.title")}</h3>
                <p>{t("customOrder.box1.desc")}</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-holder">
                <FaCheckCircle className="icon" />
              </div>
              <div className="content">
                <h3>{t("customOrder.box2.title")}</h3>
                <p>{t("customOrder.box2.desc")}</p>
              </div>
            </div>
          </div>
          <button className="make-your-own-design-btn" onClick={openPopup}>
            <span>{t("customOrder.button")}</span>
            <MdArrowOutward className="arrow-icon" />
          </button>
          {isPopupOpen && <CustomizeOrder closePopup={closePopup} />}
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
