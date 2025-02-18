import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import CourseCard from "@common/Card/CourseCard";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const tag = this.props.pageContext.tag;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `タグ「${tag}」には ${totalCount} 個の授業があります． `;
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
      <Layout>
        <section className="section">
          <BreadcrumbBar crumbs={crumbs} />
          <HelmetForOGP title={`「${tag}」に関連した授業`} />
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
                  <Link to="/tags/">全てのタグ</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
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

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
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
          templateKey: { in: ["courses", "farewell"] }
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
