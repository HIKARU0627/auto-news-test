import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import NavbarCard from "./NavbarCard";

class TopicsNavbarRoll extends React.Component {
  render() {
    const { data } = this.props;
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
                title={
                  <>
                    {/* 【Topics No.{post.frontmatter.number}】<br />
                    {post.frontmatter.title} */}

                    {post.frontmatter.number ? (
                      <div>
                        【Topics No.{post.frontmatter.number}】
                        {post.frontmatter.title}{" "}
                      </div>
                    ) : post.frontmatter.extra_number ? (
                      <div>
                        {/* 【番外編 No.{post.frontmatter.extra_number}】{post.frontmatter.title} */}
                        【番外編】{post.frontmatter.title}
                      </div>
                    ) : null}
                  </>
                }
              />
            </div>
          ))}
      </div>
    );
  }
}

TopicsNavbarRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

// export default () => (
const TopicsNavbarRollquery = () => (
  <StaticQuery
    query={graphql`
      query TopicsNavbarRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { sort_number: DESC } }
          filter: { frontmatter: { jspagetype: { eq: "topics" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 140, truncate: true)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                department
                title
                extra_number
                number
                date(formatString: "YYYY/MM/DD")
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
    render={(data) => <TopicsNavbarRoll data={data} />}
  />
);

export default TopicsNavbarRollquery;
