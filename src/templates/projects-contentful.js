import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from './project-template.module.css';
class ProjectsContentfulTemplate extends Component {
  render() {
    const project = this.props.data.contentfulProject;
    const { previous, next } = this.props.pageContext;


    return (
      <Layout>
        <section className={styles.wrapper}>
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: project.description.childContentfulRichText.html,
            }}
          />
          <div className={styles.externalLinks}>
            <a className={styles.link}href={project.github}>Check it out on GitHub</a>
            {project.website && <a className={styles.link}href={project.website}>Check out the site</a>}
          </div>
          <div className={styles.prevNextWrapper}>
            <ul className={styles.prevNext}>
              <li>
                {previous && (
                  <Link className={styles.prevNextLi} to={previous.slug} rel="prev">
                    {'< Prev'}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link className={styles.prevNextLi} to={next.slug} rel="prev">
                    {'Next >'}
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    );
  }
}
export default ProjectsContentfulTemplate;

export const pageQuery = graphql`
  query ContentfulProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      title
      tech
      github
      website
      description {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
