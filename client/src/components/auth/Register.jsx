import Navbar from "../navbar/Navbar";
import "./Register.css";

const Register = () => {
  return (
    <div>
        <Navbar />
        <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Join us and get started today</p>

        <form className="register-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;