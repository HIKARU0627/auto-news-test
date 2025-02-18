import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "@common/Layout/Layout";
import Content, { HTMLContent } from "@common/Content/Content";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const RelayPageTopTemplate = ({ content, contentComponent, crumbs }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <BreadcrumbBar crumbs={crumbs} />
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

RelayPageTopTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const RelayPageTop = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  return (
    <Layout>
      <HelmetForOGP
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('${post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images.fallback.src}')`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title is-hidden-mobile">
          {post.frontmatter.title}
        </h1>
        <h1 className="has-text-weight-bold is-size-2 header-title is-hidden-tablet">
          {post.frontmatter.title}
        </h1>
      </div>

      <RelayPageTopTemplate
        contentComponent={HTMLContent}
        content={post.html}
        crumbs={crumbs}
      />
    </Layout>
  );
};

RelayPageTop.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RelayPageTop;

export const RelayPageTopQuery = graphql`
  query RelayPageTop($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredimage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
