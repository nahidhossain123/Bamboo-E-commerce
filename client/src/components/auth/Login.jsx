import Navbar from "../navbar/Navbar";
import "./Login.css";

const Login = () => {
  return (
    <div>
        <Navbar />
        <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Sign in to your account</p>

        <form className="login-form">
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
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;