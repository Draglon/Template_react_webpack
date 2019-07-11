import { createSessionLogic, deleteSessionLogic } from './login/logic';
import profileLogic from './profile/logic';
import trendingLogic from './trending/logic';
import searchLogic from './search/logic';
import { movieLogic } from './movie/logic';
import { favoriteLogic, addToFavoriteLogic } from './favorite/logic';
import { watchlistLogic, addToWatchlistLogic } from './watchlist/logic';
import {
  myListsLogic,
  createList,
  detailsListLogic,
  deleteListLogic,
  addMovieListLogic,
  removeMovieListLogic,
} from './myLists/logic';

export default [
  profileLogic,
  createSessionLogic,
  deleteSessionLogic,
  trendingLogic,
  searchLogic,
  movieLogic,
  favoriteLogic,
  addToFavoriteLogic,
  watchlistLogic,
  addToWatchlistLogic,
  myListsLogic,
  createList,
  detailsListLogic,
  deleteListLogic,
  addMovieListLogic,
  removeMovieListLogic,
];
