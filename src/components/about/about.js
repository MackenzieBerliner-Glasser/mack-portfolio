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
          <h3 className={styles.aboutHeader}>The Bio</h3>
          <h4 className={styles.aboutSub}>Hi, I&apos;m Mack,</h4>
          <p className={styles.aboutP}>
            I like to build stuff. My journey as a Full Stack JavaScript
            Engineer started as an undergraduate research assistant where I
            helped several alternative transportation initiatives through data
            collection with ArcGIS. Driven by a passion for continuous learning
            during my time as an Americorps Member I decided to transition in to
            Tech and have not looked back. My work is something that I do with a
            lot of honesty, appetite, commitment.
          </p>
        </div>
        <aside className={styles.aside}>
          <h3 className={styles.asideHeader}>Out of Office</h3>
          <h4 className={styles.aboutSub}>You can probably find me ...</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>In the gym because of the pizza</li>
            <li className={styles.listItem}>Buying sneakers</li>
            <li className={styles.listItem}>Volunteering</li>
            <li className={styles.listItem}>Gaming</li>
            <li className={styles.listItem}>Exploring nature</li>
            <li className={styles.listItem}>Hiking with my pup</li>
          </ul>
        </aside>
      </section>
      <Tech />
    </Fragment>
  );
};

export default About;
