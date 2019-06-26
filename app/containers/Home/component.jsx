import React from 'react';

import LoginForm from '../LoginForm';
import Dashboard from '../Dashboard';

const Home = ({ isLogged }) => <>{!isLogged ? <LoginForm /> : <Dashboard />}</>;

export default Home;
