import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import OTPInput from "./OTPInput";
import "./UpdatePasswordCard.css";
import { useTranslation } from "react-i18next";

const OTPSend = () => {
  const {t} = useTranslation();
  const [isComplete, setIsComplete] = useState(false);
  const inputsRefs = useRef([]);
  const otpCodeLength = [0, 1, 2, 3]; // 4 inputs
  const navigate = useNavigate();

  return (
    <form>
      <div className="inputs-holder">
        {otpCodeLength.map((num, i) => (
          <OTPInput
            key={i}
            index={i}
            inputsRefs={inputsRefs}
            setIsComplete={setIsComplete}
          />
        ))}
      </div>
      <div className="setting">
        <p className="counter">00:00</p>
        <p className="resend-holder">
          {t(`OTPSend.code not send ?`)} <button type="button">{t(`OTPSend.Resend`)}</button>
        </p>
      </div>
      <input
        className={isComplete ? "password-btn" : "password-btn disabled"}
        type="submit"
        value="Get OTP"
        onClick={(e) => {
          e.preventDefault();
          if (isComplete) navigate("/updatePassword/change");
        }}
      />
    </form>
  );
};

export default OTPSend;
