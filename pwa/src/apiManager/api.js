// src/api/api.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3003/api/job', // Replace with your API base URL
});

// You can add request interceptors to handle common tasks like adding tokens to headers
api.interceptors.request.use((config) => {
  // Example: Add authorization token if available
  const userInfo = localStorage.getItem('userInfo');
  const token = userInfo.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;