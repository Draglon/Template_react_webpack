import { combineReducers } from 'redux';

import { loginReducer } from './login/reducers';
import { profileReducer } from './profile/reducers';
import { createListReducer } from './list/reducers';
import { searchReducer } from './search/reducers';
import { trendingReducer } from './trending/reducers';
import { movieReducer } from './movie/reducers';

import { dataReducer } from './data/reducers';

export default combineReducers({
  profile: profileReducer,
  login: loginReducer,
  list: createListReducer,
  trending: trendingReducer,
  search: searchReducer,
  movie: movieReducer,
  data: dataReducer,
});
