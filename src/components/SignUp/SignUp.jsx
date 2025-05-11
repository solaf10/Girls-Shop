import { useState } from "react";
import "./SignUp.css";
import SyrianFlag from "../../../public/assets/Images/SyrianFlag.svg";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoTriangleDown } from "react-icons/go";
import triangle from "../../../public/assets/Images/triangle.svg";

import { Link } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "test@example.com" || password !== "password123") {
      setError(true);
    } else {
      setError(false);
      alert("successfully!");
    }
  };

  return (
    <div className="signup-page">
      <div className="left-section">
        <div className="welcome-text">
          <h1>Your plan includes</h1>
          <ul>
            <li>Unlimited projects and resources </li>{" "}
            <li>Unlimited templates</li>
            <li>Unlimited storage</li>
            <li>List, Board, and Calendar views...</li>
          </ul>
        </div>
      </div>

      <div className="right-section">
        <div className="signup-form">
          {error && <div className="error-message">Password Did not Match</div>}
          <h2>Sign Up</h2>

          <button className="facebook-btn">
            {" "}
            <FaFacebook style={{ width: "18px", height: "18px" }} />
            <span>Continue with Facebook</span>
          </button>
          <button className="google-btn">
            {" "}
            <FcGoogle style={{ width: "18px", height: "18px" }} />
            <span>Continue with Google</span>
          </button>

          <div className="divider">OR</div>

          <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? "input-error" : ""}
            />
            <p>Phone Number</p>
            <div className="phone">
              <img src={SyrianFlag} />
              <img src={triangle} className="syrian-flag" />
              <span>+963</span>
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={error ? "input-error" : ""}
              />
            </div>
            <div className="password-field">
              <p>Password</p>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={error ? "input-error" : ""}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <>
                    {" "}
                    <span>Hide</span> <BsEyeSlash />
                  </>
                ) : (
                  <>
                    {" "}
                    <span>Show</span>
                    <BsEye />
                  </>
                )}
              </span>
              <p> Confirm Password</p>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={error ? "input-error" : ""}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <>
                    {" "}
                    <span>Hide</span> <BsEyeSlash />
                  </>
                ) : (
                  <>
                    {" "}
                    <span>Show</span>
                    <BsEye />
                  </>
                )}
              </span>
            </div>

            <div className="forgot-password">
              <Link to="/updatePassword">Forget your password</Link>
            </div>

            <button className="sign-up-btn" type="submit">
              Sign Up
            </button>
          </form>

          <p className="login-link">
            Have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
