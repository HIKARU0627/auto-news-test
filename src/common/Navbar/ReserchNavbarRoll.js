import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import NavbarCard from "./NavbarCard";

const ReserchNavbarRoll = (props) => {
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
            />
          </div>
        ))}
    </div>
  );
};

ReserchNavbarRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

const ReserchNavbarRollquery = () => (
  <StaticQuery
    query={graphql`
      query ReserchNavbarRollquery {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "research-interview" }
              status: { eq: "teacher" }
            }
          }
          sort: { frontmatter: { articleNumber: ASC } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                articleNumber
                overview
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => <ReserchNavbarRoll data={data} />}
  />
);

export default ReserchNavbarRollquery;
