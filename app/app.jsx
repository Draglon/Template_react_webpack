import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';

import AppComponent from './containers/AppComponent/index.jsx';
import './styles/style.scss';
import { store } from './store/store.jsx';
import translations from './store/translations/index.jsx';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations} >
      <AppComponent />
    </IntlProvider>
  </Provider>,
  document.getElementById('app'),
);
