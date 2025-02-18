import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ThumbnailImg from "@common/Thumbnail/Thumbnail";
import NavbarCard from "./NavbarCard";

const DepartmentNavbarRollEn = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className="is-parent column is-6-mobile is-2-tablet is-2-desktop"
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

DepartmentNavbarRollEn.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

// export default () => (
const DepartmentNavbarRollEnquery = () => (
  <StaticQuery
    query={graphql`
      query DepartmentNavbarRollEnQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "department-en" } } }
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
    render={(data) => <DepartmentNavbarRollEn data={data} />}
  />
);

export default DepartmentNavbarRollEnquery;
