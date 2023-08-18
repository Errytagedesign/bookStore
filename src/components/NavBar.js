import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const NavLinks = [
    {
      id: 1,
      path: '/',
      title: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      title: 'Categories',
    },
  ];

  return (
    <nav>
      <h2>Book Store CMS</h2>
      <ul className="navbar">
        {NavLinks.map(({ id, path, title }) => (
          <li key={id}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
