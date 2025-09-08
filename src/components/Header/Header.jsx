import "./Header.css";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import LanguageSwitcher from "../translation/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container">
        <div className="customize">{t("header.customize")} +963-993811280</div>
        <div className="holder">
          <p>{t("header.showrooms")}</p>
          <p>{t("header.helpCenter")}</p>
          <div className="language" style={{ cursor: "pointer" }}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
