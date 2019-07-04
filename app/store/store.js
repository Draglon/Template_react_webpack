import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from 'redux-logic';

import apiClient from '../apiClient/client';
import rootLogic from './theMovieDB/logic';
import reducers from './theMovieDB/reducers';

const logicMiddleware = createLogicMiddleware(rootLogic, {
  apiClient,
});

const middlewares = applyMiddleware(logicMiddleware);
const enhancers = compose(middlewares);

const rootReducer = combineReducers({
  reducers,
});

export default createStore(rootReducer, composeWithDevTools(enhancers));
