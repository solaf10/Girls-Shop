import React from "react";
import "./ShopHero.css";
import { useTranslation } from "react-i18next";

export default function ShopHero() {
  const { t } = useTranslation();

  return (
    <>
      <div className="holder">
        <div className="card interior">
          <p>{t("mainCategories.interior")}</p>
        </div>
        <div className="card exterior">
          <p>{t("mainCategories.exterior")}</p>
        </div>
      </div>
    </>
  );
}
