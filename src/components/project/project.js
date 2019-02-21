import React from 'react';
import { Link } from 'gatsby';

const Project = ({ project }) => {
  return (
    <section>
      <Link to={project.slug}>
        <h3>{project.title}</h3>
      </Link>
      <p>{project.tech}</p>
    </section>

  );
};

export default Project;
