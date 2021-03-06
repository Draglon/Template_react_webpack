import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../Header';

import Home from '../Home';
import MyLists from '../MyLists';
import MyList from '../MyList';
import Watchlist from '../Watchlist';
import Favorites from '../Favorites';
import Movie from '../Movie';
import NotFound from '../NotFound';

import PrivateRoute from './PrivateRoute';

const AppComponent = ({ sessionId }) => (
  <Router>
    <>
      {sessionId && <Header />}
      <Layout.Content className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/mylists" component={MyLists} />
          <PrivateRoute exact path="/watchlist" component={Watchlist} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <PrivateRoute exact path="/movie/:id" component={Movie} />
          <PrivateRoute exact path="/list/:id" component={MyList} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Layout.Content>
    </>
  </Router>
);

AppComponent.propTypes = {
  sessionId: PropTypes.string.isRequired,
};

export default AppComponent;
