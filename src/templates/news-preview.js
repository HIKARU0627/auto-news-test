import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Content from "../common/Content/Content"; // 絶対パスだとエラーが出る
import moment from "moment";

import "../common/styles/all.sass";
import "../common/styles/font.css";

export const NewsTemplatePreview = ({
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
}) => {
  const PageContent = contentComponent || Content;
  // const switchTypePage = (type) => {
  //   switch (type) {
  //     case "courses":
  //       return (
  //         <span className="column is-2-tablet tag is-link  has-text-white-bis has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
  //           授業
  //         </span>
  //       );
  //     case "topics":
  //       return (
  //         <span className="column is-2-tablet tag is-success  has-text-white-bis has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
  //           特集
  //         </span>
  //       );
  //     case "farewell":
  //       return (
  //         <span className="column  is-2-tablet tag  is-danger  has-text-white-bis has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
  //           退職講義
  //         </span>
  //       );
  //     case "special":
  //       return (
  //         <span className=" column is-2-tablet tag is-info  has-text-white-bis has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
  //           特別講義
  //         </span>
  //       );
  //     default:
  //       return (
  //         <span className="column is-2-tablet tag is-dark has-text-white-bis   has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
  //           その他
  //         </span>
  //       );
  //   }
  // };

  const dateFormat = (date) => {
    return moment(date).format("YYYY.MM.DD");
  };

  const switchTypeTable = (type) => {
    switch (type) {
      case "courses":
        return (
          <div className="tag is-link has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
            　授業
          </div>
        );
      case "topics":
        return (
          <div className="tag is-success has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
            　特集
          </div>
        );
      case "farewell":
        return (
          <div className="tag is-danger has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
            退職講義
          </div>
        );
      case "special":
        return (
          <div className="tag is-info has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
            特別講義
          </div>
        );
      default:
        return (
          <div className="tag is-dark has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
            {" "}
            その他　{" "}
          </div>
        );
    }
  };

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns is-multiline is-mobile">
          {/* サイズ識別　mobile or tablet */}

          {/* Newsページ */}
          <div className="column is-full">
            <span className="is-light　 is-4  tag  is-light  has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
              ページ
            </span>
          </div>
          <div className="column is-full box">
            <div className=" column">
              <div className="column is-10 is-offset-1">
                <div className="columns is-multiline is-mobile">
                  {/* title-type */}
                  <div className="column is-full">
                    <div className="columns is-mobile is-vcentered ">
                      {/* type */}
                      {/* {switchTypePage(type)} */}
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
                            <Link to={`/categories/${kebabCase(tag)}/`}>
                              {tag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {/* date */}
                  <div className="column is-full">
                    <h4>投稿日</h4>
                    <p>{dateFormat(date)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* トップページ表示 */}
          <div className="column is-full">
            <span className="is-light　 is-4  tag  is-light  has-text-weight-bold is-size-4-tablet is-size-5-mobile has-text-centered">
              トップページ
            </span>
          </div>
          <div className="column is-full box">
            <div className="add-padding-bottom">
              <div className="column is-12 add-padding-bottom">
                <h2 className="has-text-weight-semrtibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-h2">
                  更新情報
                  <a
                    style={{ position: `absolute`, right: `0` }}
                    className="btn is-hidden-touch"
                    to="/news"
                    href="# "
                  >
                    More...
                  </a>
                </h2>
                {/* <NewsTopTable /> */}
                <div>
                  <table className="table is-hoverable">
                    <tbody>
                      {/* 編集中の更新内容 */}
                      <tr className="is-hidden-mobile  is-size-5-tablet is-size-4-widescreen">
                        <td style={{ width: `15%` }}>
                          <div>{dateFormat(date)}</div>
                        </td>
                        <td style={{ width: `15%` }}>
                          {switchTypeTable(type)}
                        </td>
                        <td style={{ width: `70%` }}>
                          <div>
                            <a href="# ">{title}</a>
                          </div>
                        </td>
                      </tr>
                      <tr className="is-size-7-mobile is-hidden-tablet">
                        <td>
                          <div className="columns is-multiline is-mobile is-vcentered">
                            <div className="column is-4">
                              <div>{dateFormat(date)}</div>
                              {/*className="has-text-centered"*/}
                              {switchTypeTable(type)}
                            </div>
                            <div className="column is-8 ">
                              <a href="# ">{title}</a>
                            </div>
                          </div>
                        </td>
                      </tr>

                      {/* サンプル1 授業*/}
                      <tr className="is-hidden-mobile  is-size-5-tablet is-size-4-widescreen">
                        <td style={{ width: `15%` }}>
                          <div>2020.05.09</div>
                        </td>
                        <td style={{ width: `15%` }}>
                          <div className="tag is-link has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                            　授業
                          </div>
                        </td>
                        <td style={{ width: `70%` }}>
                          <div>
                            <a href="# ">量子力学Ⅱ　サンプル</a>
                          </div>
                        </td>
                      </tr>
                      <tr className="is-size-7-mobile is-hidden-tablet">
                        <td>
                          <div className="columns is-multiline is-mobile is-vcentered">
                            <div className="column is-4">
                              <div>2020.05.09</div>
                              <div className="tag is-link has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                                　授業
                              </div>
                            </div>
                            <div className="column is-8 ">
                              <a href="# ">量子力学Ⅱ　サンプル</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/* サンプル2 特集*/}
                      <tr className="is-hidden-mobile  is-size-5-tablet is-size-4-widescreen">
                        <td style={{ width: `15%` }}>
                          <div>2020.05.08</div>
                        </td>
                        <td style={{ width: `15%` }}>
                          <div className="tag is-success has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                            　特集
                          </div>
                        </td>
                        <td style={{ width: `70%` }}>
                          <div>
                            <a href="# ">Topics　7　サンプル</a>
                            {/* href="/news/"*/}
                          </div>
                        </td>
                      </tr>
                      <tr className="is-size-7-mobile is-hidden-tablet">
                        <td>
                          <div className="columns is-multiline is-mobile is-vcentered">
                            <div className="column is-4">
                              <div>2020.05.08</div>
                              <div className="tag is-success has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                                　特集
                              </div>
                            </div>
                            <div className="column is-8 ">
                              <a href="# ">Topics　7　サンプル</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/* サンプル3 退職講義*/}
                      <tr className="is-hidden-mobile  is-size-5-tablet is-size-4-widescreen">
                        <td style={{ width: `15%` }}>
                          <div>2020.05.07</div>
                        </td>
                        <td style={{ width: `15%` }}>
                          <div className="tag is-danger has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                            退職講義
                          </div>
                        </td>
                        <td style={{ width: `70%` }}>
                          <div>
                            <a href="# ">田中優人先生　最終講義　サンプル </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="is-size-7-mobile is-hidden-tablet">
                        <td>
                          <div className="columns is-multiline is-mobile is-vcentered">
                            <div className="column is-4">
                              <div>2020.05.07</div>
                              <div className="tag is-danger has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                                退職講義
                              </div>
                            </div>
                            <div className="column is-8 ">
                              <a href="# ">田中優人先生　最終講義　サンプル</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/* サンプル4 特別講義*/}
                      <tr className="is-hidden-mobile  is-size-5-tablet is-size-4-widescreen">
                        <td style={{ width: `15%` }}>
                          <div>2020.05.04</div>
                        </td>
                        <td style={{ width: `15%` }}>
                          <div className="tag is-info has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                            特別講義
                          </div>
                        </td>
                        <td style={{ width: `70%` }}>
                          <div>
                            <a href="# ">
                              天野先生　特別講義　これからの日本の研究環境について　サンプル
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="is-size-7-mobile is-hidden-tablet">
                        <td>
                          <div className="columns is-multiline is-mobile is-vcentered">
                            <div className="column is-4">
                              <div>2020.05.04</div>
                              <div className="tag is-info has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                                特別講義
                              </div>
                            </div>
                            <div className="column is-8 ">
                              <a href="# ">
                                天野先生　特別講義　これからの日本の研究環境について　サンプル
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/* サンプル5 その他*/}
                      <tr className="is-hidden-mobile  is-size-5-tablet is-size-4-widescreen">
                        <td style={{ width: `15%` }}>
                          <div>2020.05.01</div>
                        </td>
                        <td style={{ width: `15%` }}>
                          <div className="tag is-dark has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                            {" "}
                            その他　{" "}
                          </div>
                        </td>
                        <td style={{ width: `70%` }}>
                          <div>
                            <a href="# ">
                              コロナウィルス対策　特別補習講座　サンプル
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="is-size-7-mobile is-hidden-tablet">
                        <td>
                          <div className="columns is-multiline is-mobile is-vcentered">
                            <div className="column is-4">
                              <div>2020.05.01</div>
                              <div className="tag is-dark has-text-white-bis is-size-7-mobile is-size-5-tablet  has-text-centered">
                                {" "}
                                その他　{" "}
                              </div>
                            </div>
                            <div className="column is-8 ">
                              <a href="# ">
                                コロナウィルス対策　特別補習講座　サンプル
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link className="is-hidden-desktop" to="/news">
                  <button className="button is-light is-fullwidth">
                    More...
                  </button>
                </Link>
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

NewsTemplatePreview.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
  type: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  featuredimage: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};
