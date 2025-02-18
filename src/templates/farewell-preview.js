import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
// import Helmet from "react-helmet";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// import Layout from "../components/Layout";
import Content from "../common/Content/Content"; // 絶対パスだとエラーが出る
import styled from "styled-components";

import "../common/styles/all.sass";
import "../common/styles/font.css";

export const FarewellTemplatePreview = ({
  content,
  contentComponent,
  //   description,
  tags,
  title,
  helmet,
  //以下Previewのみに付け足し. うまくいったらfarewell.jsにも追加.
  lecturer,
  department,
  term,
  //   credit,
  //   attachments,
  featuredimage,
  featuredimageURL,
  movie,
  date,
  //   thumbnail,
  lecturedate,
  place,
  lecturersimage,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>

            {movie ? (
              <div className="columns">
                <div className="column is-10">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "0",
                      paddingTop: "56.25%",
                    }}
                  >
                    <iframe
                      src={movie}
                      frameBorder="0"
                      allowfullscreen
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
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
            {/* without mobile */}
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

            {/*<p>{description}</p> */}
            <PageContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>タグ</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                  <li>
                    <Link to={`/tags`}>
                      <button className="button is-big">タグ一覧ページ</button>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}

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

FarewellTemplatePreview.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const StyledImg = styled(GatsbyImage)`
  margin-bottom: 1em;
`;
