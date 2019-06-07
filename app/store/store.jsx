import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import { IntlReducer as Intl } from 'react-redux-multilingual';

import routesMap from './router/routesMap';
import page from './router/pageReducer';
import title from './router/pageTitle';
import * as reducers from './reducers';
// import rootSaga from './sagas/index';

// const sagaMiddleware = createSagaMiddleware();

const { reducer, middleware, enhancer } = connectRoutes(routesMap);
// const middlewares = applyMiddleware(middleware, sagaMiddleware);
const middlewares = applyMiddleware(middleware);
const enhancers = compose(
  enhancer,
  middlewares,
);

const rootReducer = combineReducers({
  ...reducers,
  page,
  title,
  Intl,
  location: reducer,
});

export const store = createStore(rootReducer, composeWithDevTools(enhancers));

// sagaMiddleware.run(rootSaga);
