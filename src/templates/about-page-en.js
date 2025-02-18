import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import LayoutEn from "@common/Layout/LayoutEn";
import Content, { HTMLContent } from "@common/Content/Content";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const AboutPageEnTemplate = ({ content, contentComponent, crumbs }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <BreadcrumbBar crumbs={crumbs} />
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

AboutPageEnTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPageEn = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };

  return (
    <LayoutEn>
      <HelmetForOGPEn title={"About us"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('${post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images.fallback.src}')`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          {post.frontmatter.title}
        </h1>
      </div>

      <AboutPageEnTemplate
        contentComponent={HTMLContent}
        content={post.html}
        crumbs={crumbs}
      />
    </LayoutEn>
  );
};

AboutPageEn.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPageEn;

export const aboutPageQuery = graphql`
  query AboutPageEn($id: String!) {
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
