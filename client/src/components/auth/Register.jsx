import { useState } from "react";
import { validate, validateRegister } from "../../utils/validation/registerValidation";
import Navbar from "../navbar/Navbar";
import "./Register.css";
import {  registerThunk } from "../../features/auth/authThunks";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading, selectSuccess } from "../../features/auth/authSelectors";

const Register = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const success = useSelector(selectSuccess);

console.log(loading,error,success);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const [errors, setErrors] = useState({});


    const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validateRegister(formData);

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  dispatch(
    registerThunk({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    })
  );
};

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};
  return (
    <div>
        <Navbar />
        <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Join us and get started today</p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
             className={errors.name ? "error-input" : ""}
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
  <small className="error">{errors.name}</small>
)}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
             className={errors.email ? "error-input" : ""}
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
  <small className="error">{errors.email}</small>
)}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
             className={errors.password ? "error-input" : ""}
              type="password"
              placeholder="Create a password"
              name="password"
              value={formData.password}
              onChange={handleChange}   
            />
            {errors.password && (
  <small className="error">{errors.password}</small>
)}
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
             className={errors.confirmPassword ? "error-input" : ""}
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
           {errors.confirmPassword && (
  <small className="error">
    {errors.confirmPassword}
  </small>
)}
          </div>
 {error && <p className="server-error">{error}</p>}
 {success && (
  <p className="success-message">
    {success}
  </p>
)}
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