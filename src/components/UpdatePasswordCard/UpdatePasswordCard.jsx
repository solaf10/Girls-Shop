import { Link } from "react-router";
import "./UpdatePasswordCard.css";

const UpdatePasswordCard = ({ title, desc, link, children }) => {
  return (
    <div className="card">
      <div className="title">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      {children}
    </div>
  );
};

export default UpdatePasswordCard;
