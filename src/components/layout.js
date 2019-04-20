import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faDesktop,
  faCoffee,
  faCode,
  faGlobeAmericas,
  faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(
  fab,
  faEnvelope,
  faDesktop,
  faCoffee,
  faCode,
  faGlobeAmericas,
  faArrowDown
);

import Header from './header/header';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
