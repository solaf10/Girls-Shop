import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import OTPInput from "./OTPInput";
import "./UpdatePasswordCard.css";

const OTPSend = () => {
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
          code not send ? <button type="button">Resend</button>
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
