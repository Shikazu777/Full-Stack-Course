import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">ECOMMERCE LAYOUT</h2>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
