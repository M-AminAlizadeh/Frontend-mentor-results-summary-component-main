import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="border border-black flex justify-between p-3">
      <h1>My logo</h1>
      <Navbar />
    </header>
  );
}

export default Header;
