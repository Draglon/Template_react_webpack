import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../Header';

import Home from '../Home';
import MyLists from '../MyLists';
import Watchlist from '../Watchlist';
import Favorites from '../Favorites';
import NotFound from '../NotFound';

function PrivateRoute({ component: Component, islogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        (islogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        ))
      }
    />
  );
}

const AppComponent = ({ islogged }) => (
  <Router>
    <>
      {islogged && <Header />}
      <Layout.Content className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/mylists" component={MyLists} islogged={islogged} />
          <PrivateRoute exact path="/watchlist" component={Watchlist} islogged={islogged} />
          <PrivateRoute exact path="/favorites" component={Favorites} islogged={islogged} />
          <PrivateRoute component={NotFound} islogged={islogged} />
        </Switch>
      </Layout.Content>
    </>
  </Router>
);

export default AppComponent;
