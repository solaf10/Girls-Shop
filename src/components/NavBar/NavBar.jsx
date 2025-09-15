import "./NavBar.css";
import { useLocation, useNavigate, NavLink, Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown, IoMdLogOut, IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { TbCube } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";

const NavBar = () => {
  const { t } = useTranslation();
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isUserShow, setIsUserShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isToken = localStorage.getItem("token") != null;

  const handleUserIconClick = () => {
    if (isToken) {
      setIsUserShow(true);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    setIsUserShow(false);
  }, [location.pathname]);

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/profile" ||
    location.pathname.includes("/updatePassword");
  const isCartPage = location.pathname == "/cart";
  const isShopPage = location.pathname == "/shop";
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsUserShow(false);
    navigate("/");
    toast.success("You LoggedOut Successfully!!");
  };

  return (
    <nav className="blurry">
      <div className="container">
        <div className="logo">
          <TbCube />
          <span>ArchiLink</span>
        </div>
        <ul className="links">
          <li>
            <NavLink to="/">{t("navbar.home")}</NavLink>
          </li>
          <li>
            <NavLink to="/shop">{t("navbar.shop")}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t("navbar.about")}</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">{t("navbar.blogs")}</NavLink>
          </li>
          <li>
            <NavLink to="/contact">{t("navbar.contact")}</NavLink>
          </li>
          <li>
            <NavLink to="/designer">{t("navbar.designers")}</NavLink>
          </li>
          {isToken && (
            <li>
              <NavLink to="/order">{t("navbar.orders")}</NavLink>
            </li>
          )}
        </ul>
        <div className="icons">
          {/* زر الأيقونة */}
          <button
            onClick={handleUserIconClick}
            className={`icon-btn ${isAuthPage ? "active" : ""}`}
          >
            <RiUserLine className="icon" />
          </button>
          <button
            className={`icon-btn ${isCartPage ? "active" : ""}`}
            onClick={() => navigate("/cart")}
          >
            <BsCart3 className="icon" />
          </button>
          <button
            className={`icon-btn ${isShopPage ? "active" : ""}`}
            onClick={() => navigate("/shop")}
          >
            <FiSearch className="search-icon icon" />
          </button>
        </div>

        <div className="popups-holder">
          <div className="user-popup-holder">
            <div
              className="overlay user-overlay"
              onClick={() => setIsUserShow(false)}
              style={isUserShow ? { top: "0px" } : { top: "-100%" }}
            ></div>
            <div
              className="user-popup"
              style={isUserShow ? { top: "147px" } : { top: "-100%" }}
            >
              <ul>
                <li>
                  <Link to="/profile">{t("navbar.userProfile")}</Link>
                </li>
                <li>
                  <Link to="/">{t("navbar.settings")}</Link>
                </li>
              </ul>
              <p className="log-out" onClick={handleLogout}>
                <span>{t("navbar.logout")}</span>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </div>

        <div className="sidebar-holder">
          <IoMenu className="menu-icon" onClick={() => setIsMenuShow(true)} />
          <div
            className="overlay menu-overlay"
            onClick={() => setIsMenuShow(false)}
            style={isMenuShow ? { right: "0px" } : { right: "-100%" }}
          ></div>
          <div
            className="menu"
            style={isMenuShow ? { right: "0px" } : { right: "-100%" }}
          >
            <div className="user-info">
              <div className="cart">
                <BsCart3 className="cart-icon" />
              </div>
              <div className="image">
                <FaUser className="user-icon" />
              </div>
            </div>
            <ul>
              <li>
                <NavLink to="/">{t("navbar.home")}</NavLink>
              </li>
              <li>
                <NavLink to="/shop">{t("navbar.shop")}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{t("navbar.about")}</NavLink>
              </li>
              <li>
                <NavLink to="/designer">{t("navbar.designers")}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{t("navbar.contact")}</NavLink>
              </li>
            </ul>
            <div className="language">
              <div className="holder">
                <MdLanguage className="globe-icon" />
                <span>{t("navbar.language")}</span>
              </div>
              <IoIosArrowDown className="arrow-icon" />
            </div>
            <button className="log-out">
              <IoMdLogOut />
              <span>{t("navbar.logout")}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
