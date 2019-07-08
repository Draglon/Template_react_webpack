import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../Header';

import Home from '../Home';
import MyLists from '../MyLists';
import Watchlist from '../Watchlist';
import Favorites from '../Favorites';
import Movie from '../Movie';
import NotFound from '../NotFound';

import PrivateRoute from './PrivateRoute';

const AppComponent = ({ isLogged }) => (
  <Router>
    <>
      {isLogged && <Header />}
      <Layout.Content className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/mylists" component={MyLists} />
          <PrivateRoute exact path="/watchlist" component={Watchlist} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <PrivateRoute exact path="/movie/:id" component={Movie} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Layout.Content>
    </>
  </Router>
);

export default AppComponent;
