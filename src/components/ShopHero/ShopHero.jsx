import React from "react";
import { useTranslation } from "react-i18next"; 
import "./ShopHero.css";

export default function ShopHero() {
  const { t } = useTranslation(); 
  
  return (
    <>
      <div className="holder">
        <div className="card interior">
         
          <p>{t('shopHero.interior')}</p>
        </div>
        <div className="card exterior">
          <p>{t('shopHero.exterior')}</p>
        </div>
      </div>
    </>
  );
}