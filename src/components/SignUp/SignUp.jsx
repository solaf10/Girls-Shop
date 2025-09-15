import { useEffect, useState } from "react";
import "./SignUp.css";
import SyrianFlag from "../../../public/assets/Images/SyrianFlag.svg";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import config from "../../Constants/enviroment";
import axios from "axios";
import { toast } from "react-toastify";

function SignUp() {
  const { t } = useTranslation();

  const [areas, setAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectUserType, setSelectUserType] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !selectedArea ||
      !selectUserType ||
      password !== confirmPassword
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${config.baseUrl}/${config.area}`)
      .then((res) => {
        setIsLoading(false);
        setAreas(res.data);
      })

      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleClickSignUp = () => {
    axios
      .get(`${config.baseUrl}/${config.users}`)
      .then((res) => {
        const users = res.data;

        const emailExists = users.some((user) => user.email === email);
        if (emailExists) {
          toast.error("Email already exists! please login");
          return;
        }

        if (password !== confirmPassword) {
          toast.error("Password and confirm password do not match!");
          return;
        }

        let newId;
        do {
          newId = Math.floor(Math.random() * 1000000);
        } while (users.some((user) => user.id === newId.toString()));

        function getRandomNumber(min = 900, max = 15000) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const data = {
          id: newId.toString(),
          name,
          email,
          phone,
          city: selectedArea,
          type: selectUserType,
          password,
          orders: [],
          image: "/assets/Images/avatarUser.jpg",
          balance: getRandomNumber(),
        };
        axios
          .post(`${config.baseUrl}/${config.users}`, data)
          .then((res) => {
            toast.success(res.data);
            localStorage.setItem("token", newId);
            setName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setConfirmPassword("");
            setSelectedArea("");
            setSelectUserType("");
            setError(false);
          })
          .catch((err) => {
            console.log(err);
            toast.error("Failed to register user.");
            setError(true);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to fetch users.");
      });
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
            <p>name</p>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <div className="area">
              <div
                className="select-area"
                onClick={() => setIsOpen1((prev) => !prev)}
              >
                <p>{selectedArea || "Select Area"}</p>
                <button type="button">
                  {!isOpen1 ? (
                    <IoIosArrowDown className="file-type" />
                  ) : (
                    <IoIosArrowUp className="file-type" />
                  )}
                </button>
              </div>
              {isOpen1 && (
                <div className="popup">
                  <ul>
                    {areas.map((e) => (
                      <li
                        key={e.id}
                        onClick={() => {
                          setSelectedArea(e.street);
                          setIsOpen1((prev) => !prev);
                        }}
                      >
                        <a>
                          <span>{e.street}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="user-type">
              <div
                className="select-user-type"
                onClick={() => setIsOpen2((prev) => !prev)}
              >
                <p>{selectUserType || "Select User Type"}</p>
                <button type="button">
                  {!isOpen2 ? (
                    <IoIosArrowDown className="file-type" />
                  ) : (
                    <IoIosArrowUp className="file-type" />
                  )}
                </button>
              </div>
              {isOpen2 && (
                <div className="popup">
                  <ul>
                    <li
                      onClick={() => {
                        setSelectUserType("Customer");
                        setIsOpen2((prev) => !prev);
                      }}
                    >
                      <a>
                        <span>Customer</span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        setSelectUserType("Designer");
                        setIsOpen2((prev) => !prev);
                      }}
                    >
                      <a>
                        <span>Designer</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
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
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={error ? "input-error" : ""}
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showPassword)}
              >
                {showConfirmPassword ? (
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

            <button
              className="sign-up-btn"
              type="submit"
              onClick={handleClickSignUp}
            >
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
// }
export default SignUp;
