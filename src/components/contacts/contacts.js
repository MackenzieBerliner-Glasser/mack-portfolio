/* eslint-disable react/jsx-no-target-blank */
import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './contacts.module.css';
import Footer from '../footer/footer';

const Contacts = () => {
  return (
    <Fragment>
      <section className={styles.wrapper}>
        <div className={styles.center}>
          <h1 className={styles.contactHeader}>Lets Connect!</h1>
          <span id={styles.separator}>...</span>
          <h2 className={styles.description}>Say Hi</h2>
        </div>
      </section>
      <section className={styles.contact}>
        <a href="mailto:mack.bg94@gmail.com" title="email">
          <FontAwesomeIcon className={styles.icons} icon="envelope" />
        </a>
        <a
          href="https://www.linkedin.com/in/mackenzie-berliner-glasser/"
          target="_blank"
          title="LinkedIn"
        >
          <FontAwesomeIcon
            className={styles.icons}
            icon={['fab', 'linkedin']}
          />
        </a>
        <a
          href="https://github.com/MackenzieBerliner-Glasser"
          target="_blank"
          title="GitHub"
        >
          <FontAwesomeIcon className={styles.icons} icon={['fab', 'github']} />
        </a>
      </section>
      <section className={styles.contactFooter}>
        <Footer />
      </section>
    </Fragment>
  );
};

export default Contacts;
