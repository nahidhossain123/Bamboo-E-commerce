import Navbar from "../navbar/Navbar";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password request
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
            />
          </div>

          <button type="submit" className="forgot-btn">
            Send Reset Link
          </button>

          <p className="back-login">
            Remember your password? <a href="/">Back to Login</a>
          </p>
        </form>
      </div>
    </div>
   </div>
  );
};

export default ForgotPassword;