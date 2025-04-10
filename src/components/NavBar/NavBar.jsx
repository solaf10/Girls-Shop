import "./NavBar.css";
import { RiUserLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className="blurry">
      <div className="container">
        <div className="logo">Girls’Shop</div>
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
            <NavLink to="/designers">Designers</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact us</NavLink>
          </li>
        </ul>
        <div className="icons">
          <RiUserLine className="user-icon icon" />
          <BsCart3 className="cart-icon icon" />
          <FiSearch className="search-icon icon" />
        </div>
        <div className="sidebar-holder">
          <IoMenu className="menu-icon" onClick={() => setIsShow(true)} />
          <div
            className="menu"
            style={isShow ? { right: "0px" } : { right: "-100%" }}
          >
            <div className="close-icon">
              <IoClose className="icon" onClick={() => setIsShow(false)} />
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
                <NavLink to="/designers">Designers</NavLink>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
