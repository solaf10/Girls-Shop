import "./Card.css";
import { GrView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
export default function Card({ id, images, name, sale, price, onClick }) {
  // price
  const rawPrice = price || "$0";
  const rawSale = sale || "0%";

  const numPrice = parseFloat(rawPrice.replace("$", ""));
  const numSale = parseFloat(rawSale.replace("%", "")) / 100;

  const salesPrice = numPrice * (1 - numSale);
  //
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname + "/" + id;
  const handleCopyURL = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("URL copied successfully!!");
  };
  return (
    <div className="card">
      <div>
        <img src={images?.[0]} />
        <div className="icons">
          <button className="icon view" onClick={onClick}>
            <p>Quick View</p>
            <GrView />
          </button>
          <button onClick={handleCopyURL} className="icon copy">
            <p>Copy Link</p>
            <FaLink />
          </button>
          <div onClick={() => setIsShareOpen(true)} className="icon download">
            <p>Download block</p>
            <MdOutlineFileDownload />
          </div>
        </div>
      </div>
      <div className="info">
        <p>{name}</p>
        <div className="price">
          <span>{salesPrice.toFixed(2)} </span>
          {numSale !== 0 && <span className="real-price">{price} </span>}
        </div>
      </div>
    </div>
  );
}
