import React from "react";
import PropTypes from "prop-types";
import ThumbnailImg from "@common/Thumbnail/Thumbnail";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import NavbarCard from "./NavbarCard";

const CourseNavbarRoll = (props) => {
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
                post.frontmatter.featuredimageURL ? (
                  <img
                    src={post.frontmatter.featuredimageURL}
                    alt=""
                    style={{
                      width: "100%",
                      maxWidth: "480px",
                      aspectRatio: "16/9",
                      objectFit: "contain",
                    }}
                  ></img>
                ) : post.frontmatter.featuredimage ? (
                  <GatsbyImage
                    image={
                      post.frontmatter.featuredimage.childImageSharp
                        .gatsbyImageData
                    }
                    alt={`featured image thumbnail for post ${post.title}`}
                  />
                ) : (
                  <ThumbnailImg name={post.frontmatter.department} />
                )
              }
              title={post.frontmatter.title}
              subtitle={
                post.frontmatter.lecturer ? (
                  <div>
                    {post.frontmatter.lecturer.length > 20
                      ? post.frontmatter.lecturer.slice(0, 20) + " …"
                      : post.frontmatter.lecturer}
                  </div>
                ) : null
              }
            />
          </div>
        ))}
    </div>
  );
};

CourseNavbarRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

// export default () => (
const CourseNavbarRollquery = () => (
  <StaticQuery
    query={graphql`
      query CourseNavbarRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "courses" } } }
          limit: 4
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                title
                lecturer
                department
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 480
                      quality: 100
                      layout: CONSTRAINED
                    )
                  }
                }
                featuredimageURL
              }
            }
          }
        }
      }
    `}
    render={(data) => <CourseNavbarRoll data={data} />}
  />
);

export default CourseNavbarRollquery;
