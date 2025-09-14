import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import {
  FaCopy,
  FaFacebook,
  FaFileDownload,
  FaInstagram,
  FaRegStar,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TopGreenBar from "../TopGreenBar/TopGreenBar";
import axios from "axios";
import Loader from "../Loader/Loader";
import config from "../../Constants/enviroment";
import { toast } from "react-toastify";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RelatedProducts from "../../sections/Product/RelatedProducts/RelatedProducts";
import usePrivateRoute from "../../custom hooks/usePrivateRoute";
import UserAutherization from "../UserAutherization/UserAutherization";
import StarRating from "../StarRating/StarRating";
import { useTranslation } from "react-i18next";
import "./Product.css";

export default function Product() {
  const { t } = useTranslation();
  const [productsDetails, setProductsDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [chosenColor, setChosenColor] = useState("#c0c0c0");

  const {
    id,
    name,
    price,
    sale,
    images,
    desc,
    rate,
    designType,
    category,
    type,
    style,
    material,
    colors,
    width,
    height,
    lengthInfo,
    file,
  } = productsDetails;

  // price
  const rawPrice = price || "$0";
  const rawSale = sale || "0%";

  const numPrice = parseFloat(rawPrice.replace("$", ""));
  const numSale = parseFloat(rawSale.replace("%", "")) / 100;

  const salesPrice = numPrice * (1 - numSale);

  // reviewsPrecentage
  const percentage = Math.round((rate / 5) * 100);

  const handleCount1 = () => {
    if (count == 0) return;
    setCount((c) => c - step);
  };
  const handleCount2 = () => {
    setCount((c) => c + step);
  };

  const navigate = useNavigate();
  const params = useParams();

  const [downloadBlocksIsOpen, setDownloadBlocksIsOpen] = useState(false);
  const handleClickDownloadBlocks = () => {
    setDownloadBlocksIsOpen((prev) => !prev);
  };
  const [addToCart, setAddToCart] = useState(false);
  const handleClickAddToCart = (e) => {
    e.preventDefault();
    if (chosenColor != "" && count != 0) {
      axios
        .post("http://localhost:8000/cartProducts", {
          id,
          name,
          image: images[0],
          price,
          color: chosenColor,
          amount: count,
        })
        .then((res) => setAddToCart(res.data))
        .catch((err) => console.log(err));
      navigate(`/cart`);
    } else {
      toast.error("Choose a Color and an Amount");
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [params.id]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(config.baseUrl + "/" + config.products + "/" + params.id)
      .then((res) => {
        setIsLoading(false);
        setProductsDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [params.id]);

  const colorsEls = colors?.map((color, i) => (
    <div key={i} className="holder">
      <div className="choose-color" style={{ backgroundColor: color }}></div>
    </div>
  ));
  const colorsCheckInputs = colors?.map((color, i) => (
    <label
      key={i}
      htmlFor={color}
      style={{ backgroundColor: color }}
      className={chosenColor == color ? "active choose-color" : "choose-color"}
    >
      <input
        id={color}
        type="radio"
        name="color"
        checked={chosenColor === color}
        onChange={() => setChosenColor(color)}
      />
    </label>
  ));

  // rating
  const stars = [...new Array(5)].map((el, i) =>
    i + 1 <= rate ? (
      <FaStar className="icon" key={i} />
    ) : (
      <FaRegStar className="icon" key={i} />
    )
  );

  // imgs
  const imgsEls = images?.map((img, i) => (
    <img
      className={i == currentImage ? "active pduct-img" : "pduct-img"}
      src={img}
      key={i}
      onClick={() => setCurrentImage(i)}
    />
  ));

  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  const handleCopyURL = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(currentUrl);
    toast.success("URL copied successfully!!");
  };

  const handleShare = (url) => {
    window.open(url, "_blank", "width=600,height=400");
  };

  const handleDownloadPrivateRoute = usePrivateRoute(() => {});

  return (
    <div className="single-product">
      {isLoading ? (
        <div className="loader-holder">
          <Loader />
        </div>
      ) : (
        <>
          <TopGreenBar dynamicLink="Modern Desk" />
          <div className="product container">
            {addToCart && (
              <div className="view-cart">
                <p>{t("product.addedToCart")}</p>
                <a>{t("product.viewCart")}</a>
              </div>
            )}
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
                    <p className="rev">
                      ({t("product.reviews")} {percentage}%)
                    </p>
                  </div>
                  <div className="share">
                    <p>{t("product.share")}</p>
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
                          )}&text=${encodeURIComponent(t("product.shareText"))}`
                        )
                      }
                      className="icon"
                    >
                      <FaTwitter />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h1>{name}</h1>
                  <p>{desc}</p>
                  <div className="price-box">
                    <span className="price">${salesPrice}</span>
                    {numSale != 0 && (
                      <>
                        <span className="real-price">{price}</span>
                        <span className="sale">
                          {sale} {t("product.sale")}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <form>
                  <div className="colors">
                    <h3>Choose color:</h3>
                    {colorsCheckInputs}
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
                        required
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
                      <span>{t("product.addToCart")}</span>
                      <MdArrowOutward className="arrow-icon" />
                    </button>
                  </div>
                </form>
                <UserAutherization>
                  <hr />
                  <div className="architecture">
                    <p>{t("product.forArchitecture")}</p>
                    <div
                      className="download-button"
                      onClick={handleDownloadPrivateRoute}
                    >
                      {localStorage.getItem("token") != null ? (
                        <a href={file?.[0]?.["3d"]} download="3DBlock.3d">
                          <FiDownload />
                          {t("product.downloadBlocks")}
                        </a>
                      ) : (
                        <p>
                          <FiDownload />
                          {t("product.downloadBlocks")}
                        </p>
                      )}
                      <button onClick={handleClickDownloadBlocks}>
                        {!downloadBlocksIsOpen ? (
                          <IoIosArrowDown className="file-type" />
                        ) : (
                          <IoIosArrowUp className="file-type" />
                        )}
                      </button>
                    </div>
                    {downloadBlocksIsOpen && (
                      <div className="popup">
                        <div className="title">{t("product.fileType")}</div>
                        <ul>
                          {file?.map((f, index) => {
                            const [key, value] = Object.entries(f)[0];
                            let suffix = "";
                            if (key === "2d") suffix = ".2D";
                            if (key === "3d") suffix = ".3D";
                            if (key === "skp") suffix = ".SketchUp";
                            return (
                              <li key={index}>
                                <a href={value} download>
                                  <span className="suffix">{suffix}</span>
                                  <span className="size">1.75MB</span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    <p>{t("product.dailyCredits")}</p>
                  </div>
                </UserAutherization>
              </div>
            </div>
            <hr />
            <div className="description">
              <h2>{t("product.descriptionTitle")}</h2>
              <div className="des">
                <div className="info">
                  <p className="title">{t("product.designType")}</p>
                  <p className="desc">{designType}</p>
                </div>
                <div className="info">
                  <p className="title">{t("product.category")}</p>
                  <p className="desc">{category}</p>
                </div>
                <div className="info">
                  <p className="title">{t("product.type")}</p>
                  <p className="desc">{type}</p>
                </div>
                <div className="info">
                  <p className="title">{t("product.material")}</p>
                  <p className="desc">{material}</p>
                </div>
                <div className="info">
                  <p className="title">{t("product.style")}</p>
                  <p className="desc">{style}</p>
                </div>
                <div className="info">
                  <p className="title">{t("product.length")}</p>
                  <p className="desc">{lengthInfo}</p>
                </div>
                <div className="info">
                  <p className="title">{t("product.width")}</p>
                  <p className="desc">{width}</p>
                </div>
                <div className="info">
                  <p className="title">{t("product.height")}</p>
                  <p className="desc">{height}</p>
                </div>
                <div className="info colors-holder">
                  <p className="title">{t("product.colors")}</p>
                  <div className="desc colors">{colorsEls}</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="comment-bar">
              <h2>
                {t("product.commentTitle")}
                <span>1</span>
              </h2>
              <div className="name-and-comment">
                <div className="name-and-time">
                  <p className="name">{t("product.commentName")}</p>
                  <div className="rating">{stars}</div>
                  <p className="time">{t("product.commentTime")}</p>
                </div>
                <p className="comment">{t("product.commentText")}</p>
              </div>
            </div>
            <div className="write-comment-sec">
              <h2>{t("product.postComment")}</h2>
              <div className="write-comment-form">
                <div className="phone-email-info">
                  <StarRating />
                </div>
                <div className="textarea-to-write-comment">
                  <label>{t("product.yourMessage")}</label>
                  <textarea />
                </div>
                <button className="send-comment">{t("product.send")}</button>
              </div>
            </div>
            <RelatedProducts category={category} id={id} />
          </div>
        </>
      )}
    </div>
  );
}
