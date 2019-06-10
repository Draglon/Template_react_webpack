import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { themoviedb, apiKey } from '../../etc/config.json';

const url = `${themoviedb}/search/movie`;

const getSearchMovieAPI = payload =>
  axios
    .get(`${url}?query=${payload.query}&page=${payload.page}&api_key=${apiKey}`, {
      adapter: jsonpAdapter,
    })
    .then(response => response)
    .catch(error => Promise.reject(error));

export default getSearchMovieAPI;
