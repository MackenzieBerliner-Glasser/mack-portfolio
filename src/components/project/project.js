import React from 'react';
import { Link } from 'gatsby';

const Project = ({ project }) => {
  
  const image = project.image.fluid.src;
  return (
    <section>
      <Link to={project.slug}>
        <h3>{project.title}</h3>
        <img src={image}></img>
      </Link>
    </section>
  );
};

export default Project;
