import { combineReducers } from 'redux';

import { loginReducer } from './login/reducers';
import { profileReducer } from './profile/reducers';
import { searchReducer } from './search/reducers';
import { trendingReducer } from './trending/reducers';
import { movieReducer } from './movie/reducers';
import { createdListsReducer, createListReducer, deleteListReducer } from './myLists/reducers';

import { dataReducer } from './data/reducers';

export default combineReducers({
  login: loginReducer,
  profile: profileReducer,
  trending: trendingReducer,
  search: searchReducer,
  movie: movieReducer,
  lists: createdListsReducer,
  list: createListReducer,
  deleteList: deleteListReducer,
  data: dataReducer,
});
