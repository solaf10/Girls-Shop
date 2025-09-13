import { useState } from "react";
import "./CustomOrder.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import CustomizeOrder from "../../../components/CustomizeOrder/CustomizeOrder";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import usePrivateRoute from "../../../custom hooks/usePrivateRoute";

const CustomOrder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/customizeOrder");
  };
  const handlePrivateRoute = usePrivateRoute(handleNavigation);
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
          <button
            className="make-your-own-design-btn"
            onClick={handlePrivateRoute}
          >
            <span>{t("customOrder.button")}</span>
            <MdArrowOutward className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
