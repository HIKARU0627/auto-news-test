import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import LayoutEn from "@common/Layout/LayoutEn";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import CourseCard from "@common/Card/CourseCard";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

class TagRouteEn extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const tag = this.props.pageContext.tag;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const oneOrMore = totalCount === 1 ? "Course" : "Courses";
    const tagHeader = `Tag "${tag}" has been registered in ${totalCount} ${oneOrMore}. `;
    const {
      breadcrumb: { crumbs },
    } =
      this.props.pageContext && this.props.pageContext.breadcrumb.crumbs.length
        ? this.props.pageContext
        : { breadcrumb: { crumbs: undefined } };

    const tagContents = posts.map(({ node: post }) => (
      <LectureContainer
        className="is-parent column is-12-mobile is-one-third-tablet is-one-quarter-desktop"
        key={post.id}
      >
        <CourseCard post={post} />
      </LectureContainer>
    ));

    return (
      <LayoutEn>
        <section className="section">
          <BreadcrumbBar crumbs={crumbs} />
          <HelmetForOGPEn title={`'${tag}' Related Courses`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{
                  marginBottom: "6rem",
                  marginRight: "auto",
                  marginLeft: "auto",
                  width: "100%",
                }}
              >
                <h5 className="title is-size-5">{tagHeader}</h5>
                <br />
                <div className="columns is-mobile is-multiline">
                  {tagContents}
                </div>
                <br />
                <p>
                  <Link to="/en/tags/">All Tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </LayoutEn>
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

export default TagRouteEn;

export const tagPageEnQuery = graphql`
  query TagPageEn($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          templateKey: { in: ["courses-en"] }
          tags: { in: [$tag] }
        }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            department
            lecturer
            term
            description
          }
        }
      }
    }
  }
`;
