import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import thunk from 'redux-thunk';

import routesMap from './router/routesMap.jsx';
import page from './router/pageReducer.jsx';
import title from './router/pageTitle.jsx';
import * as reducers from './reducers.jsx';
// import rootSaga from './sagas/index.js';

const sagaMiddleware = createSagaMiddleware();
  
const { reducer, middleware, enhancer } = connectRoutes(routesMap);
const middlewares = applyMiddleware(middleware, sagaMiddleware, thunk);
const enhancers = compose(enhancer, middlewares);

const rootReducer = combineReducers({
    ...reducers,
    page,
    title,
    Intl,
    location: reducer,
});

export const store = createStore(rootReducer, composeWithDevTools(enhancers));

// sagaMiddleware.run(rootSaga);