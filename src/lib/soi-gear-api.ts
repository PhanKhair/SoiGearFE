import { IRefreshTokenResponse } from "@/contexts/AuthContext";
import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_PUBLIC_API_URL || "";
const apiVersion = import.meta.env.VITE_REACT_PUBLIC_API_VERSION || "";

const soiGearAPI = axios.create({
  baseURL: `${apiUrl}/${apiVersion}`,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

soiGearAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

soiGearAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return soiGearAPI(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        const res = await soiGearAPI.post<IRefreshTokenResponse>(
          "/auth/refresh-token", // đường dẫn đã đúng theo ảnh
          {
            accessToken,
            refreshToken,
          },
        );

        const { accessToken: newToken } = res.data.data;

        localStorage.setItem("accessToken", newToken);
        soiGearAPI.defaults.headers.common["Authorization"] =
          `Bearer ${newToken}`;
        processQueue(null, newToken);

        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return soiGearAPI(originalRequest);
      } catch (err) {
        processQueue(err, null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default soiGearAPI;
