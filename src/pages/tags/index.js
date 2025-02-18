import React from "react";
import { graphql } from "gatsby";

import Layout from "@common/Layout/Layout";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import { TagSearch } from "@features/Tag/TagSearchContainer";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
  pageContext,
}) => {
  var sortedGroup = group.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };

  return (
    <Layout>
      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <HelmetForOGP title={"タグ一覧"} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h1 className="title is-size-2 is-bold-light">タグから探す</h1>
              <TagSearch tagList={sortedGroup} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { templateKey: { in: ["courses", "farewell"] } } }
    ) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
