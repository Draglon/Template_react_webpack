import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { createLogic } from 'redux-logic';
import { themoviedb, apiKey } from '../../../etc/config.json';

import {
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
} from '../../constants/movie.constants';

const url = `${themoviedb}/search/movie`;

const getSearchMovie = createLogic({
  type: SEARCH_MOVIE_REQUEST,

  process({ getState, action }, dispatch, done) {
    const { query, page } = action.payload;
    axios
      .get(`${url}?query=${query}&page=${page}&api_key=${apiKey}`, { adapter: jsonpAdapter })
      .then(response => response)
      .then(response => dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: response.data }))
      .catch(error => dispatch({ type: SEARCH_MOVIE_FAILURE, payload: error, error: true }))
      .then(() => done());
  },
});

export default getSearchMovie;
