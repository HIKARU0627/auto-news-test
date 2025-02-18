import React from "react";
import { graphql } from "gatsby";

import LayoutEn from "@common/Layout/LayoutEn";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import { TagSearch } from "@features/Tag/TagSearchContainer";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const TagsPageEn = ({
  data: {
    allMarkdownRemark: { group },
  },
  pageContext,
}) => {
  const sortedGroup = group.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };

  return (
    <LayoutEn>
      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <HelmetForOGPEn title={"Tag"} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h1 className="title is-size-2 is-bold-light">Search by Tags</h1>
              <TagSearch tagList={sortedGroup} isEN={true} />
            </div>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
};

export default TagsPageEn;

export const tagPageEnQuery = graphql`
  query TagsEnQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { templateKey: { in: ["courses-en"] } } }
    ) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
