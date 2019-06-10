import { combineReducers } from 'redux';

import movie from './movie';
import searchMovie from './searchMovie';

export default combineReducers({
  movie,
  searchMovie,
});
