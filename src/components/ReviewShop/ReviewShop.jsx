import React from "react";
import { useTranslation } from "react-i18next"; 
import icon1 from "./1.svg";
import icon2 from "./2.svg";
import icon3 from "./3.svg";
import icon4 from "./4.svg";
import "./ReviewShop.css";

export default function ReviewShop() {
  const { t } = useTranslation();
  return (
    <div className="review">
      <div className="comp">
        <div className="icon">
          <img src={icon1} />
        </div>
        <div>
         
          <h4>{t('reviewShop.highQuality')}</h4>
          <p>{t('reviewShop.highQualityDesc')}</p>
        </div>
      </div>
      <div className="comp">
        <div className="icon">
          <img src={icon2} />
        </div>
        <div>
          <h4>{t('reviewShop.warrantyProtection')}</h4>
          <p>{t('reviewShop.warrantyProtectionDesc')}</p>
        </div>
      </div>
      <div className="comp">
        <div className="icon">
          <img src={icon3} />
        </div>
        <div>
          <h4>{t('reviewShop.freeShipping')}</h4>
          <p>{t('reviewShop.freeShippingDesc')}</p>
        </div>
      </div>
      <div className="comp">
        <div className="icon">
          <img src={icon4} />
        </div>
        <div>
          <h4>{t('reviewShop.support')}</h4>
          <p>{t('reviewShop.supportDesc')}</p>
        </div>
      </div>
    </div>
  );
}