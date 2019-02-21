import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default class ProjectsContentfulTemplate extends Component {
  render() {
    const project = this.props.data.contentfulProject;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContent;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={project.title}></SEO>
        <h3>{project.title}</h3>
        <p>{project.tech}</p>
        <div dangerouslySetInnerHTML={{ __html: project.description.childContentfulRichText.html }}></div>
        <ul>
          <li>
            {previous && (
              <Link to={previous.slug} rel='prev'>
                {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel='prev'>
                {next.title}
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }

}
export const pageQuery = graphql`
  query ContentfulProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject( slug: { eq: $slug }) {
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
