import { useState } from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaCopy } from "react-icons/fa";
import "./SharePopup.css";

const SharePopup = ({ url }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <div className="share-popup-holder">
      <div className="overlay"></div>
      <div className="share-popup-container">
        <div className="share-popup">
          <p>Share this post:</p>
          <div className="share-icons">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <button onClick={handleCopy}>
              <FaCopy />
            </button>
          </div>
          <button className="close-popup" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
