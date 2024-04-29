import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:3000", // Your API base URL here
  headers: {
    "Content-Type": "application/json",
  },
});

axiosBase.interceptors.request.use(
  (config) => {
    document.cookie = "MyCookie=Hello";
    const token = localStorage.getItem("accessToken"); // Access token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors globally
axiosBase.interceptors.response.use(
  (response) => {
    console.log("Interceptor Response: ", response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // mark it so that we don't try infinitely
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("https://api.escuelajs.co/api/v1/auth/refresh-token", {
          refreshToken,
        }); // Your refresh token endpoint
        if (response.status === 200) {
          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken); // Save new token
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return axiosBase(originalRequest); // Retry the original request with new token
        }
      } catch (refreshError) {
        console.error("Unable to refresh token:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosBase;
