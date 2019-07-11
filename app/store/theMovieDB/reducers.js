import { combineReducers } from 'redux';

import { loginReducer } from './login/reducers';
import { profileReducer } from './profile/reducers';
import { searchReducer } from './search/reducers';
import { trendingReducer } from './trending/reducers';
import { movieReducer } from './movie/reducers';
import { createFavoriteListReducer, addToFavoriteReducer } from './favorite/reducers';
import { createWatchlistListReducer, addToWatchlistReducer } from './watchlist/reducers';
import {
  createdListsReducer,
  createListReducer,
  detailsListReducer,
  deleteListReducer,
  clearListReducer,
  addMovieListReducer,
  removeMovieListReducer,
  checkMovieListReducer,
} from './myLists/reducers';

import { dataReducer } from './data/reducers';

export default combineReducers({
  login: loginReducer,
  profile: profileReducer,
  trending: trendingReducer,
  search: searchReducer,
  movie: movieReducer,
  favoriteList: createFavoriteListReducer,
  addToFavorite: addToFavoriteReducer,
  watchlist: createWatchlistListReducer,
  addToWatchlist: addToWatchlistReducer,
  lists: createdListsReducer,
  list: createListReducer,
  detailsList: detailsListReducer,
  deleteList: deleteListReducer,
  clearList: clearListReducer,
  addMovieList: addMovieListReducer,
  removeMovieList: removeMovieListReducer,
  checkMovieList: checkMovieListReducer,
  data: dataReducer,
});
