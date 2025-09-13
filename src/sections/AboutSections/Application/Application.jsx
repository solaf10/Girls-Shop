import React from 'react';
import { useTranslation } from 'react-i18next'; 
import "./Application.css";
import store from "../../../../public/assets/Images/app-store (2).png";
import play from "../../../../public/assets/Images/google-play-store 1.png";
import qrcode from "../../../../public/assets/Images/QR Code.png";
import phon1 from "../../../../public/assets/Images/iphon1.png";
import phon2 from "../../../../public/assets/Images/iphon2.png";

const Application = () => {
  const { t } = useTranslation(); 

  return (
    <section className="application">
      <div className="container">
        <div className="text">
          <div className="title">
          
            <h2>{t('application.title')}</h2>
            <p>{t('application.p1')}</p>
          </div>
          <div className="desc">
            <p>{t('application.p2')}</p>
          </div>
        </div>
        <div className="image">
          <div className="qrcode">
            <img src={qrcode} alt="" />
          </div>
          <div className="app">
            <p>{t('application.scan')}</p>
            <div className="app-img">
              <img src={store} alt="" className="store" />
              <img src={play} alt="" className="play" />
            </div>
          </div>
        </div>
      </div>
      <div className="phone-img">
        <img src={phon1} alt="" className="one" />
        <img src={phon2} alt="" className="two" />
      </div>
    </section>
  );
};

export default Application;