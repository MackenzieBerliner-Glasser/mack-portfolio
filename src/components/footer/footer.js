import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>© Mackenzie Berliner-Glasser {new Date().getFullYear()}</footer>
  );
};

export default Footer;
