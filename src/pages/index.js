import React, { Fragment } from 'react';

import Layout from '../components/layout';
import Footer from '../components/footer/footer';
import About from '../components/about/about';

const IndexPage = () => (
  <Fragment>
    <Layout />
    <About />
    <Footer />
  </Fragment>
);

export default IndexPage;
