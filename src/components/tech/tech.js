import React from 'react';
import vueLogo from '../../images/code-logos/vue.png';
import gatsbyLogo from '../../images/code-logos/gatsby.png';
import reactLogo from '../../images/code-logos/react.png';
import reduxLogo from '../../images/code-logos/redux.png';
import nodeLogo from '../../images/code-logos/node.png';
import mongoLogo from '../../images/code-logos/mongo.png';
import postgresLogo from '../../images/code-logos/postgres.png';
import jestLogo from '../../images/code-logos/jest.png';
import jsLogo from '../../images/code-logos/javascript.png';
import gitLogo from '../../images/code-logos/git.png';
import styles from './tech.module.css';

const Tech = () => {
  return (
    <div>
      <h4>{'{ Technology }'}</h4>
      <div id={styles.allLogos}>
        <div className={styles.logoDiv}>
          <img
            src={vueLogo}
            className={styles.logo}
            id={styles.vueLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>Vue</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={reactLogo}
            className={styles.logo}
            id={styles.reactLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>React</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={reduxLogo}
            className={styles.logo}
            id={styles.reduxLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>Redux</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={gatsbyLogo}
            className={styles.logo}
            id={styles.gatsbyLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>Gatsby</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={nodeLogo}
            className={styles.logo}
            id={styles.nodeLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>Node</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={mongoLogo}
            className={styles.logo}
            id={styles.mongoLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>MongoDB</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={postgresLogo}
            className={styles.logo}
            id={styles.postgresLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>Postgres</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={jestLogo}
            className={styles.logo}
            id={styles.postgresLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>Jest</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={jsLogo}
            className={styles.logo}
            id={styles.jsLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>ES6</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={gitLogo}
            className={styles.logo}
            id={styles.gitLogo}
            alt="vue logo"
          />
          <h4 className={styles.logoLabel}>ES6</h4>
        </div>
      </div>
    </div>
  );
};

export default Tech;
