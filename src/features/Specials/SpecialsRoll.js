import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import SpecialsCard from "@common/Card/SpecialsCard";

const SpecialsRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="columns is-mobile is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className="is-parent column is-12-mobile is-half-tablet is-one-third-desktop"
            key={post.id}
          >
            <SpecialsCard post={post} />
          </div>
        ))}
    </div>
  );
};

SpecialsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

const SpecialsRollquery = () => (
  <StaticQuery
    query={graphql`
      query SpecialsRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { number: DESC } }
          filter: { frontmatter: { templateKey: { eq: "specials" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                specialsurl
                specialspath
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 480
                      quality: 100
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <SpecialsRoll data={data} />}
  />
);

export default SpecialsRollquery;
