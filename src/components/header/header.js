import { Link } from 'gatsby';

import React from 'react';

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
      <header>
        <div>
          <div>
            <h3>Mackenzie Berliner-Glasser</h3>
          </div>
          <nav>
            {listLinks}
          </nav>
        </div>
      </header>
    );
};




export default Header;
