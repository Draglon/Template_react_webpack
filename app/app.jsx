import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppComponent from './containers/AppComponent/index';
import './styles/style.scss';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app'),
);
