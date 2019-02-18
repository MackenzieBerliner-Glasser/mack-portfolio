import React, { Fragment } from 'react';
import MainHeader from '../main-header/main-header';
import Tech from '../tech/tech';
import styles from './about.module.css';

const About = () => {
  return (
    <Fragment>
      <MainHeader />
      <section className={styles.section}>
        <div className={styles.about}>
          <h2 className={styles.aboutHeader}>The Bio</h2>
          <h4 className={styles.aboutSub}>Hi, I&apos;m Mack,</h4>
          <p>
            A little bit about me... I like to create. That is the long and short of it.
          </p>
        </div>
        <aside className={styles.aside}>
          <h2 className={styles.asideHeader}>Out of Office</h2>
        </aside>
      </section>
      <Tech />
    </Fragment>
  );
};

export default About;
