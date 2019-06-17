import { combineReducers } from 'redux';

import accessLogic from './auth/access.logic';
import listLogic from './list/list.logic';

import accessReducers from './auth/access.reducers';
import listReducers from './list/list.reducers';

export const rootLogic = [accessLogic, listLogic];

export const reducers = combineReducers({
  access: accessReducers,
  list: listReducers,
});
