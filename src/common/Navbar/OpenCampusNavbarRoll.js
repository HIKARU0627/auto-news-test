import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import NavbarCard from "./NavbarCard";

const OpenCampusNavbarRoll = (props) => {
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
                <img
                  src={`/img/opencampus/${post.frontmatter.imgfile}`}
                  alt=""
                />
              }
              title={post.frontmatter.title}
            />
          </div>
        ))}
    </div>
  );
};

OpenCampusNavbarRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

const OpenCampusNavbarRollquery = () => (
  <StaticQuery
    query={graphql`
      query OpenCampusNavbarRollquery {
        allMarkdownRemark(
          sort: { frontmatter: { title: ASC } }
          filter: { frontmatter: { jspagetype: { eq: "open-campus" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                imgfile
              }
            }
          }
        }
      }
    `}
    render={(data) => <OpenCampusNavbarRoll data={data} />}
  />
);

export default OpenCampusNavbarRollquery;
