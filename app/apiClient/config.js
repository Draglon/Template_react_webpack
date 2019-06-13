import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  params: {
    apiKey: '373ab70129f36fd1f65b6d7b24ec2641',
  },
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  },
});

export default instance;
