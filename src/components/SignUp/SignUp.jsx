import { useState } from "react";
import "./SignUp.css";
import SyrianFlag from "../../../public/assets/Images/SyrianFlag.svg";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SignUp() {
  const { t } = useTranslation();

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
      alert(t("signup.success"));
    }
  };

  return (
    <div className="signup-page">
      <div className="left-section">
        <div className="welcome-text">
          <h1>{t("signup.welcomeTitle")}</h1>
          <ul>
            <li>{t("signup.plan.projects")}</li>
            <li>{t("signup.plan.templates")}</li>
            <li>{t("signup.plan.storage")}</li>
            <li>{t("signup.plan.views")}</li>
          </ul>
        </div>
      </div>

      <div className="right-section">
        <div className="signup-form">
          {error && <div className="error-message">{t("signup.error")}</div>}
          <h2>{t("signup.title")}</h2>

          <button className="facebook-btn">
            <FaFacebook style={{ width: "18px", height: "18px" }} />
            <span>{t("signup.facebook")}</span>
          </button>
          <button className="google-btn">
            <FcGoogle style={{ width: "18px", height: "18px" }} />
            <span>{t("signup.google")}</span>
          </button>

          <div className="divider">{t("signup.or")}</div>

          <form onSubmit={handleSubmit}>
            <p>{t("signup.email")}</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? "input-error" : ""}
            />
            <p>{t("signup.phone")}</p>
            <div className="phone">
              <img src={SyrianFlag} />
              <span>+963</span>
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={error ? "input-error" : ""}
              />
            </div>

            <div className="password-field">
              <p>{t("signup.password")}</p>
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
                    <span>{t("signup.hide")}</span> <BsEyeSlash />
                  </>
                ) : (
                  <>
                    <span>{t("signup.show")}</span> <BsEye />
                  </>
                )}
              </span>

              <p>{t("signup.confirmPassword")}</p>
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
                    <span>{t("signup.hide")}</span> <BsEyeSlash />
                  </>
                ) : (
                  <>
                    <span>{t("signup.show")}</span> <BsEye />
                  </>
                )}
              </span>
            </div>

            <div className="forgot-password">
              <Link to="/updatePassword">{t("signup.forgot")}</Link>
            </div>

            <button className="sign-up-btn" type="submit">
              {t("signup.submit")}
            </button>
          </form>

          <p className="login-link">
            {t("signup.haveAccount")}{" "}
            <Link to="/login">{t("signup.login")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
