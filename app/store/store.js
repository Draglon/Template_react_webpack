import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from 'redux-logic';

import apiClient from '../apiClient/config';
import reducers from './reducers';
import rootLogic from './logic';

const deps = {
  apiKey: '373ab70129f36fd1f65b6d7b24ec2641',
  apiClient,
};

const logicMiddleware = createLogicMiddleware(rootLogic, deps);

const middlewares = applyMiddleware(logicMiddleware);
const enhancers = compose(middlewares);

const rootReducer = combineReducers({
  reducers,
});

export default createStore(rootReducer, composeWithDevTools(enhancers));
