import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    apiKey: '373ab70129f36fd1f65b6d7b24ec2641',
  },
  paramsSerializer: params => {
    return qs.stringify(params);
  },
});

export default instance;
