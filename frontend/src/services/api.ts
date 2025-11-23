import axios from 'axios';

const API_BASE = 'https://productivity-dashboard-q9xr.onrender.com'; // Senin URL

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});