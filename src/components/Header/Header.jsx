import "./Header.css";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="customize">
          need to customize your own desige ?+963-993811280
        </div>
        <div className="holder">
          <p>Showrooms</p>
          <p>helpcenter</p>
          <div className="language">
            <MdLanguage className="globe-icon" />
            <span>Language</span>
            <IoIosArrowDown className="arrow-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
