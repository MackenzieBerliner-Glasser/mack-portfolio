const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectCard = path.resolve('./src/templates/projects-contentful.js');
  return graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              slug
              title
              tech
              github
              website
              image {
                fluid {
                  src
                }
              }
              description {
                childContentfulRichText {
                  html
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if(result.errors) {
      throw result.errors;
    }
    const projects = result.data.allContentfulProject.edges;
    console.log(projects);

    projects.forEach((project, index) => {
      const previous = index === projects.length - 1 ? null : projects[index + 1].node;
      const next = index === 0 ? null : projects[index - 1].node;

      createPage({
        path: project.node.slug,
        component: projectCard,
        context: {
          slug: project.node.slug,
          previous,
          next,
        },
      });
    });
  });
};

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
