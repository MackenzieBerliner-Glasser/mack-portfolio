import React from 'react';
import styles from './header.module.css';
import { Link } from 'gatsby';

const Header = () => {
  const links = ['About', 'Projects', 'Contact'];
  const listLinks = links.map((link, i) => {
    return (
      <Link key={i} to={link} className={styles.link}>
        {link}
      </Link>
    );
  });
  return (
    <nav className={styles.header}>
      <h3 className={styles.logo}>{'LOGO'}</h3>
      <div className={styles.navigation}>
        {listLinks}
      </div>
    </nav>
  );
};

export default Header;
