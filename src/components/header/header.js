/* eslint-disable react/jsx-no-target-blank */
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
      <a className={styles.logo} target='_blank' href={'https://www.youtube.com/watch?v=6TBid5bCS2Q'}>
        MBG
      </a>
      <div className={styles.navigation}>{listLinks}</div>
    </nav>
  );
};

export default Header;
