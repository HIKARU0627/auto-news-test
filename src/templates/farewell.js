import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link, withPrefix } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import Content, { HTMLContent } from "@common/Content/Content";
import IframeMovie from "@common/IframeMovie";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";
import RecommendRoll from "@features/Recommend/RecommendRoll";

const FarewellPageTemplate = ({
  content,
  contentComponent,
  helmet,
  title,
  tags,
  featuredimage,
  featuredimageURL,
  movie,
  date,
  lecturedate,
  place,
  lecturersimage,
  lecturer,
  department,
  term,
  course_id,
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
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {movie ? (
              <div>
                <IframeMovie src={movie} />
              </div>
            ) : (
              <div>
                {featuredimageURL ? (
                  <img src={featuredimageURL} alt="farewell"></img>
                ) : featuredimage ? (
                  <StyledImg
                    image={featuredimage.childImageSharp.gatsbyImageData}
                    alt={title}
                  />
                ) : null}
              </div>
            )}
            <p className="is-size-4 has-text-weight-bold">{term}</p>
            {/* besides mobile */}
            <div className="columns is-hidden-mobile">
              <div className="column is-10">
                <table className="table is-striped is-bordered">
                  <tbody>
                    <tr>
                      <th>講師</th>
                      <td>{lecturer}</td>
                      {lecturersimage ? (
                        <td className="is-paddingless" rowSpan="4" width="160">
                          <figure className="is-marginless">
                            <img
                              src={lecturersimage}
                              alt={lecturer}
                              style={{ width: "100%" }}
                            />
                          </figure>
                        </td>
                      ) : null}
                    </tr>
                    <tr>
                      <th>開講部局</th>
                      <td>{department}</td>
                    </tr>
                    {lecturedate ? (
                      <tr>
                        <th>日時</th>
                        <td>{lecturedate}</td>
                      </tr>
                    ) : null}
                    {place ? (
                      <tr>
                        <th>場所</th>
                        <td>{place}</td>
                      </tr>
                    ) : null}
                    {/* {tags && tags.length ? (
                      <tr>
                        <th>タグ</th>
                        <td className="farewell_taglist">
                          {tags.map((tag) => (
                            <li key={tag + `tag`}>
                              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                            </li>
                          ))}
                        </td>
                      </tr>
                    ) : null} */}
                  </tbody>
                </table>
              </div>
            </div>
            {/* only mobile*/}
            <div className="columns is-hidden-tablet">
              <div className="column is-10">
                <table className="table is-striped is-bordered">
                  <tbody>
                    <tr>
                      {lecturersimage ? (
                        <td className="is-paddingless" colSpan="2">
                          <figure className="is-marginless">
                            <img
                              src={lecturersimage}
                              alt={lecturer}
                              style={{ height: "150px" }}
                            />
                          </figure>
                        </td>
                      ) : null}
                    </tr>
                    <tr>
                      <th>講師</th>
                      <td>{lecturer}</td>
                    </tr>
                    <tr>
                      <th>開講部局</th>
                      <td>{department}</td>
                    </tr>
                    {lecturedate ? (
                      <tr>
                        <th>日時</th>
                        <td>{lecturedate}</td>
                      </tr>
                    ) : null}
                    {place ? (
                      <tr>
                        <th>場所</th>
                        <td>{place}</td>
                      </tr>
                    ) : null}
                    {/* {tags && tags.length ? (
                      <tr>
                        <th>タグ</th>
                        <td className="farewell_taglist">
                          {tags.map((tag) => (
                            <li key={tag + `tag`}>
                              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                            </li>
                          ))}
                        </td>
                      </tr>
                    ) : null} */}
                  </tbody>
                </table>
              </div>
            </div>

            {tags && tags.length ? (
              <div style={{ marginBottom: "2rem" }}>
                <h4>タグ</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`} className="d-inline-block m-1">
                      <Link
                        to={`/tags/${kebabCase(tag)}/`}
                        className="button is-outlined is-primary"
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                  {/*<li>
                    <Link to={`/tags`}>
                      <button className="button is-big">タグ一覧ページ</button>
                    </Link>
                  </li>*/}
                </ul>
              </div>
            ) : null}
            <PageContent content={content} />
            <RecommendRoll course_id={course_id} />
            <div style={{ marginTop: `1rem` }}>
              <h4>投稿日</h4>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
FarewellPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  attachments: PropTypes.object,
  tags: PropTypes.string,
  featuredimage: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  featuredimageURL: PropTypes.string,
  movie: PropTypes.string,
  date: PropTypes.string.isRequired,
  lecturedate: PropTypes.string,
  place: PropTypes.string,
  lecturersimage: PropTypes.string,
  lecturer: PropTypes.string,
  department: PropTypes.string,
  term: PropTypes.string,
  crumbs: PropTypes.array,
};
const FarewellPage = ({ data, pageContext }) => {
  const { markdownRemark: page } = data;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  return (
    <Layout>
      <FarewellPageTemplate
        content={page.html}
        contentComponent={HTMLContent}
        description={page.frontmatter.description}
        helmet={
          <HelmetForOGP
            title={page.frontmatter.title}
            category={"Farewell"}
            image={
              page.frontmatter.featuredimageURL ||
              `https://ocw.nagoya-u.jp${withPrefix(
                "/img/common/default_thumbnail.png"
              )}`
            }
            content={page.frontmatter.description}
          />
        }
        title={page.frontmatter.title}
        attachments={page.frontmatter.attachments}
        tags={page.frontmatter.tags}
        featuredimage={page.frontmatter.featuredimage}
        featuredimageURL={page.frontmatter.featuredimageURL}
        movie={page.frontmatter.movie}
        date={page.frontmatter.date}
        lecturedate={page.frontmatter.lecturedate}
        place={page.frontmatter.place}
        lecturersimage={page.frontmatter.lecturersimage}
        lecturer={page.frontmatter.lecturer}
        department={page.frontmatter.department}
        term={page.frontmatter.term}
        course_id={page.frontmatter.course_id}
        crumbs={crumbs}
      />
    </Layout>
  );
};
const StyledImg = styled(GatsbyImage)`
  margin-bottom: 1em;
`;
FarewellPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};
export default FarewellPage;
export const pageQuery = graphql`
  query FarewellPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        attachments {
          name
          path
        }
        tags
        featuredimage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        featuredimageURL
        movie
        date(formatString: "MMMM DD, YYYY")
        lecturedate
        lecturersimage
        place
        lecturer
        department
        term
        course_id
      }
    }
  }
`;
