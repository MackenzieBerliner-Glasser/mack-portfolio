import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  const links = ['About', 'Projects', 'Blog', 'Contact'];
  const listLinks = links.map((link, i) => {
    return (
      <Link key={i} to={link}>
        {link}
      </Link>
    );
  });
  return (
    <nav>
      <h3>MACK BERLINER-GLASSER</h3>
      {listLinks}
    </nav>
  );
};

export default Header;
