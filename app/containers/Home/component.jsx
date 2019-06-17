import React from 'react';

import LoginForm from '../LoginForm';
import CreateList from '../CreateList';

const Home = ({ isLogged, listId }) => (
  <section className="section">
    {console.log('listId: ', listId)}
    <div className="wrapper">{!isLogged ? <LoginForm /> : <CreateList />}</div>
  </section>
);

export default Home;
