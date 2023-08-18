import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const NavLinks = [
    {
      id: 1,
      path: '/',
      title: 'Home  |',
    },
    {
      id: 2,
      path: '/calculator',
      title: 'Calculator |',
    },
    {
      id: 3,
      path: '/quote',
      title: 'Qoute',
    },
  ];

  return (
    <nav>
      <h2>Math Magicians</h2>
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
