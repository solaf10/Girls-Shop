import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

export default i18n;
