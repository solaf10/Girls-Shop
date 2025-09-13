import React from "react";
import { useTranslation } from "react-i18next";
import "./ShopHero.css";
import { useDesignType } from "../../context/DesignType";

export default function ShopHero() {
  const { t } = useTranslation();
  const { designType, setDesignType } = useDesignType();

  return (
    <>
      <div className="holder">
        <div
          className={
            designType == "internal" ? "card interior active" : "card interior"
          }
          onClick={() => setDesignType("internal")}
        >
          <p>{t("shopHero.interior")}</p>
        </div>
        <div
          className={
            designType == "external" ? "card exterior active" : "card exterior"
          }
          onClick={() => setDesignType("external")}
        >
          <p>{t("shopHero.exterior")}</p>
        </div>
      </div>
    </>
  );
}
