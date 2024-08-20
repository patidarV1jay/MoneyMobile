import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ssmpay.com/dashboard/public/api/',
  validateStatus: function (status) {
    return status >= 200 && status < 300; //
  },
  headers: {
    // 'User-Agent': 'PostmanRuntime/7.30.1',
    // Accept: '/',
    // 'Accept-Encoding': 'gzip,deflate,br',
    // Connection: 'keep-alive',
    'X-Api-Token': '734g123fhhdxg527831v787d6163k3',
  },
});

export default axiosInstance;
