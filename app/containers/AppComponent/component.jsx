import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../Header';

import Home from '../Home';
import MyLists from '../MyLists';
import Watchlist from '../Watchlist';
import Favorites from '../Favorites';
import NotFound from '../NotFound';

const AppComponent = ({ islogged }) => (
  <Router>
    <>
      {islogged && <Header />}
      <Layout.Content className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mylists" component={MyLists} />
          <Route exact path="/watchlist" component={Watchlist} />
          <Route exact path="/favorites" component={Favorites} />
          <Route component={NotFound} />
        </Switch>
      </Layout.Content>
    </>
  </Router>
);

export default AppComponent;
