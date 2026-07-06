import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;


axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async(error) => {
    let originRequest = error.config;
    if (error.response && error.response.status === 401 && !originRequest.retry) {
      originRequest.retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      if(refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);
        if (newAccessToken) {
          originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originRequest);
        }
      }
    } 

    return Promise.reject(error);
  },
);


const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axiosInstance.post("/user/refresh-token", {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      },
    });
    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
}

