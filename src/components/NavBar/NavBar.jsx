import "./NavBar.css";
import { RiUserLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";

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
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact us</NavLink>
          </li>
        </ul>
        <div className="icons">
          <RiUserLine className="icon" />
          <BsCart3 className="icon" />
          <FiSearch className="search-icon icon" />
        </div>
        <div className="sidebar-holder">
          <IoMenu className="menu-icon" onClick={() => setIsShow(true)} />
          <div
            className="overlay"
            onClick={() => setIsShow(false)}
            style={isShow ? { right: "0px" } : { right: "-100%" }}
          ></div>
          <div
            className="menu"
            style={isShow ? { right: "0px" } : { right: "-100%" }}
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
