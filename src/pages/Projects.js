import React, { Component, Fragment } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/footer/footer';
import Project from '../components/project/project';
import styles from './projects.module.css';

class ProjectsPage extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const projects = data.allContentfulProject.edges.map(({ node }, i) => {
      return <Project key={i} project={node} />;
    });
    return (
      <Fragment>
        <Layout location={this.props.location} title={siteTitle} />
        <section className={styles.wrapper}>
          {projects}
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProject {
      edges {
        node {
          title
          image {
            fluid {
              src
            }
          }
          slug
        }
      }
    }
  }
`;
