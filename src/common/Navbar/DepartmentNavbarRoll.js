import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import NavbarCard from "./NavbarCard";

const DepartmentNavbarRoll = (props) => {
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
                post.frontmatter.featuredimage ? (
                  <GatsbyImage
                    image={
                      post.frontmatter.featuredimage.childImageSharp
                        .gatsbyImageData
                    }
                    alt={`featured image thumbnail for post ${post.title}`}
                  />
                ) : (
                  <StaticImage
                    src="../../../static/img/common/default_thumbnail.png"
                    alt={`featured image thumbnail for post ${post.title}`}
                    width={480}
                    quality={100}
                  />
                )
              }
              title={post.frontmatter.title}
            />
          </div>
        ))}
    </div>
  );
};

DepartmentNavbarRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

// export default () => (
const DepartmentNavbarRollquery = () => (
  <StaticQuery
    query={graphql`
      query DepartmentNavbarRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "department" } } }
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
    render={(data) => <DepartmentNavbarRoll data={data} />}
  />
);

export default DepartmentNavbarRollquery;
