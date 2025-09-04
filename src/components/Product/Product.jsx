import "./Product.css";
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
import { AiOutlineDown } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TopGreenBar from "../TopGreenBar/TopGreenBar";
import axios from "axios";
import Loader from "../Loader/Loader";
import config from "../../Constants/enviroment";
import { toast } from "react-toastify";

export default function Product() {
  /* const productsDetails = [
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
  ]; */
  const [productsDetails, setProductsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [chosencolor, setchosencolor] = useState("");
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const {
    id,
    image,
    name,
    price,
    sale,
    images,
    desc,
    rate,
    category,
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
  const handleClickToCart = () => {
    navigate(`/cart`);
  };
  const params = useParams();

  // const product = productsDetails.find((b) => b.id === parseInt(id));

  const [downloadBlocksIsOpen, setDownloadBlocksIsOpen] = useState(false);
  const handleClickDownloadBlocks = () => {
    setDownloadBlocksIsOpen((prev) => !prev);
  };
  const [addToCart, setAddToCart] = useState(false);
  const handleClickAddToCart = () => {
    setAddToCart((prev) => !prev);
  };
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
  }, []);

  const colorsEls = colors?.map((color, i) => (
    <div key={i} className="holder">
      <label
        className={
          color == chosencolor ? "active choose-color" : "choose-color"
        }
        style={{ backgroundColor: color }}
        htmlFor={`color-${i + 1}`}
      ></label>
      <input
        type="radio"
        name="color"
        id={`color-${i + 1}`}
        onChange={() => setchosencolor(color)}
      />
    </div>
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
                <p>“Ceiling Light” has been added to your cart</p>
                <a onClick={handleClickToCart}>View Cart</a>
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
                <p className="title">Width</p>
                <p className="desc">{width}</p>
              </div>
              <div className="info">
                <p className="title">Height</p>
                <p className="desc">{height}</p>
              </div>
              <div className="info">
                <p className="title">Length</p>
                <p className="desc">{lengthInfo}</p>
              </div>
            </div>
            <hr />
          </div>
        </>
      )}
    </div>
  );
}
