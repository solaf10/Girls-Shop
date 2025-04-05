import "./NavBar.css";
import { RiUserLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
      </div>
    </nav>
  );
};

export default NavBar;
