import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setIsOpen(false);
  };

  return (
    <div
      style={{
        display: " flex",
        alignItems: "center",
        gap: "6px",
        color: " white",
        border: " none",
        padding: " 6px 12px",
        borderRadius: " 6px",
        cursor: " pointer",
      }}
    >
      <button
        style={{
          cursor: " pointer",
          backgroundColor: "transparent",
          color: "white",
          fontSize: "16px",
          fontWeight: "normal",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MdLanguage style={{ fontSize: "20px" }} />
        {i18n.language === "ar" ? "عربي" : "English"}
        {/* <IoIosArrowDown style={{ fontSize: "16px" }} /> */}
        {!isOpen ? (
          <IoIosArrowDown style={{ fontSize: "16px" }} />
        ) : (
          <IoIosArrowUp style={{ fontSize: "16px" }} />
        )}
      </button>
      {isOpen && (
        <ul
          className="dropdown-menu"
          style={{
            position: " absolute",
            top: " 120%",
            background: " white",
            borderRadius: " 6px",
            boxShadow: " 0 4px 10px rgba(0, 0, 0, 0.1)",
            listStyle: " none",
            padding: " 6px 0",
            margin: " 0",
            minWidth: " 120px",
            zIndex: " 100",
          }}
        >
          <li
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              transition: "background 0.2s ease",
              color: "var(--text-color)",
            }}
            onClick={() => changeLanguage("en")}
          >
            English
          </li>
          <li
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              transition: "background 0.2s ease",
              color: "var(--text-color)",
            }}
            onClick={() => changeLanguage("ar")}
          >
            عربي
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
