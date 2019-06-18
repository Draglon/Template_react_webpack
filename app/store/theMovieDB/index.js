import { combineReducers } from 'redux';

import accessLogic from './auth/access.logic';
import { createList } from './list/list.logic';

import authAccessReducer from './auth/access.reducers';
import { createListReducer } from './list/list.reducers';

export const rootLogic = [accessLogic, createList];

export const reducers = combineReducers({
  access: authAccessReducer,
  list: createListReducer,
});
