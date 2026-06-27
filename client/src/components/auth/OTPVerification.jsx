import { useRef, useState } from "react";
import "./OTPVerification.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OTP_LENGTH = 6;

export default function OTPVerification() {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(!location?.state && !location?.state?.email) {
      navigate("/forgot-password");
    }
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasteData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pasteData) return;

    const newOtp = [...otp];

    pasteData.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const lastIndex = Math.min(pasteData.length - 1, OTP_LENGTH - 1);
    inputRefs.current[lastIndex].focus();
  };

  const verifyOTP = () => {
    const code = otp.join("");

    if (code.length !== OTP_LENGTH) {
      alert("Please enter complete OTP");
      return;
    }

    console.log(code);
    alert(`OTP: ${code}`);
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2>OTP Verification</h2>

        <p>
          Enter the 6-digit code sent to
          <br />
          <span>example@email.com</span>
        </p>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
            />
          ))}
        </div>

        <button onClick={verifyOTP}>Verify OTP</button>

        <div className="resend">
          Didn't receive the code?
          <button>Resend</button>
        </div>
      </div>
    </div>
  );
}