import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img
            src="./game.p"
            alt="Gaming Library Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active-link"
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/library"
            activeClassName="active-link"
            className="nav-link"
          >
            Library
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="active-link"
            className="nav-link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="active-link"
            className="nav-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
