import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link className="nav-brand" to="/">
        Bookstore CMS
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}
            to="/"
          >
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}
            to="/categories"
          >
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      <button className="icon-button" type="button">
        <span className="material-icons primary-color">person</span>
      </button>
    </nav>
  );
}

export default NavBar;
