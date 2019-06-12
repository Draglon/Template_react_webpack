import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <nav className="navbar">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/contact" className="navbar__link">
          Contacts
        </Link>
      </nav>

      <div className="header__btns">
        <Link to="/login" className="btn btn-primary btn--small btn-login">
          Log In
        </Link>
        <Link to="/signup" className="btn btn-primary btn--small btn-signup">
          Sign Up
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
