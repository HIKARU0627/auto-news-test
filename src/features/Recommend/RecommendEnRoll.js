import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import CourseCard from "@common/Card/CourseCard";

const RecommendEnRoll = (props) => {
  const { data, course_id } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    const API_Endpoint =
      "https://dev.ocw.media.nagoya-u.ac.jp/recommend_api/en";
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
        Recommend courses
        <NumofContent className="ml-2 has-text-grey">
          {recommend.length + " course" + (recommend.length >= 2 && "s")}
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

RecommendEnRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
  course_id: PropTypes.string,
};

const RecommendEnRollquery = ({ course_id }) => (
  <StaticQuery
    query={graphql`
      query RecommendEnRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { course_id: DESC } }
          filter: { frontmatter: { templateKey: { eq: "courses-en" } } }
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
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
                featuredimageURL
                course_id
              }
            }
          }
        }
        file(relativePath: { eq: "img/common/default_thumbnail.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 480
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `}
    render={(data) => <RecommendEnRoll data={data} course_id={course_id} />}
  />
);

const NumofContent = styled.span`
  font-size: 0.6em;
`;

export default RecommendEnRollquery;
