import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="lang-switcher">
      <button
        style={{ color: "white", backgroundColor: "var(--third-color)" }}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        style={{ color: "white", backgroundColor: "var(--third-color)" }}
        onClick={() => changeLanguage("ar")}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;
