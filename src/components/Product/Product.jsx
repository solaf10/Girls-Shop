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
<<<<<<< Updated upstream
            <p>Daily Credits - 3/3 </p>
=======
            <div className="product-content">
              <div className="product-imgs">
                <div className="product-img">
                  <img src={images?.[currentImage]} />
                </div>
                <div className="more-photos">{imgsEls}</div>
              </div>
              <div className="product-details">
                <div className="top-product">
                  <div className="rating">
                    {stars}
                    <p className="rev">(reviews {percentage}%)</p>
                  </div>
                  <div className="share">
                    <p>share : </p>
                    <button onClick={handleCopyURL} className="icon">
                      <FaCopy />
                    </button>
                    <button className="icon">
                      <FaInstagram />
                    </button>
                    <button
                      onClick={() =>
                        handleShare(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            currentUrl
                          )}`
                        )
                      }
                      className="icon"
                    >
                      <FaFacebook />
                    </button>
                    <button
                      onClick={() =>
                        handleShare(
                          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            currentUrl
                          )}&text=${encodeURIComponent("Check this out!")}`
                        )
                      }
                      className="icon"
                    >
                      <FaTwitter />
                    </button>
                  </div>
                </div>
                <h2>{name}</h2>
                <p>{desc}</p>
                <div className="price-box">
                  <span className="price">${salesPrice}</span>
                  <span className="real-price">{price}</span>
                  <span className="sale">{sale} sale</span>
                </div>
                <form>
                  <div className="colors-holder">
                    <p>Colors</p>
                    <div className="colors">{colorsEls}</div>
                  </div>
                  <div className="cart">
                    <div className="product-number">
                      <button
                        type="button"
                        style={{
                          color: count == 0 ? "#ccc" : "var(--primary-color)",
                        }}
                        onClick={handleCount1}
                      >
                        -
                      </button>
                      <input
                        style={{
                          border: "none",
                          width: "20px",
                          textAlign: "center",
                        }}
                        type="text"
                        value={count}
                        onChange={(e) => setCount(Number(e.target.value))}
                      />
                      <button type="button" onClick={handleCount2}>
                        +
                      </button>
                    </div>
                    <button
                      className="cart-btn"
                      type="submit"
                      onClick={handleClickAddToCart}
                    >
                      <span>Add to Cart</span>
                      <MdArrowOutward className="arrow-icon" />
                    </button>
                  </div>
                </form>
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
                          <a href={file} download={file}>
                            <span className="suffix">.Dwg</span>
                            <span className="size">1.75MB</span>
                          </a>
                        </li>
                        <li>
                          <a href={file} download={file}>
                            <span className="suffix">.Max</span>
                            <span className="size">1.75MB</span>
                          </a>
                        </li>
                        <li>
                          <a href={file} download={file}>
                            <span className="suffix">.Psd</span>
                            <span className="size">1.75MB</span>
                          </a>
                        </li>
                        <li>
                          <a href={file} download={file}>
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
              <div className="des">
                <div className="info">
                  <p className="title">Category</p>
                  <p className="desc">{category}</p>
                </div>
                <div className="info">
                  <p className="title">Material</p>
                  <p className="desc">{material}</p>
                </div>
                <div className="info">
                  <p className="title">Style</p>
                  <p className="desc">{style}</p>
                </div>
                <div className="info">
                  <p className="title">Length</p>
                  <p className="desc">{lengthInfo}</p>
                </div>
                <div className="info">
                  <p className="title">Width</p>
                  <p className="desc">{width}</p>
                </div>
                <div className="info">
                  <p className="title">Height</p>
                  <p className="desc">{height}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="comment-bar">
              <h1>
                Comment: <span>1</span>
              </h1>
              <div className="name-and-comment">
                <div className="name-and-time">
                  <p className="name"> shahed aldroubi </p>
                  <div className="rating">
                    {stars}
                    {/* <p className="rev">(reviews {percentage}%)</p> */}
                  </div>
                  <p className="time"> 5/9/2025</p>
                </div>

                <p className="comment">
                  "Such a well-written piece! Insightful and inspiring — keep up
                  the amazing work!"
                </p>
              </div>
            </div>
            <div className="write-comment-sec">
              <h1>Post a comment</h1>
              <div className="write-comment-form">
                <div className="phone-email-info">
                  <input type="text" placeholder="Phone"></input>
                  <input type="text" placeholder="E-mail"></input>
                </div>
                <div className="textarea-to-write-comment">
                  <label>Your Message</label>
                  <textarea />
                </div>
                <div className="agree-yo-save-your-info">
                  <input className="check" type="checkbox" />
                  <label>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button className="send-comment">Send</button>
              </div>
            </div>
>>>>>>> Stashed changes
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
