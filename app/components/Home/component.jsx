import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const HomeComponent = ({ isLogged }) => <>{!isLogged ? <LoginForm /> : <Dashboard />}</>;

HomeComponent.defaultProps = {
  isLogged: '',
};

HomeComponent.propTypes = {
  isLogged: PropTypes.string,
};

export default HomeComponent;
