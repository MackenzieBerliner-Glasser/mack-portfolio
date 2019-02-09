import React, { Fragment } from 'react';
import MainHeader from '../main-header/main-header';
import Tech from '../tech/tech';
import styles from './about.module.css';

const About = () => {
  return (
    <Fragment>
      <MainHeader />
      <h2 className={styles.about}>About</h2>
      <Tech />
    </Fragment>
  );
};

export default About;
