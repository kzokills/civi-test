import axios from 'axios';

const api = axios.create({
  baseURL: 'http://YOUR_IP_ADDRESS_HERE:3000',
});

export default api;
