import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import Content, { HTMLContent } from "@common/Content/Content";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const RelayPageTemplate = ({
  content,
  contentComponent,
  title,
  subtitle,
  crumbs,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <BreadcrumbBar crumbs={crumbs} />
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Marginconfig>
              <div>{title}</div>
              <div>{subtitle}</div>
            </Marginconfig>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

RelayPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const RelayPage = ({ data, pageContext }) => {
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

      <div /* can't be seen for any devices at the moment  */
        className="full-width-image-container margin-top-0 is-hidden-mobile is-hidden-tablet"
        style={{
          backgroundImage: `url('${post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.src}')`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          {post.frontmatter.title}
        </h1>
      </div>

      <RelayPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        crumbs={crumbs}
      />
    </Layout>
  );
};

RelayPage.propTypes = {
  data: PropTypes.object.isRequired,
};

const Marginconfig = styled.h1`
  margin-top: 0rem;
  font-size: 2em;
  margin-bottom: 1em;
  color: #363636;
  font-weight: 600;
  line-height: 1.125;
`;

export default RelayPage;

export const RelayPageQuery = graphql`
  query RelayPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        featuredimage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
