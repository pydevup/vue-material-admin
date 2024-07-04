import axios from 'axios';
import { router } from '@/router';
import { useUserStore, useSnackbarStore } from '@/store';

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use((config) => {
  const userStore = useUserStore();
  const token = userStore.getAccessToken;
  // Get request headers and if headers is undefined assign blank object
  config.headers = config.headers || {};
  // Set authorization header
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  // Return modified config
  return config;
});

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error.response.status;
    const userStore = useUserStore();
    const snackbarStore = useSnackbarStore();
    switch (statusCode) {
      case 401:
        userStore.setToken('');
        userStore.setPermissions([]);
        // If 401 response returned from api
        router.push('/auth/login');
        break;
      case 400:
        snackbarStore.showMessage('Auth Failed');
        break;
      case 409:
        const { data } = error.response
        snackbarStore.showMessage(data.errorMessage);
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosIns;
