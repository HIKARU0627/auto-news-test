import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import CourseCard from "@common/Card/CourseCard";

class FarewellRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className="columns is-mobile is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <LectureContainer
              className="is-parent column is-12-mobile is-one-third-tablet is-one-quarter-desktop"
              key={post.id}
            >
              <CourseCard post={post} />
            </LectureContainer>
          ))}
      </div>
    );
  }
}

const LectureContainer = styled.div`
  @media (max-width: 768px) {
    max-width: 50%;
  }
  @media (max-width: 512px) {
    max-width: 100%;
  }
`;

FarewellRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

// export default () => (
const FarewellRollquery = () => (
  <StaticQuery
    query={graphql`
      query FarewellRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { term: DESC } }
          filter: { frontmatter: { templateKey: { eq: "farewell" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 140, truncate: true)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                department
                date(formatString: "YYYY/MM/DD")
                lecturer
                term
                description
                featuredpost
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
    render={(data) => <FarewellRoll data={data} />}
  />
);

export default FarewellRollquery;
