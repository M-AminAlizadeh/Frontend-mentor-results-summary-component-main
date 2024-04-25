import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="border border-black flex justify-between p-3">
      <Link to="/">
        <img src="https://img.icons8.com/color/55/google-code.png" alt="google-code" />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
