import { useState } from "react";
import { useNavigate } from "react-router";
import OTPInput from "./OTPInput";
import "./UpdatePasswordCard.css";

const OTPSend = () => {
  const [isComplete, setIsComplete] = useState(false);
  const otpCodeLength = [1, 2, 3, 4];
  const navigate = useNavigate();
  return (
    <form>
      <div className="inputs-holder">
        {otpCodeLength.map((num) => (
          <OTPInput key={num} setIsComplete={setIsComplete} />
        ))}
      </div>
      <div className="setting">
        <p className="counter">00:00</p>
        <p className="resend-holder">
          code not send ? <button>Resend</button>
        </p>
      </div>
      <input
        className={isComplete ? "password-btn" : "password-btn disabled"}
        type="submit"
        value="Get OTP"
        onClick={() => navigate("/updatePassword/change")}
      />
    </form>
  );
};

export default OTPSend;
