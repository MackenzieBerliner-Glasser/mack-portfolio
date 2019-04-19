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
            Do you see any Teletubbies in here? Do you see a slender plastic tag
            clipped to my shirt with my name printed on it? Do you see a little
            Asian child with a blank expression on his face sitting outside on a
            mechanical helicopter that shakes when you put quarters in it? No?
            Well, that&apos;s what you see at a toy store. And you must think you&apos;re
            in a toy store, because you&apos;re here shopping for an infant named
            Jeb.
          </p>
        </div>
        <aside className={styles.aside}>
          <h3 className={styles.asideHeader}>Out of Office</h3>
          <h4 className={styles.aboutSub}>You can probably find me doing...</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>some content</li>
            <li className={styles.listItem}>some content</li>
            <li className={styles.listItem}>some content</li>
            <li className={styles.listItem}>some content</li>
            <li className={styles.listItem}>some content</li>
            <li className={styles.listItem}>some content</li>
          </ul>
        </aside>
      </section>
      <Tech />
    </Fragment>
  );
};

export default About;
