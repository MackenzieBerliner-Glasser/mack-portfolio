import React, { Fragment } from 'react';
import MainHeader from '../main-header/main-header';
import Tech from '../tech/tech';
import styles from './about.module.css';

const About = () => {
  return (
    <Fragment>
      <MainHeader />
      <div className={styles.about}>
        <h2 className={styles.aboutHeader}>About</h2>
        <p>SOME BS</p>
      </div>
      <Tech />
    </Fragment>
  );
};

export default About;
