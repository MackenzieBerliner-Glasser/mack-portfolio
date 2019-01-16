import React, { Fragment } from 'react';
import mainImg from '../../images/Main.png';


const MainHeader = () => {
  return (
    <Fragment>
      <header className="main-header">
        <div className="center">
          <img
            className="main-page-photo"
            src={mainImg}
            alt="head-shot photo"
          />
          <h1 className="page-title">Mack Berliner-Glasser</h1>
          <h2 className="page-description">Software Developer</h2>
        </div>
      </header>
    </Fragment>
  );
};

export default MainHeader;
