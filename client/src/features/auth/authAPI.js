import axiosInstance from "../../services/axios";

export const loginAPI = async (data) => {
 const response = await axiosInstance.post("/user/login", data);
  return response.data;
};

export const registerAPI = async (data) => {
 const response = await axiosInstance.post("/user/register", data);
  return response.data;
};


// Forgot Password (Send OTP)
export const forgotPasswordAPI = async (data) => {
  const response = await axiosInstance.post("/user/forgot-password", data);
  return response.data;
};

// Verify OTP
export const verifyForgotPasswordOtpAPI = async (data) => {
  const response = await axiosInstance.post("/user/verify-forgot-password-otp", data);
  return response.data;
};

// Reset Password
export const resetPasswordAPI = async (data) => {
  const response = await axiosInstance.post("/user/reset-password", data);
  return response.data;
};

export const logoutAPI = async () => {
  const response = await axiosInstance.post("/user/logout");
  return response.data;
};

export const getProfileAPI = async () => {
  const response = await axiosInstance.get("/user/profile");
  return response.data;
};
export const refreshTokenAPI = async (data) => {
  const response = await axiosInstance.post("/user/refresh-token", data);
  return response.data;
};