import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';

import Home from '../Home';
import Contacts from '../Contacts';
import Login from '../Login';
import Signup from '../Signup';
import NotFound from '../NotFound';

const AppComponent = () => (
  <Router>
    <main className="main page">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contacts} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </Router>
);

export default AppComponent;
