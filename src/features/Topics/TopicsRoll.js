import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import TopicsCard from "@common/Card/TopicsCard";

class TopicsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="is-parent column is-12-mobile is-half-tablet is-one-third-desktop"
              key={post.id}
            >
              <TopicsCard post={post} />
            </div>
          ))}
      </div>
    );
  }
}

TopicsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

const TopicsRollquery = () => (
  <StaticQuery
    query={graphql`
      query TopicsRollQuery {
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
                sort_number
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
    render={(data) => <TopicsRoll data={data} />}
  />
);

export default TopicsRollquery;
