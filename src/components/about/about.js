import React, { Fragment } from 'react';
import MainHeader from '../main-header/main-header';
import Tech from '../tech/tech';

const About = () => {
  return (
    <Fragment>
      <MainHeader />
      <h3>{'<About />'}</h3>
      <Tech />
    </Fragment>
  );
};

export default About;
