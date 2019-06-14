import React from 'react';

import LoginForm from '../LoginForm';
import CreateList from '../CreateList';

const Home = ({ isLogged }) => (
  <section className="section">
    <div className="wrapper">{!isLogged ? <LoginForm /> : <CreateList />}</div>
  </section>
);

export default Home;
