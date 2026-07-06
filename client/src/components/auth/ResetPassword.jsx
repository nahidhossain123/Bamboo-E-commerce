import { useState } from "react";
import "./ResetPassword.css";
import { resetPasswordThunk } from "../../features/auth/authThunks";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
 const location = useLocation();
  const email = location?.state?.email;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    await dispatch(
      resetPasswordThunk({
        email,
        newPassword: formData.password,
        confirmPassword: formData.confirmPassword,
      })
    ).unwrap();

    navigate("/login");
  } catch (error) {
    console.error(error);
    alert(error?.message || "Failed to reset password");
  }
};

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2>Create New Password</h2>

        <p>
          Your new password must be different from your previous password.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>New Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;