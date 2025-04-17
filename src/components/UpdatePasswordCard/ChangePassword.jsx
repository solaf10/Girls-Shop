import "./UpdatePasswordCard.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPaswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmationShow, setIsConfirmationShow] = useState(false);
  const navigate = useNavigate();
  return (
    <form>
      <div className="new-password password-holder">
        <label htmlFor="new-password">
          <span className="label-text">Password</span>
          <div className="show-password-holder">
            <span>{isPaswordShow ? "Hide" : "Show"}</span>
            <div
              className="icon-holder"
              onClick={() => setIsPasswordShow((prev) => !prev)}
            >
              {isPaswordShow ? (
                <AiFillEye className="show-password-icon" />
              ) : (
                <AiFillEyeInvisible className="show-password-icon" />
              )}
            </div>
          </div>
        </label>
        <input
          type={isPaswordShow ? "text" : "password"}
          placeholder="********"
          id="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="password-holder password-confirmation-holder">
        <label htmlFor="password-confirmation">
          <span className="label-text">Confirm Password</span>
          <div className="show-password-holder">
            <span>{isConfirmationShow ? "Hide" : "Show"}</span>
            <div
              className="icon-holder"
              onClick={() => setIsConfirmationShow((prev) => !prev)}
            >
              {isConfirmationShow ? (
                <AiFillEye className="show-password-icon" />
              ) : (
                <AiFillEyeInvisible className="show-password-icon" />
              )}
            </div>
          </div>
        </label>
        <input
          type={isConfirmationShow ? "text" : "password"}
          placeholder="********"
          id="password-confirmation"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <input
        className={
          password && confirmPassword ? "password-btn" : "password-btn disabled"
        }
        type="submit"
        value="Change"
        onClick={() => navigate("/updatePassword/changed")}
      />
    </form>
  );
};

export default ChangePassword;
