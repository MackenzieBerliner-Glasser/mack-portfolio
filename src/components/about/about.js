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
            I like to develop apps. My journey to become a Full Stack JavaScript
            Engineer started when I was an undergraduate working on several
            alternative transportation initiatives that used ArcGIS. After
            college I worked as an Americorps member in schools, but my
            commitment to continuous learning took me in a different direction
            and I transitioned to the tech field, and I have not looked back. My
            work is something that I do with a lot of creativity, curiosity, and
            commitment.
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
