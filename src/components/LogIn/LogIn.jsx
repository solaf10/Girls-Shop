import { useState } from "react";
import "./LogIn.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LogIn() {
  const { t } = useTranslation();

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
      alert(t("login.success"));
    }
  };

  return (
    <div className="login-page">
      <div className="left-section">
        <div className="welcome-text">
          <h1>{t("login.welcomeTitle")}</h1>
          <p>{t("login.welcomeDesc")}</p>
        </div>
      </div>

      <div className="right-section">
        <div className="login-form">
          {error && (
            <div className="error-message">
              <p>{t("login.error")}</p>
            </div>
          )}
          <h2>{t("login.title")}</h2>

          <button className="facebook-btn">
            <FaFacebook style={{ width: "18px", height: "18px" }} />
            <span>{t("login.facebook")}</span>
          </button>
          <button className="google-btn">
            <FcGoogle style={{ width: "18px", height: "18px" }} />
            <span>{t("login.google")}</span>
          </button>

          <div className="divider">{t("login.or")}</div>

          <form onSubmit={handleSubmit}>
            <p>{t("login.email")}</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? "input-error" : ""}
            />
            <div className="password-field">
              <p>{t("login.password")}</p>
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
                    <span>{t("login.hide")}</span> <BsEyeSlash />
                  </>
                ) : (
                  <>
                    <span>{t("login.show")}</span> <BsEye />
                  </>
                )}
              </span>
            </div>

            <div className="forgot-password">
              <Link to="/updatePassword">{t("login.forgot")}</Link>
            </div>

            <button className="sign-in-btn" type="submit">
              {t("login.submit")}
            </button>
          </form>

          <p className="signup-link">
            {t("login.noAccount")} <Link to="/signup">{t("login.signup")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
