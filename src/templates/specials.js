import React from "react";
import PropTypes from "prop-types";
import { graphql, withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import Content, { HTMLContent } from "@common/Content/Content";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const SpecialsPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
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

SpecialsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SpecialsPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post.frontmatter.featuredimage);

  return (
    <Layout>
      <HelmetForOGP
        title={post.frontmatter.title}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images
            .fallback.src
        )}`}
      />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('${post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images.fallback.src}')`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-4-mobile header-title">
          {post.frontmatter.title}
        </h1>
      </div>
      <SpecialsPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

SpecialsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SpecialsPage;

export const SpecialsPageQuery = graphql`
  query SpecialsPage($id: String!) {
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
