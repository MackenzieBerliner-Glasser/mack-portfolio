import React, { Fragment } from 'react';
import mainImg from '../../images/Main.png';
import styles from './main-header.module.css';


const MainHeader = () => {
  return (
    <Fragment>
      <header className={styles.mainHeader}>
        <div className={styles.center}>
          <img
            className={styles.mainPagePhoto}
            src={mainImg}
            alt="head-shot photo"
          />
          <h1 className={styles.pageTitle}>Mack Berliner-Glasser</h1>
          <h2 className={styles.pageDescription}>Software Developer</h2>
        </div>
      </header>
    </Fragment>
  );
};

export default MainHeader;
