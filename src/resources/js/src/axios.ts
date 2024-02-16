import axios from 'axios';

// export const baseURL = 'http://localhost/api/spanel'
export const baseURL = '/api/spanel'
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;
