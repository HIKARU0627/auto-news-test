import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import LayoutEn from "@common/Layout/LayoutEn";
import Content, { HTMLContent } from "@common/Content/Content";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const NewsEnTemplate = ({
  content,
  contentComponent,
  helmet,
  title,
  description,
  tags,
  featuredimage,
  date,
  link,
  type,
  crumbs,
}) => {
  const PageContent = contentComponent || Content;
  const switchType = (type) => {
    switch (type) {
      case "courses":
        return (
          <span className="column is-2-tablet tag is-link  has-text-white-bis has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
            授業
          </span>
        );
      case "topics":
        return (
          <span className="column is-2-tablet tag is-success  has-text-white-bis has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
            Featured
          </span>
        );
      case "farewell":
        return (
          <span className="column  is-2-tablet tag  is-danger  has-text-white-bis has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
            退職講義
          </span>
        );
      case "special":
        return (
          <span className=" column is-2-tablet tag is-info  has-text-white-bis has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
            特別講義
          </span>
        );
      default:
        return (
          <span className="column is-2-tablet tag is-dark  has-text-white-bis has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
            Others
          </span>
        );
    }
  };

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
                  {/* type */}
                  {switchType(type)}
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
                  <h4>Tag</h4>
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
                <h4>Published</h4>
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

NewsEnTemplate.propTypes = {
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

const NewsEn = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };

  return (
    <LayoutEn>
      <NewsEnTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <HelmetForOGPEn
            title={post.frontmatter.title}
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
    </LayoutEn>
  );
};

NewsEn.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default NewsEn;

export const pageQuery = graphql`
  query NewsEnByID($id: String!) {
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
