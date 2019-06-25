import { combineReducers } from 'redux';

import { createSessionLogic, deleteSessionLogic } from './auth/logic';
import accountLogic from './account/logic';
import { createList } from './list/logic';

import { loginReducer } from './auth/reducers';
import { profileReducer } from './account/reducers';
import { createListReducer } from './list/reducers';

export const rootLogic = [
  accountLogic,
  createSessionLogic,
  deleteSessionLogic,
  createList,
];

export const reducers = combineReducers({
  account: profileReducer,
  access: loginReducer,
  list: createListReducer,
});
