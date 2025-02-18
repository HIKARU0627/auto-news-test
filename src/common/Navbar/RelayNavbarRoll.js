import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, StaticQuery } from "gatsby";
import NavbarCard from "./NavbarCard";

const RelayNavbarRoll = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className="is-parent column is-12-mobile is-one-third-tablet is-one-quarter-desktop"
            key={post.id}
          >
            <NavbarCard
              link={post.fields.slug}
              thumbnail={
                <StaticImage
                  src="../../../static/img/common/default_thumbnail.png"
                  alt={`featured image thumbnail`}
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                  }}
                  quality={100}
                />
              }
              title={post.frontmatter.title}
              subtitle={post.frontmatter.subtitle}
            />
          </div>
        ))}
    </div>
  );
};

RelayNavbarRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

const RelayNavbarRollquery = () => (
  <StaticQuery
    query={graphql`
      query RelayNavbarRollquery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "relay-page" } } }
          sort: { frontmatter: { path: ASC } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                path
                title
                subtitle
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RelayNavbarRoll data={data} count={count} />}
  />
);

export default RelayNavbarRollquery;
