import { Link, useNavigate } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import "./UpdatePasswordCard.css";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/updatePassword/sendOTP");
  }
  return (
    <>
      <form onSubmit={email ? handleSubmit : () => {}}>
        <div className="email-holder">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          className={email ? "password-btn" : "password-btn disabled"}
          type="submit"
          value="Get OTP"
        />
      </form>
      <Link className="special-link" to="/login">
        <span>Back To LogIn</span>
        <MdArrowOutward className="arrow-icon" />
      </Link>
    </>
  );
};

export default ForgetPassword;
