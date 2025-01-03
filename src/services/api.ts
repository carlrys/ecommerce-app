import axios from 'axios';

const API = axios.create({
  baseURL: 'https://your-backend-api.com', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// export const fetchProducts = async () => {
//   const response = await API.get('/products');
//   return response.data;
// };

// Add more API functions as needed (e.g., fetching product details, adding to cart, etc.)
