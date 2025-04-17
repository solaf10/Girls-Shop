import { Link } from "react-router";
import "./UpdatePasswordCard.css";

const ChangedPassword = () => {
  return (
    <Link className="password-btn changed" to="/login">
      LogIn
    </Link>
  );
};

export default ChangedPassword;
