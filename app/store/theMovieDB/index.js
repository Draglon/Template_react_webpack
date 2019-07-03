import { combineReducers } from 'redux';

import { createSessionLogic, deleteSessionLogic } from './login/logic';
import accountLogic from './account/logic';
import { createList } from './list/logic';
import trendingLogic from './trending/logic';
import searchLogic from './search/logic';
import movieLogic from './movie/logic';

import { loginReducer } from './login/reducers';
import { profileReducer } from './account/reducers';
import { createListReducer } from './list/reducers';
import { searchReducer } from './search/reducers';
import { trendingReducer } from './trending/reducers';
import { movieReducer } from './movie/reducers';

import { dataReducer } from './data/reducers';

export const rootLogic = [
  accountLogic,
  createSessionLogic,
  deleteSessionLogic,
  createList,
  trendingLogic,
  searchLogic,
  movieLogic,
];

export const reducers = combineReducers({
  account: profileReducer,
  login: loginReducer,
  list: createListReducer,
  trending: trendingReducer,
  search: searchReducer,
  movie: movieReducer,
  data: dataReducer,
});
