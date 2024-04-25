import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  return (
    <div>
      {/* Desktop */}
      <nav className="hidden sm:flex">
        <ul className="flex w-full justify-between items-center p-5">
          <li className="mx-4 hover:border-b-2 border-slate-500">
            <Link to="/#projects">Projects</Link>
          </li>
          <li className="mx-4 hover:border-b-2 border-slate-500">
            <Link to="/about-project">About this project</Link>
          </li>
          <li className="mx-4 hover:border-b-2 border-slate-500">
            <Link to="/about-me">About me</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile hamburger */}
      <nav className="sm:hidden">
        <img
          src="https://img.icons8.com/ios-filled/40/menu--v1.png"
          alt="menu--v1"
          className="cursor-pointer"
          onClick={() => setMenuClick(true)}
          aria-hidden="true"
        />
        {menuClick ? (
          <div className="border absolute inset-x-0 inset-y-0 w-100 bg-white flex flex-col p-5">
            <div className="flex justify-end">
              <img
                src="https://img.icons8.com/ios/40/close-window--v1.png"
                alt="close-window--v1"
                onClick={() => setMenuClick(false)}
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col">
              <Link to="/#projects">Projects</Link>
              <Link to="/about-project">About this project</Link>
              <Link to="/about-me">About me</Link>
            </div>
          </div>
        ) : ''}
      </nav>
    </div>
  );
}

export default Navbar;
