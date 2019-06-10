import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { themoviedb, apiKey } from '../../etc/config.json';

const url = `${themoviedb}/movie/`;

const getReviewMovieAPI = reviewId =>
  axios
    .get(`${url}${reviewId}?api_key=${apiKey}`, { adapter: jsonpAdapter })
    .then(response => response)
    .catch(error => Promise.reject(error));

export default getReviewMovieAPI;
