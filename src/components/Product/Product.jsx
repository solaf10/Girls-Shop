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
import { useNavigate, useParams } from "react-router-dom";
import TopGreenBar from "../TopGreenBar/TopGreenBar";

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

  const navigate = useNavigate();
  const handleClickToCart = () => {
    navigate(`/cart`);
  };
  const { id } = useParams();

  const product = productsDetails.find((b) => b.id === parseInt(id));

  const [downloadBlocksIsOpen, setDownloadBlocksIsOpen] = useState(false);
  const handleClickDownloadBlocks = () => {
    setDownloadBlocksIsOpen((prev) => !prev);
  };
  const [addToCart, setAddToCart] = useState(false);
  const handleClickAddToCart = () => {
    setAddToCart((prev) => !prev);
  };

  return (
    <>
      <TopGreenBar dynamicLink="Modern Desk" />
      <div className="product">
        {addToCart && (
          <div className="view-cart">
            <p>“Ceiling Light” has been added to your cart</p>
            <a onClick={handleClickToCart}>View Cart</a>
          </div>
        )}
        <div className="product-content">
          <div className="product-imgs">
            <div className="product-img">
              <img src={productImg} />
            </div>
            <div className="more-photos">
              <img src={productImg} className="pduct-img" />
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
              <a onClick={handleClickAddToCart}>
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
                <button onClick={handleClickDownloadBlocks}>
                  <AiOutlineDown
                    className="file-type"
                    onClick={() => setDownloadBlocks(true)}
                  />
                </button>
              </div>
              {downloadBlocksIsOpen && (
                <div className="popup">
                  <div className="title">File Type</div>
                  <ul>
                    <li>
                      <a>
                        <span className="suffix">.Dwg</span>
                        <span className="size">1.75MB</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="suffix">.Max</span>
                        <span className="size">1.75MB</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="suffix">.Psd</span>
                        <span className="size">1.75MB</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="suffix">Download Zip</span>
                        <span className="size">1.75MB</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
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
    </>
  );
}
