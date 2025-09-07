import './UserProfile.css'
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { BsWallet2 } from "react-icons/bs";
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

 
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className='profile-holder'>
      <div className='profile-container'>
        <h3>My Profile</h3>
        <div className='profile-img-container'>
          <div className="image-wrapper">
            <img 
              className='user-image' 
              src={selectedImage || "/assets/Images/avatar.png"} 
              alt="user avatar"
            />
            <label htmlFor="fileInput" className="edit-icon">
              <TbEdit />
            </label>
            <input 
              id="fileInput" 
              type="file" 
              accept="image/*" 
              style={{ display: "none" }} 
              onChange={handleImageChange} 
            />
          </div>
          <p>Johe smith</p>
        </div>

        <div className="user-profile-info">
          <div className='email-profile profile-sps-info'>
            <div className='icon-title'>
              <AiOutlineMail />
              <p>Email</p>
            </div>
            <p>Johesmith@gmail.com</p>
          </div>

          <div className='phone-profile profile-sps-info '>
            <div className='icon-title'>
              <LuPhone />
              <p>Phone</p>
            </div>
            <p>+963988136449</p>
          </div>

          <div className='area-profile profile-sps-info'>
            <div className='icon-title'>
              <GrLocation />
              <p>Area</p>
            </div>
            <p>New York, USA</p>
          </div>

          <div className='balancy-profile profile-sps-info'>
            <div className='icon-title'>
              <BsWallet2 />
              <p>Balance</p>
            </div>
            <p>0 $</p>
          </div>
            <div className='update-pass-btn'><button className="change-pass-btn-profile" onClick={() => setIsOpen(true)}>Change Password</button></div> 

          {isOpen && (
            <div className="popup-overlay">
              <div className="popup-box-profile">
                <button onClick={() => setIsOpen(false)}><IoCloseOutline /></button>
                <div className='password-header'>
                  <h4>Change Your Password</h4>
                </div>

                <div>
                  <label>Your Email</label>
                  <input type='email' />
                </div>

                
                <div className="password-input">
                  <label>Old Password</label>
                  <div className="input-wrapper">
                    <input 
                      type={showOldPass ? "text" : "password"} 
                    />
                    <span 
                      className="eye-icon" 
                      onClick={() => setShowOldPass(!showOldPass)}
                    >
                      {showOldPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  </div>
                </div>

              
                <div className="password-input">
                  <label>New Password</label>
                  <div className="input-wrapper">
                    <input 
                      type={showNewPass ? "text" : "password"} 
                    />
                    <span 
                      className="eye-icon" 
                      onClick={() => setShowNewPass(!showNewPass)}
                    >
                      {showNewPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  </div>
                </div>

              
                <div className="password-input">
                  <label>Confirm Password</label>
                  <div className="input-wrapper">
                    <input 
                      type={showConfirmPass ? "text" : "password"} 
                    />
                    <span 
                      className="eye-icon" 
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                    >
                      {showConfirmPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  </div>
                </div>

                <div className='update-pass-btn'>
                  <button>Update Password</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
