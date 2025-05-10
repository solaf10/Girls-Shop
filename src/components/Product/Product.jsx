import React, { useState } from "react";
import "./Product.css";
import productImg from "../../../public/assets/Images/product-5.png";
import StarRating from "../StarRating/StarRating";
import {
  FaCopy,
  FaFacebook,
  FaFileDownload,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

import { FiDownload } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function Product() {
  const productsDetails = [
    {
      id: 1,
      image: "../../../public/assets/Images/product.png",
      title: "First Time Home Owner Ideas",
      price: "$233.00",
      salePrice: "$200.00",
    },
    {
      id: 2,
      image: "../../../public/assets/Images/product.png",
      title: "First Time Home Owner Ideas",
      price: "$233.00",
      salePrice: "$200.00",
    },
    {
      id: 3,
      image: "../../../public/assets/Images/product.png",
      title: "First Time Home Owner Ideas",
      price: "$233.00",
      salePrice: "$200.00",
    },
    {
      id: 4,
      image: "../../../public/assets/Images/product.png",
      title: "First Time Home Owner Ideas",
      price: "$233.00",
      salePrice: "$200.00",
    },
  ];
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleCount1 = () => {
    setCount((c) => c - step);
  };
  const handleCount2 = () => {
    setCount((c) => c + step);
  };

  const { id } = useParams();

  const product = productsDetails.find((b) => b.id === parseInt(id));

  const [downloadBlocks, setDownloadBlocks] = useState(false);
  const handleClick = () => {
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
    </div>;
  };
  return (
    <div
      className="product"
      style={{ marginLeft: "60px", marginRight: "60px" }}
    >
      <div className="product-content">
        <div className="product-imgs">
          <div className="product-img">
            <img src={productImg} />
          </div>
          <div className="more-photos">
            <img src={productImg} className="product-img" />
            <img src={productImg} className="product-img" />
            <img src={productImg} className="product-img" />
            <img src={productImg} className="product-img" />
            <img src={productImg} className="product-img" />
          </div>
        </div>
        <div className="product-details">
          <div className="top-product">
            <div className="rating">
              <StarRating />
              <p className="rev">(reviews 30%)</p>
            </div>
            <div className="share">
              <p>share : </p>
              <a href="" className="icon">
                <FaCopy />
              </a>
              <a href="" className="icon">
                <FaInstagram />
              </a>
              <a href="" className="icon">
                <FaFacebook />
              </a>
              <a href="" className="icon">
                <FaTwitter />
              </a>
            </div>
          </div>
          <h2>Modern Desk</h2>
          <p>
            Ceiling Light Ceiling LightCeiling LightCeiling LightCeiling
            LightCeiling LightCeiling{" "}
          </p>
          <div className="price-box">
            <span className="price">$255.00</span>{" "}
            <span className="real-price">$270.00</span>
            <span className="sale">20% sale</span>
          </div>
          <div className="cart">
            <a>
              <span>Add to Cart</span>
              <MdArrowOutward className="arrow-icon" />{" "}
            </a>
            <div className="product-number">
              <button onClick={handleCount1}>-</button>
              <input
                style={{ border: "none", width: "20px", textAlign: "center" }}
                type="text"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
              />
              <button onClick={handleCount2}>+</button>
            </div>
          </div>
          <hr />
          <div className="architecture">
            <p> For Architecture Download</p>
            <div className="download-button">
              <button>
                <FiDownload />
                Download Blocks
              </button>
              <button>
                <AiOutlineDown
                  className="file-type"
                  onClick={() => setDownloadBlocks(true)}
                />
              </button>
            </div>
            <p>Daily Credits - 3/3 </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="description">
        <div className="title"> Description & Other Information</div>
        <div className="info">
          <p className="title">Category</p>
          <p className="desc">Category</p>
        </div>
        <div className="info">
          <p className="title">Material</p>
          <p className="desc">Material</p>
        </div>
        <div className="info">
          <p className="title">Dimensions</p>
          <p className="desc"></p>
        </div>
        <div className="info">
          <p className="title">Prand</p>
          <p className="desc"></p>
        </div>
      </div>
      <hr />
    </div>
  );
}
