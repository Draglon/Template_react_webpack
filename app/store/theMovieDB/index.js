import { combineReducers } from 'redux';

import accessLogic from './auth/access.logic';
import { createList } from './list/list.logic';

import accessReducers from './auth/access.reducers';
import listReducers from './list/list.reducers';

export const rootLogic = [accessLogic, createList];

export const reducers = combineReducers({
  access: accessReducers,
  list: listReducers,
});
