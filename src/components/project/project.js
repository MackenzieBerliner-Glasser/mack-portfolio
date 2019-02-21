import React from 'react';
import { Link } from 'gatsby';

const Project = ({ project }) => {
  return (
    <section>
      <Link to={project.slug}>
        <h3>{project.title}</h3>
        <p>{project.tech}</p>
      </Link>
    </section>
  );
};

export default Project;
