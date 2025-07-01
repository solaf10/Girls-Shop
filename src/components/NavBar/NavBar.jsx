import "./NavBar.css";
import { RiUserLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown, IoMdLogOut, IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { TbCube } from "react-icons/tb";

const NavBar = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isUserShow, setIsUserShow] = useState(false);
  return (
    <nav className="blurry">
      <div className="container">
        <div className="logo">
          <TbCube />
          <span>ArchiLink</span>
        </div>
        <ul className="links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact us</NavLink>
          </li>
          <li>
            <NavLink to="/designer">Designers</NavLink>
          </li>
        </ul>
        <div className="icons">
          <RiUserLine className="icon" onClick={() => setIsUserShow(true)} />
          <BsCart3 className="icon" />
          <FiSearch className="search-icon icon" />
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
              <p className="user-name">User Name</p>
              <ul>
                <li>
                  <Link to="/">User profile</Link>
                </li>
                <li>
                  <Link to="/">Setting</Link>
                </li>
              </ul>
              <p className="log-out">
                <span>Log Out</span>
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/designer">Designers</NavLink>
              </li>
              <li>
                <NavLink to="/contact">contact us</NavLink>
              </li>
            </ul>
            <div className="language">
              <div className="holder">
                <MdLanguage className="globe-icon" />
                <span>Language</span>
              </div>
              <IoIosArrowDown className="arrow-icon" />
            </div>
            <button className="log-out">
              <IoMdLogOut />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
