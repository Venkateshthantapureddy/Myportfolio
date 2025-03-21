import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { FaKipSign } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        {/* Left Section with Logo */}
        <div className="left">
          <Link to="/" className="flex items-center">
            <FaKipSign className="text-3xl text-blue-500 mx-3" />
            <span className="text-3xl font-bold">Portfolio</span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? 'open' : ''}>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>About me</NavLink></li>
          <li><NavLink to="/SecondarySection" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink></li>
          <li><NavLink to="/Projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink></li>
          <li><NavLink to="/Contactme" className={({ isActive }) => (isActive ? 'active' : '')}>Contact me</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;