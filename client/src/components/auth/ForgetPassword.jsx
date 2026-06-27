import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./ForgotPassword.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPasswordThunk } from "../../features/auth/authThunks";


const ForgotPassword = () => {
    const dispatch = useDispatch();
      const navigate = useNavigate();
  const [email, setEmail] = useState("");
 const handleSubmit = async (e) => {
  e.preventDefault();

  const resultAction = await dispatch(
    forgotPasswordThunk({
      email,
    })
  );

  if (forgotPasswordThunk.fulfilled.match(resultAction)) {
    navigate("/otp-verification", {
      state: {
        email,
      },
    });
  }

  // Optional: Handle error
  if (forgotPasswordThunk.rejected.match(resultAction)) {
    console.log(resultAction.payload);
  }
};
  return (
   <div>
    <Navbar />
     <div className="forgot-container">
      <div className="forgot-card">
        <h1>Forgot Password?</h1>
        <p>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <form onSubmit={handleSubmit} className="forgot-form">
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
               value={email}
        onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="forgot-btn">
            Send Reset Link
          </button>

          <p className="back-login">
            Remember your password? <a href="/login">Back to Login</a>
          </p>
        </form>
      </div>
    </div>
   </div>
  );
};

export default ForgotPassword;