import axios from 'axios';

// ← BURAYI DEĞİŞTİR! Render'dan aldığın tam URL
const API_BASE = 'https://productivity-dashboard-1.onrender.com'; // örnek

export const api = axios.create({
  baseURL: API_BASE,
});