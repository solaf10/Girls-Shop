import { useState } from "react";
import "./LogIn.css";
import { BsEye, BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "test@example.com" || password !== "password123") {
      setError(true);
    } else {
      setError(false);
      alert("Logged in successfully!");
    }
  };

  return (
    <div className="login-page">
      <div className="left-section">
        <div className="welcome-text">
          <h1>"Sign In & Style Your Space"</h1>
          <p>
            Log in to explore exquisite furniture collections, manage your
            orders, and bring your dream home to life with ease and elegance.
          </p>
        </div>
      </div>

      <div className="right-section">
        <div className="login-form">
          {error && (
            <div className="error-message">Invalid password or email</div>
          )}
          <h2>Log in</h2>

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

            <button className="sign-in-btn" type="submit">
              LogIn
            </button>
          </form>

          <p className="signup-link">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
