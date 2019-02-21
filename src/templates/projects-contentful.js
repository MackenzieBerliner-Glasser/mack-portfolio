import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

class ProjectsContentfulTemplate extends Component {
  render() {
    const project = this.props.data.contentfulProject;
    console.log(project.title);
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <section>
          <SEO title={project.title} />
          <h2>Hello World</h2>
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: project.description.childContentfulRichText.html,
            }}
          />
          <ul>
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="prev">
                  {next.title}
                </Link>
              )}
            </li>
          </ul>
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
      description {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
