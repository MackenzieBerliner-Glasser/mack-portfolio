import React from 'react';
import { Link } from 'gatsby';
import styles from './project.module.css';

const Project = ({ project }) => {
  const image = project.image.fluid.src;
  return (
    <div className={styles.card}>
      <Link to={project.slug} className={styles.link}>
        <h3 className={styles.cardText}>{project.title}</h3>
        <img className={styles.image} src={image} />
        <div className={styles.cardText}>Learn More</div>
      </Link>
    </div>
  );
};

export default Project;
