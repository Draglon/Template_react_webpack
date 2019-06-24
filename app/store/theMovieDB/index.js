import { combineReducers } from 'redux';

import accessLogic from './auth/logic';
import { createList } from './list/logic';

import { authAccessReducer, sessionAccessReducer } from './auth/reducers';
import { createListReducer } from './list/reducers';

export const rootLogic = [accessLogic, createList];

export const reducers = combineReducers({
  access: authAccessReducer,
  login: sessionAccessReducer,
  list: createListReducer,
});
