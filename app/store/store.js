import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from 'redux-logic';

import reducers from './reducers';
import rootLogic from './logic';

const logicMiddleware = createLogicMiddleware(rootLogic);

const middlewares = applyMiddleware(logicMiddleware);
const enhancers = compose(middlewares);

const rootReducer = combineReducers({
  reducers,
});

export default createStore(rootReducer, composeWithDevTools(enhancers));
