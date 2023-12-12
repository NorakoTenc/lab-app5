import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header">
        <Link className="btn-light"  to="/">Home</Link>
        <Link  className="btn-light"  to="/about">About</Link>
        <Link className="btn-light"  to="/product">Product</Link>
      </div>
    </header>
  );
}

export default Header;
