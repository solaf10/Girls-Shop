import React from "react";
import { useTranslation } from "react-i18next";
import "./FollowUs.css";

const FollowUs = () => {
  const { t } = useTranslation();
  return (
    <section className="followus">
      <div className="container">
        <div className="title">
          <h2>{t("followUs.title")}</h2>
        </div>
        <div className="slider">
          <img src="/assets/Images/Img.png" alt="" />
          <img src="/assets/Images/Img1.png" alt="" />
          <img src="/assets/Images/Img2.png" alt="" />
          <img src="/assets/Images/Img3.png" alt="" />
          <img src="/assets/Images/Img4.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
