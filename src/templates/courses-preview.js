import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
// import Layout from "../components/Layout";
// import Sidebar from "../components/Sidebar";
import Content from "../common/Content/Content"; // 絶対パスだとエラーが出る
import moment from "moment";

import "../common/styles/all.sass";
import "../common/styles/font.css";

export const CourseTemplatePreview = ({
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
                  <div>
                    {featuredimageURL ? (
                      <img src={featuredimageURL} alt="course"></img>
                    ) : featuredimage ? (
                      <StyledImg
                        image={featuredimage.childImageSharp.gatsbyImageData}
                        alt={title}
                      />
                    ) : (
                      // 元々はgatsby-imageを使ってこう書いていた
                      // <StyledImg
                      //   image={thumbnail.childImageSharp.gatsbyImageData}
                      //   alt={title}
                      // />
                      // gatsby-plugin-imageのStaticImageを使うとこう書ける (src and alt are required)
                      <StaticImage
                        src="../../static/img/common/default_thumbnail.png"
                        alt="default_image"
                      />
                      // URL絶対パスでも指定できる
                      // <StaticImage src="https://blog.kon-shou.com/static/d99e7aee4c3a832c7f28762cd0657377/a7715/gatsby.jpg" alt="please include an alt" />
                      // src/img以下に画像があるときはこう書く
                      // <StaticImage src="../img/logo.png" alt="please include an alt" />
                      // fixedにしたいならこう
                      // <StaticImage src="../img/logo.png" alt="please include an alt" layout="fixed" />
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
                          <th>講師</th>
                          <td>{lecturer}</td>
                        </tr>
                      ) : null}
                      {department ? (
                        <tr>
                          <th>開講部局</th>
                          <td>
                            {department} {term}
                          </td>
                        </tr>
                      ) : null}
                      {subdepartment && subdepartment.length ? (
                        <tr>
                          <th>関連部局</th>
                          <td>{subdepartment.join("、")}</td>
                        </tr>
                      ) : null}
                      {target ? (
                        <tr>
                          <th>対象者</th>
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
                          <th>タグ</th>
                          <td>
                            <ul className="course_taglist">
                              {tags.map((tag) => (
                                <li key={tag + `tag`}>
                                  <Link to={`/tags/${kebabCase(tag)}/`}>
                                    {tag}
                                  </Link>
                                </li>
                              ))}
                            </ul>
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
              <p>{dateFormat(date)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StyledImg = styled(GatsbyImage)`
  margin-bottom: 1em;
`;

CourseTemplatePreview.propTypes = {
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
  imageURL: PropTypes.string,
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

// export default CourseTemplateForPreview;

// export const pageQuery = graphql`
//   query CoursesByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         title
//         description
//         lecturer
//         department
//         term
//         target
//         classes
//         credit
//         attachments {
//           name
//           path
//         }
//         category
//         tags
//         featuredimage {
//           childImageSharp {
//             fluid(maxWidth: 1024, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         movie
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//     file(relativePath: { eq: "common/default_thumbnail.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1024, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
