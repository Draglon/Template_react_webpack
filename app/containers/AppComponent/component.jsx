import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';

import Home from '../Home';
import NotFound from '../NotFound';

class AppComponent extends React.Component {
  componentDidMount() {
    const { accessAdd } = this.props;
    if (localStorage.getItem('session_id')) {
      accessAdd();
    }
  }

  render() {
    return (
      <Router>
        <main className="main page">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default AppComponent;
