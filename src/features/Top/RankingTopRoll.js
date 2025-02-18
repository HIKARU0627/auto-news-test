import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import CourseCard from "@common/Card/CourseCard";

const RankingTopRoll = (props) => {
  const { data } = props;
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
};

const LectureContainer = styled.div`
  @media (max-width: 768px) {
    max-width: 50%;
  }
  @media (max-width: 512px) {
    max-width: 100%;
  }
`;

RankingTopRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

// export default () => (
const RankingTopRollquery = () => (
  <StaticQuery
    query={graphql`
      query RankingTopRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { rank: ASC } }
          filter: {
            frontmatter: {
              templateKey: { eq: "courses" }
              isinranking: { eq: "true" }
            }
          }
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
              }
            }
          }
        }
      }
    `}
    render={(data) => <RankingTopRoll data={data} />}
  />
);

export default RankingTopRollquery;
