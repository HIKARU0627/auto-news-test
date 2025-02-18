import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import CourseCard from "@common/Card/CourseCard";

class CourseEnRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    // const thumbnail = data.file;
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

CourseEnRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

const CourseEnRollquery = () => (
  <StaticQuery
    query={graphql`
      query CourseEnRollQuery {
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
    render={(data) => <CourseEnRoll data={data} />}
  />
);

export default CourseEnRollquery;
