import React, { Fragment } from 'react';
import styles from './main-header.module.css';


const MainHeader = () => {
  return (
    <Fragment>
      <header className={styles.mainHeader}>
        <div className={styles.center}>
          <h1 className={styles.pageTitle}>Mack Berliner-Glasser</h1>
          <span id={styles.separator}>...</span>
          <h2 className={styles.pageDescription}>Software Developer</h2>
        </div>
      </header>
    </Fragment>
  );
};

export default MainHeader;
