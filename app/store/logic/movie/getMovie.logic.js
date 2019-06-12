import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { createLogic } from 'redux-logic';
import { themoviedb, apiKey } from '../../../etc/config.json';

import { MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE } from '../../constants/movie.constants';

const url = `${themoviedb}/discover/movie`;

const getMovie = createLogic({
  type: MOVIE_REQUEST,

  process({ getState, action }, dispatch, done) {
    axios
      .get(`${url}?page=${action.payload}&api_key=${apiKey}`, { adapter: jsonpAdapter })
      .then(response => response)
      .then(response => dispatch({ type: MOVIE_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: MOVIE_FAILURE, payload: error, error: true }))
      .then(() => done());
  },
});

export default getMovie;
