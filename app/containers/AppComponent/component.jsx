import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../Header';

import Home from '../Home';
import NotFound from '../NotFound';

const AppComponent = ({ islogged }) => (
  <Router>
    <>
      {islogged && <Header />}
      <Layout.Content className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout.Content>
    </>
  </Router>
);

export default AppComponent;
