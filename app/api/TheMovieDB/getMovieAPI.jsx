import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { themoviedb, apiKey } from '../../etc/config.json';

const url = `${themoviedb}/discover/movie`;

const getMovieAPI = page =>
  axios
    .get(`${url}?page=${page}&api_key=${apiKey}`, { adapter: jsonpAdapter })
    .then(response => response)
    .catch(error => Promise.reject(error));

export default getMovieAPI;
