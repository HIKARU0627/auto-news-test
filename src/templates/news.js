import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import Content, { HTMLContent } from "@common/Content/Content";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const NewsTemplate = ({
  content,
  contentComponent,
  helmet,
  title,
  description,
  tags,
  featuredimage,
  date,
  link,
  crumbs,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <BreadcrumbBar crumbs={crumbs} />
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns is-multiline is-mobile">
              {/* title-type */}
              <div className="column is-full">
                <div className="columns is-mobile is-vcentered ">
                  {/* title */}
                  <div className="column is-10">
                    <h1 className="title  is-size-3-tablet is-marginless is-size-5-mobile has-text-weight-bold is-bold-light ">
                      {title}
                    </h1>
                  </div>
                </div>
              </div>
              {/* image */}
              {featuredimage ? (
                <div className="column is-half-tablet is-offset-one-quarter-tablet  is-10-mobile is-offset-1-mobile">
                  <GatsbyImage
                    image={featuredimage.childImageSharp.gatsbyImageData}
                    alt={title}
                    //width = {`100%`}
                  />
                </div>
              ) : null}

              {/* content */}
              {description ? ( //description は使わないけど念のために
                <div className="column is-full">
                  <Discription>{description}</Discription>
                </div>
              ) : null}
              {content ? (
                <div className="column is-full">
                  <PageContent content={content} />
                </div>
              ) : null}
              {/* button link*/}
              {link ? (
                <div className="column is-half is-offset-one-quarter ">
                  <Link to={link}>
                    <button className="  button is-fullwidth is-center is-outlined is-primary 　is-light ">
                      関連記事へ
                    </button>
                  </Link>
                </div>
              ) : null}
              {/* tags */}
              {tags && tags.length ? (
                <div className="column is-full">
                  <h4>タグ</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li style={{ margin: `0 0` }} key={tag + `tag`}>
                        <Link to={`/categories/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {/* date */}
              <div className="column is-full">
                <h4>投稿日</h4>
                <p>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Discription = styled.div`
  margin-bottom: 1em;
`;

NewsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
  featuredimage: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

const News = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };

  return (
    <Layout>
      <NewsTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <HelmetForOGP
            title={post.frontmatter.title}
            category={"News"}
            description={post.frontmatter.description}
          />
        }
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
        type={post.frontmatter.type}
        link={post.frontmatter.link}
        crumbs={crumbs}
      />
    </Layout>
  );
};

News.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default News;

export const pageQuery = graphql`
  query NewsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
        description
        link
        type
        featuredimage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        tags
      }
    }
  }
`;
