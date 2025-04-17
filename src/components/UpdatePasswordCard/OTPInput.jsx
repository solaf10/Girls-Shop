import { useState } from "react";
import "./UpdatePasswordCard.css";

const OTPInput = ({ setIsComplete }) => {
  const [otpNum, setOtpNum] = useState("");
  if (otpNum) {
    setIsComplete(true);
  } else {
    setIsComplete(false);
  }
  return (
    <input
      type="text"
      value={otpNum}
      onChange={(e) => setOtpNum(e.target.value)}
      style={{
        borderColor: otpNum ? "var(--primary-color)" : "#66666",
      }}
    />
  );
};

export default OTPInput;
