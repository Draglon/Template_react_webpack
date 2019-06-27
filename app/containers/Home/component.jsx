import React from 'react';

import LoginForm from '../LoginForm';
import Dashboard from '../Dashboard';

const HomeComponent = ({ isLogged }) => <>{!isLogged ? <LoginForm /> : <Dashboard />}</>;

export default HomeComponent;
