import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const HomeComponent = ({ isLogged }) => <>{isLogged ? <Dashboard /> : <LoginForm />}</>;

HomeComponent.propTypes = {
  isLogged: PropTypes.string.isRequired,
};

export default HomeComponent;
