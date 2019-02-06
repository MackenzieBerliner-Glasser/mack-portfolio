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
import awsLogo from '../../images/code-logos/aws.png';
import graphqlLogo from '../../images/code-logos/graphql.png';
import styles from './tech.module.css';

const Tech = () => {
  return (
    <div>
      <h4>{'{ What Gets Me Up In The Morning }'}</h4>
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
            alt="react logo"
          />
          <h4 className={styles.logoLabel}>React</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={reduxLogo}
            className={styles.logo}
            id={styles.reduxLogo}
            alt="redux logo"
          />
          <h4 className={styles.logoLabel}>Redux</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={gatsbyLogo}
            className={styles.logo}
            id={styles.gatsbyLogo}
            alt="gatsby logo"
          />
          <h4 className={styles.logoLabel}>Gatsby</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={nodeLogo}
            className={styles.logo}
            id={styles.nodeLogo}
            alt="node logo"
          />
          <h4 className={styles.logoLabel}>Node</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={mongoLogo}
            className={styles.logo}
            id={styles.mongoLogo}
            alt="mongo logo"
          />
          <h4 className={styles.logoLabel}>MongoDB</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={postgresLogo}
            className={styles.logo}
            id={styles.postgresLogo}
            alt="postgres logo"
          />
          <h4 className={styles.logoLabel}>Postgres</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={jestLogo}
            className={styles.logo}
            id={styles.postgresLogo}
            alt="jest logo"
          />
          <h4 className={styles.logoLabel}>Jest</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={jsLogo}
            className={styles.logo}
            id={styles.jsLogo}
            alt="javascript es6 logo"
          />
          <h4 className={styles.logoLabel}>ES6</h4>
        </div>
        <div className={styles.logoDiv}>
          <img
            src={gitLogo}
            className={styles.logo}
            id={styles.gitLogo}
            alt="git logo"
          />
          <h4 className={styles.logoLabel}>Git</h4>
        </div>
      </div>
    </div>
  );
};

export default Tech;
