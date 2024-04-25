import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="border">
      <ul className="flex">
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/about-project">About this project</Link>
        </li>
        <li>
          <Link to="/about-me">About me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
