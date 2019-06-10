import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IntlReducer as Intl } from 'react-redux-multilingual';
// import createSagaMiddleware from 'redux-saga';

import * as reducers from './reducers';
// import rootSaga from './sagas/index';

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = applyMiddleware(middleware, sagaMiddleware);

const rootReducer = combineReducers({
  ...reducers,
  Intl,
});

export const store = createStore(rootReducer, composeWithDevTools());

// sagaMiddleware.run(rootSaga);
