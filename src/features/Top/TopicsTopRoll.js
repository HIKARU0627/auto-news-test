import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import TopicsCard from "@common/Card/TopicsCard";

const TopicsTopRoll = (props) => {
  const { data } = props;
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
};

TopicsTopRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

// export default () => (
const TopicsTopRollquery = () => (
  <StaticQuery
    query={graphql`
      query TopicsTopRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { sort_number: DESC } }
          filter: { frontmatter: { jspagetype: { eq: "topics" } } }
          limit: 3
        ) {
          edges {
            node {
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
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 480
                      quality: 100
                      layout: FULL_WIDTH
                    )
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <TopicsTopRoll data={data} />}
  />
);

export default TopicsTopRollquery;
