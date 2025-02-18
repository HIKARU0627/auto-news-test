import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import DepartmentCard from "@common/Card/DepartmentCard";

class DepartmentRollEn extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-mobile is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <DepartmentContainer
              className="is-parent column is-12-mobile is-one-third-tablet is-one-quarter-desktop"
              key={post.id}
            >
              <DepartmentCard post={post} />
            </DepartmentContainer>
          ))}
      </div>
    );
  }
}

const DepartmentContainer = styled.div`
  @media (max-width: 768px) {
    max-width: 50%;
  }
  @media (max-width: 512px) {
    max-width: 100%;
  }
`;

DepartmentRollEn.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

// export default () => (
const DepartmentRollEnquery = () => (
  <StaticQuery
    query={graphql`
      query DepartmentRollEnQuery {
        allMarkdownRemark(
          sort: { frontmatter: { departmentOrder: ASC } }
          filter: { frontmatter: { templateKey: { eq: "department-en" } } }
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
                subtitle
                departmentOrder
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
    render={(data) => <DepartmentRollEn data={data} />}
  />
);

export default DepartmentRollEnquery;
