import "./Card.css";
import { GrView } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCart } from "react-icons/io5";
export default function Card({ image, name, price, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div>
        <img src={image} />
        <div className="icons">
          <button className="icon view" onClick={onClick}>
            <p>Quick View</p>
            <GrView />
          </button>
          <div className="icon cart">
            <p>Add to card</p>
            <IoCart />
          </div>
          <div className="icon download">
            <p>Download block</p>
            <MdOutlineFileDownload />
          </div>
        </div>
      </div>
      <div className="info">
        <p>{name}</p>
        <div className="price">{price} </div>
      </div>
    </div>
  );
}
