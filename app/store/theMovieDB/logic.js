import { createSessionLogic, deleteSessionLogic } from './login/logic';
import profileLogic from './profile/logic';
import trendingLogic from './trending/logic';
import searchLogic from './search/logic';
import movieLogic from './movie/logic';
import { myListsLogic, createList, deleteListLogic } from './myLists/logic';
import { favoriteLogic, addToFavoriteLogic } from './favorite/logic';
import { watchlistLogic, addToWatchlistLogic } from './watchlist/logic';

export default [
  profileLogic,
  createSessionLogic,
  deleteSessionLogic,
  createList,
  trendingLogic,
  searchLogic,
  movieLogic,
  myListsLogic,
  deleteListLogic,
  favoriteLogic,
  addToFavoriteLogic,
  watchlistLogic,
  addToWatchlistLogic,
];
