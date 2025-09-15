import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import config from "../../Constants/enviroment";
import "./UserProfile.css";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { BsWallet2 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";

const UserProfile = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const userID = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${config.baseUrl}/${config.users}/${token}`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.error(err));

    axios
      .get(`${config.baseUrl}/${config.users}/${userID}`)
      .then((res) => setCurrentUser(res.data))
      .catch((err) => console.log(err));
  }, [userID]);

  const { id, image, email, name, orders, city, phone, type, balance } = currentUser;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="profile-holder">
      <div className="profile-container">
        <h3>{t("userProfile.myProfile")}</h3>
        <div className="profile-img-container">
          <div className="image-wrapper">
            <img className="user-image" src={selectedImage || image} alt="user avatar" />
            <label htmlFor="fileInput" className="edit-icon">
              <TbEdit />
            </label>
            <input id="fileInput" type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
          </div>
          <div className="name-info">
            <p className="name">{userData?.name || name || t("userProfile.userName")}</p>
            <p className="type">{type}</p>
          </div>
        </div>

        <div className="user-profile-info">
          <div className="email-profile profile-sps-info">
            <div className="icon-title">
              <AiOutlineMail />
              <p>{t("userProfile.email")}</p>
            </div>
            <p>{userData?.email || email || "Loading..."}</p>
          </div>

          <div className="phone-profile profile-sps-info">
            <div className="icon-title">
              <LuPhone />
              <p>{t("userProfile.phone")}</p>
            </div>
            <p>{phone ? `+963${phone}` : "Loading..."}</p>
          </div>

          <div className="area-profile profile-sps-info">
            <div className="icon-title">
              <GrLocation />
              <p>{t("userProfile.area")}</p>
            </div>
            <p>{city || "Loading..."}</p>
          </div>

          <div className="balancy-profile profile-sps-info">
            <div className="icon-title">
              <BsWallet2 />
              <p>{t("userProfile.balance")}</p>
            </div>
            <p>{balance || userData?.balance ? `${balance || userData.balance} $` : "0 $"}</p>
          </div>

          <div className="update-pass-btn">
            <button className="change-pass-btn-profile" onClick={() => setIsOpen(true)}>
              {t("userProfile.changePasswordBtn")}
            </button>
          </div>

          {isOpen && (
            <div className="popup-overlay">
              <div className="popup-box-profile">
                <button onClick={() => setIsOpen(false)}>
                  <IoCloseOutline />
                </button>
                <div className="password-header">
                  <h4>{t("userProfile.changePasswordPopupTitle")}</h4>
                </div>

                <div>
                  <label>{t("userProfile.yourEmail")}</label>
                  <input type="email" value={userData?.email || ""} readOnly />
                </div>

                <div className="password-input">
                  <label>{t("userProfile.oldPassword")}</label>
                  <div className="input-wrapper">
                    <input type={showOldPass ? "text" : "password"} />
                    <span className="eye-icon" onClick={() => setShowOldPass(!showOldPass)}>
                      {showOldPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  </div>
                </div>

                <div className="password-input">
                  <label>{t("userProfile.newPassword")}</label>
                  <div className="input-wrapper">
                    <input type={showNewPass ? "text" : "password"} />
                    <span className="eye-icon" onClick={() => setShowNewPass(!showNewPass)}>
                      {showNewPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  </div>
                </div>

                <div className="password-input">
                  <label>{t("userProfile.confirmPassword")}</label>
                  <div className="input-wrapper">
                    <input type={showConfirmPass ? "text" : "password"} />
                    <span className="eye-icon" onClick={() => setShowConfirmPass(!showConfirmPass)}>
                      {showConfirmPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  </div>
                </div>

                <div className="update-pass-btn">
                  <button>{t("userProfile.updatePasswordBtn")}</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
