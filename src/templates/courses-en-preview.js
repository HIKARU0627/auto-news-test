import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
// import styled from "styled-components";
// import Layout from "../components/Layout";
// import Sidebar from "../components/Sidebar";
import Content from "../common/Content/Content"; // 絶対パスだとエラーが出る
// import IframeMovie from "../components/IframeMovie";
import moment from "moment";

import "../common/styles/all.sass";
import "../common/styles/font.css";

export const CourseEnTemplatePreview = ({
  content,
  contentComponent,
  helmet,
  title,
  //   description,
  lecturer,
  department,
  subdepartment,
  term,
  target,
  classes,
  credit,
  //   attachments,
  //   category,
  tags,
  featuredimage,
  featuredimageURL,
  movie,
  date,
  //   thumbnail,
}) => {
  const PostContent = contentComponent || Content;
  const image = getImage(featuredimage);
  const dateFormat = (date) => {
    return moment(date).format("YYYY.MM.DD");
  };

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light is-vcentered">
              {title}
            </h1>
            <div className="columns is-vcentered">
              <div className="column is-two-fifths">
                {movie ? (
                  <div>
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
                ) : (
                  // <div>{featuredimage ? <GatsbyImage image={image} alt={title} /> : <GatsbyImage image={GatsbyThumbnailImage} alt={title} />}</div>
                  <div>
                    {featuredimageURL ? (
                      <img src={featuredimageURL} alt="course"></img>
                    ) : featuredimage ? (
                      <GatsbyImage image={image} alt={title} />
                    ) : (
                      <StaticImage
                        src="../../static/img/common/default_thumbnail.png"
                        alt="A dinosaur"
                        placeholder="blurred"
                        width={1024}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="column">
                {lecturer || department || target ? (
                  <table className="table is-striped is-fullwidth">
                    <tbody>
                      {lecturer ? (
                        <tr>
                          <th>Lecturer</th>
                          <td>{lecturer}</td>
                        </tr>
                      ) : null}
                      {department ? (
                        <tr>
                          <th>Department</th>
                          <td>
                            {department}, {term}
                          </td>
                        </tr>
                      ) : null}
                      {subdepartment && subdepartment.length ? (
                        <tr>
                          <th>Related department</th>
                          <td>{subdepartment.join(", ")}</td>
                        </tr>
                      ) : null}
                      {target ? (
                        <tr>
                          <th>Recommended for:</th>
                          <td>
                            {target}
                            {credit || classes ? " (" : null}
                            {credit}
                            {credit && classes ? "・" : null}
                            {classes}
                            {credit || classes ? ")" : null}
                          </td>
                        </tr>
                      ) : null}
                      {/* {tags && tags.length ? (
                        <tr>
                          <th>Tags</th>
                          <td className="course_taglist">
                            {tags.map((tag) => (
                              <li key={tag + `tag`}>
                                <Link to={`/en/tags/${kebabCase(tag)}/`}>
                                  {tag}
                                </Link>
                              </li>
                            ))}
                          </td>
                        </tr>
                      ) : null} */}
                    </tbody>
                  </table>
                ) : null}
                <div className="has-text-right"></div>
              </div>
            </div>

            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{}}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/en/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                  <li>
                    <Link to={`/en/tags`}>
                      <button className="button is-big">All tags</button>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}

            <div style={{ marginTop: `1rem` }}>
              <h4>Last updated</h4>
              <p>{dateFormat(date)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CourseEnTemplatePreview.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  lecturer: PropTypes.string,
  department: PropTypes.string,
  subdepartment: PropTypes.string,
  term: PropTypes.string,
  target: PropTypes.string,
  classes: PropTypes.string,
  credit: PropTypes.string,
  attachments: PropTypes.object,
  category: PropTypes.string,
  tags: PropTypes.string,
  featuredimage: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  movie: PropTypes.string,
  date: PropTypes.string.isRequired,
  thumbnail: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

// const CourseTemplateForPreview = ({ data }) => {
//   const { markdownRemark: post } = data;
//   const { file: thumbnail } = data;

//   return (
//     <Layout>
//       <Sidebar title={post.frontmatter.title} content={post.html} />
//       <CourseTemplatePreview
//         content={post.html}
//         contentComponent={HTMLContent}
//         helmet={
//           <Helmet titleTemplate="%s | Courses">
//             <title>{`${post.frontmatter.title}`}</title>
//             <meta
//               name="description"
//               content={`${post.frontmatter.description}`}
//             />
//           </Helmet>
//         }
//         title={post.frontmatter.title}
//         description={post.frontmatter.description}
//         lecturer={post.frontmatter.lecturer}
//         department={post.frontmatter.department}
//         term={post.frontmatter.term}
//         target={post.frontmatter.target}
//         classes={post.frontmatter.classes}
//         credit={post.frontmatter.credit}
//         attachments={post.frontmatter.attachments}
//         category={post.frontmatter.category}
//         tags={post.frontmatter.tags}
//         featuredimage={post.frontmatter.featuredimage}
//         movie={post.frontmatter.movie}
//         date={post.frontmatter.date}
//         thumbnail={thumbnail}
//       />
//     </Layout>
//   );
// };

// CourseTemplateForPreview.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//     file: PropTypes.object,
//   }),
// };
