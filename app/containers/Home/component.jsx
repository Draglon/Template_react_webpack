import React from 'react';

import LoginForm from '../LoginForm';
import CreateList from '../CreateList';

const Home = ({ isLogged }) => <>{!isLogged ? <LoginForm /> : <CreateList />}</>;

export default Home;
