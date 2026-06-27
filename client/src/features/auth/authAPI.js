import axiosInstance from "../../services/axios";

export const loginAPI = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const registerAPI = async (data) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};

export const logoutAPI = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

export const getProfileAPI = async () => {
  const response = await axiosInstance.get("/auth/profile");
  return response.data;
};