import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

instance.interceptors.request.use(config => {
  config.params = {
    api_key: '373ab70129f36fd1f65b6d7b24ec2641',
  };
  config.paramsSerializer = params => qs.stringify(params);
  return config;
});

export default instance;
