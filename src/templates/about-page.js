import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "@common/Layout/Layout";
import Content, { HTMLContent } from "@common/Content/Content";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const AboutPageTemplate = ({ content, contentComponent, crumbs }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <BreadcrumbBar crumbs={crumbs} className="px-4" />
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  const title = "NUOCWについて";
  return (
    <Layout>
      <HelmetForOGP title={title} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('${post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images.fallback.src}')`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen header-title">
          {post.frontmatter.title}
        </h1>
      </div>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        crumbs={crumbs}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
