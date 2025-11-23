import axios from 'axios';

// ← BURAYI DEĞİŞTİR! Render'dan aldığın tam URL
const API_BASE = 'https://productivity-dashboard-q9xr.onrender.com'; // örnek

export const api = axios.create({
  baseURL: API_BASE,
});