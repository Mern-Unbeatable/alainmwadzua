import axios from 'axios';
import { API_CONFIG } from '../config';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const locale = localStorage.getItem('locale') || 'en';
    config.headers['Accept-Language'] = locale;

    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    const attempt = originalRequest._retryCount ?? 0;
    const isRetryable = !error.response || error.response.status >= 500;
    if (isRetryable && attempt < API_CONFIG.RETRY_ATTEMPTS) {
      originalRequest._retryCount = attempt + 1;
      await sleep(API_CONFIG.RETRY_DELAY * originalRequest._retryCount);
      return axiosInstance(originalRequest);
    }

    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    }

    if (error.response?.status === 403) {
      console.error('Access Forbidden:', error.response.data);
    }

    if (error.response?.status >= 500) {
      console.error('Server Error:', error.response.data);
    }

    if (!error.response) {
      console.error('Network Error:', error.message);
    }

    return Promise.reject({
      message:
        error.response?.data?.message || error.message || 'An error occurred',
      status: error.response?.status,
      data: error.response?.data,
    });
  },
);

export default axiosInstance;
