import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const HomeComponent = ({ sessionId }) => <>{sessionId ? <Dashboard /> : <LoginForm />}</>;

HomeComponent.propTypes = {
  sessionId: PropTypes.string.isRequired,
};

export default HomeComponent;
