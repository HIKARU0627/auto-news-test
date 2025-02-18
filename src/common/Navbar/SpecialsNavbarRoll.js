import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

class SpecialsNavbarRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    // const thumbnail = data.file;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="is-parent column is-12-mobile is-one-third-tablet is-one-quarter-desktop"
              key={post.id}
            >
              <Link
                to={
                  post.frontmatter.specialspath
                    ? `/specials/${post.frontmatter.specialspath}`
                    : post.frontmatter.specialsurl
                }
              >
                <article className="navbar-list-item tile is-child box notification add-hoverable">
                  <header>
                    <div className="featured-thumbnail">
                      {post.frontmatter.featuredimage ? (
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
                      )}
                    </div>

                    <div className="post-meta">
                      <h3 className="is-size-6 is-size-7-mobile">
                        {post.frontmatter.title}
                      </h3>
                    </div>
                  </header>
                </article>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

SpecialsNavbarRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

// export default () => (
const SpecialsNavbarRollquery = () => (
  <StaticQuery
    query={graphql`
      query SpecialsNavbarRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { number: DESC } }
          filter: { frontmatter: { jspagetype: { eq: "specials" } } }
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
                specialsurl
                specialspath
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
    render={(data) => <SpecialsNavbarRoll data={data} />}
  />
);

export default SpecialsNavbarRollquery;
