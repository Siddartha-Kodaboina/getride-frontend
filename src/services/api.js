import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const AUTH_TOKEN = 'dev-token-12345';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AUTH_TOKEN}`
  }
});

// Ride Request APIs
export const rideRequestAPI = {
  create: (data) => apiClient.post('/api/ride-requests', data),
  getAll: (params) => apiClient.get('/api/ride-requests', { params }),
  getById: (id) => apiClient.get(`/api/ride-requests/${id}`),
  update: (id, data) => apiClient.put(`/api/ride-requests/${id}`, data),
  delete: (id) => apiClient.delete(`/api/ride-requests/${id}`)
};

// Offer APIs (placeholder - need to implement backend)
export const offerAPI = {
  create: (data) => apiClient.post('/api/offers', data),
  getByRideRequest: (rideRequestId) => apiClient.get(`/api/offers/ride-request/${rideRequestId}`),
  accept: (id) => apiClient.put(`/api/offers/${id}/accept`),
  reject: (id) => apiClient.put(`/api/offers/${id}/reject`)
};

export default apiClient;
