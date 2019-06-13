import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  crossDomain: true,
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    // Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true,
    // 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    // 'Access-Control-Allow-Headers':
    // 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    // 'Access-Control-Allow-Origin': 'http://localhost:8080',
    // 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
    // 'Access-Control-Allow-Headers': 'Content-Type,Accept',
  },
  params: {
    apiKey: '373ab70129f36fd1f65b6d7b24ec2641',
  },
  paramsSerializer: params => {
    return qs.stringify(params);
  },
  responseType: 'json',
});

export default instance;
