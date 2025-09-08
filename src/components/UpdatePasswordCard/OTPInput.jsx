import { useState, useRef } from "react";
import "./UpdatePasswordCard.css";

const OTPInput = ({ index, inputsRefs, setIsComplete }) => {
  const [otpNum, setOtpNum] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      setOtpNum(value);

      if (value && index < inputsRefs.current.length - 1) {
        inputsRefs.current[index + 1].focus();
      }

      const allFilled = inputsRefs.current.every((input) => input.value !== "");
      setIsComplete(allFilled);
    }
  };

  return (
    <input
      type="number"
      required
      maxLength={1}
      value={otpNum}
      ref={(el) => (inputsRefs.current[index] = el)}
      onChange={handleChange}
      style={{
        borderColor: otpNum ? "var(--primary-color)" : "#66666",
      }}
    />
  );
};

export default OTPInput;
