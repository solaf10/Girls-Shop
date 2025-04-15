import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-header">
          <div className="title">
            <h2>Girl’Shop</h2>
            <div className="images">
              <img
                src="/assets/Images/google-play-store.png"
                alt="play-store"
              />
              <img src="/assets/Images/app-store.png" alt="app-store" />
            </div>
          </div>
          <div className="icons">
            <a href="" className="icon-holder">
              <FaInstagram />
            </a>
            <a href="" className="icon-holder">
              <FaFacebook />
            </a>
            <a href="" className="icon-holder">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-content">
          <div className="content">
            <ul className="pages">
              <h3>pages</h3>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <ul className="others">
              <h3>Others</h3>
              <li>
                <Link>Terms and conditions</Link>
              </li>
              <li>
                <Link>privacy policy</Link>
              </li>
              <li>
                <Link to="/contact">contact Us</Link>
              </li>
            </ul>
            <div className="contact-infos">
              <h3>Contact Info</h3>
              <div className="contact-info">
                <FiPhone className="contact-icon" />
                <p>+963988136449</p>
              </div>
              <div className="contact-info">
                <LiaEnvelopeOpenTextSolid className="contact-icon" />
                <p>girlshop@gmail.com</p>
              </div>
              <div className="contact-info">
                <CiLocationOn className="contact-icon" />
                <p>Syria , Homs , AlHamra Street , 12 </p>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.957713925917!2d36.699551054555315!3d34.730805157750176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15230ece3d5f4d81%3A0x28471a51de1514ff!2sAl%20Hamra%2C%20Hims%2C%20Syri%C3%AB!5e0!3m2!1snl!2snl!4v1744609815670!5m2!1snl!2snl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p>© Girls'Shop 2025- All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
