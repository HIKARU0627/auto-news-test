import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import CourseCard from "@common/Card/CourseCard";

const RecommendRoll = (props) => {
  const { data, course_id } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    const API_Endpoint =
      "https://dev.ocw.media.nagoya-u.ac.jp/recommend_api/ja";
    const body = { course_id: course_id };

    axios
      .post(API_Endpoint, body)
      .then((response) => {
        setRecommend(response.data.recommendation);
      })
      .catch((error) => {
        console.error("エラーが発生しました:", error);
      });
  }, [course_id]);

  if (recommend.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="has-text-weight-semibold  is-h3">
        関連授業
        <NumofContent className="ml-2 has-text-grey">
          {recommend.length}件
        </NumofContent>
      </h3>
      <div>
        <div className="recommend-scroll-x">
          {posts &&
            posts
              .filter(({ node: post }) =>
                recommend.includes(post.frontmatter.course_id)
              )
              .map(({ node: post }) => (
                <LectureContainer
                  className="is-parent column is-12-mobile is-one-third-tablet is-one-quarter-desktop"
                  key={post.id}
                >
                  <CourseCard post={post} />
                </LectureContainer>
              ))}
        </div>
      </div>
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

RecommendRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
  course_id: PropTypes.string.isRequired,
};

const RecommendRollquery = ({ course_id }) => (
  <StaticQuery
    query={graphql`
      query RecommendRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: {
            frontmatter: { templateKey: { in: ["courses", "farewell"] } }
          }
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
                lecturer
                term
                date(formatString: "YYYY/MM/DD")
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
                course_id
              }
            }
          }
        }
      }
    `}
    render={(data) => <RecommendRoll data={data} course_id={course_id} />}
  />
);

const NumofContent = styled.span`
  font-size: 0.6em;
`;

export default RecommendRollquery;
