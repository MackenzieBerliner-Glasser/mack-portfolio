import React, { Fragment } from 'react';
import styles from './project-header.module.css';


const ProjectHeader = () => {
  const description = 'A little about what I\'ve been up to';
  return (
    <Fragment>
      <header className={styles.projectHeader}>
        <div className={styles.center}>
          <h1 className={styles.pageTitle}>Projects</h1>
          <span id={styles.separator}>...</span>
          <h2 className={styles.pageDescription}>{description}</h2>
        </div>
      </header>
    </Fragment>
  );
};

export default ProjectHeader;
