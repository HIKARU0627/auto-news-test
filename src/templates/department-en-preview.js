import React from "react";
import PropTypes from "prop-types";
// import { graphql } from "gatsby";
import styled from "styled-components";

// import LayoutEn from "@common/Layout/LayoutEn";
import Content from "../common/Content/Content";
// import { BreadcrumbBar } from "@common/BreadCrumbBar";
// import CourseCard from "@common/Card/CourseCard";
// import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

import "../common/styles/all.sass";
import "../common/styles/font.css";

export const DepartmentEnTemplatePreview = ({
  content,
  contentComponent,
  title,
  subtitle,
  director,
  // courses,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const director_2rows = director ? director.split(", ") : [""];
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{subtitle}</p>
            <Description>
              {/* <input id="accordion" type="checkbox" />
              <label htmlFor="accordion">
                <input type="" />
              </label> */}
              <div className="container">
                <div style={{ paddingBottom: "1rem" }}>
                  {director_2rows.map((a, key) => (
                    <div className="has-text-right is-size-4" key={key}>
                      {a}
                    </div>
                  ))}
                </div>
                <PostContent content={content} />
              </div>
            </Description>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="content">
          <h2>Courses</h2>
          <div className="columns is-mobile is-multiline">
            {courses &&
              courses.map(({ node: post }) => (
                <LectureContainer
                  className="is-parent column is-12-mobile is-one-third-tablet is-one-quarter-desktop"
                  key={post.id}
                >
                  <CourseCard post={post} />
                </LectureContainer>
              ))}
          </div>
        </div>
      </div> */}
    </section>
  );
};

DepartmentEnTemplatePreview.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  departmentName: PropTypes.string,
  excerpt: PropTypes.string,
  courses: PropTypes.array,
  helmet: PropTypes.object,
  crumbs: PropTypes.array,
};

const Description = styled.div`
  position: relative;
  label {
    height: 70px; /* グラデーションの高さ */
    cursor: pointer;
    text-align: center;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 2;
    /* 以下グラデーションは「背景が白」に併せて設定しています */
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.95) 90%
    );
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.95) 90%
    );
    background: -o-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.95) 90%
    );
    background: -ms-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.95) 90%
    );
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.95) 90%
    );
  }
  input:checked + label {
    background: inherit; /* 開いた時には背景グラデーションを消す */
  }
  label:after {
    content: "Click to read more"; /* ラベルの文字 */
    letter-spacing: 0.05em;
    line-height: 2.5rem;
    position: absolute;
    bottom: 20px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    color: #fff;
    background-color: #000;
    width: 18.75rem;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }
  label:before {
    content: "↓";
    font-weight: 700;
    position: absolute;
    bottom: 30px;
    left: 50%;
    -webkit-transform: translate(-140px, 0);
    transform: translate(-140px, 0);
    background-color: #fff;
    z-index: 1;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  input {
    display: none;
  }
  .container {
    overflow: hidden;
    height: 400px; /* 開く前に見えている部分の高さ */
    -webkit-transition: all 0.1s;
    -moz-transition: all 0.1s;
    -ms-transition: all 0.1s;
    -o-transition: all 0.1s;
    transition: all 0.1s;
  }
  input:checked + label:after {
    content: "Click to close";
  }
  input:checked + label:before {
    content: "↑";
  }
  input:checked ~ .container {
    height: auto;
    padding-bottom: 80px; /* 閉じるボタンのbottomからの位置 */
    -webkit-transition: all 0.1s;
    -moz-transition: all 0.1s;
    -ms-transition: all 0.1s;
    -o-transition: all 0.1s;
    transition: all 0.1s;
  }
`;

// const DepartmentEn = ({ data, pageContext }) => {
//   const { markdownRemark: post } = data;
//   const { edges: postsOnDepartment } = data.coursesOnDepartment;
//   const { edges: postsOnSubepartment } = data.coursesOnSubdepartment;
//   const posts = postsOnDepartment.concat(postsOnSubepartment);
//   posts.sort((a, b) => {
//     if (a.node.frontmatter.date > b.node.frontmatter.date) return -1;
//     else return 1;
//   });
//   const {
//     breadcrumb: { crumbs },
//   } =
//     pageContext && pageContext.breadcrumb.crumbs.length
//       ? pageContext
//       : { breadcrumb: { crumbs: undefined } };

//   return (
//     <LayoutEn>
//       <BreadcrumbBar crumbs={crumbs} />
//       <DepartmentEnTemplate
//         content={post.html}
//         contentComponent={HTMLContent}
//         description={post.frontmatter.description}
//         helmet={
//           <HelmetForOGPEn
//             title={post.frontmatter.title}
//             description={post.frontmatter.description}
//           />
//         }
//         title={post.frontmatter.title}
//         subtitle={post.frontmatter.subtitle}
//         director={post.frontmatter.director}
//         departmentName={post.frontmatter.department}
//         excerpt={post.excerpt}
//         courses={posts}
//       />
//     </LayoutEn>
//   );
// };

// DepartmentEn.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//     coursesOnDepartment: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//     coursesOnSubdepartment: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// };

// const LectureContainer = styled.div`
//   @media (max-width: 768px) {
//     max-width: 50%;
//   }
//   @media (max-width: 512px) {
//     max-width: 100%;
//   }
// `;

// export default DepartmentEn;

// export const pageQuery = graphql`
//   query DepartmentsByIDEn($id: String!, $department: String) {
//     markdownRemark(id: { eq: $id }) {
//       excerpt(pruneLength: 140, truncate: true)
//       id
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         subtitle
//         director
//         department
//         subdepartment
//         description
//       }
//     }
//     coursesOnDepartment: allMarkdownRemark(
//       sort: { frontmatter: { date: DESC } }
//       filter: {
//         frontmatter: {
//           templateKey: { in: ["courses-en"] }
//           department: { eq: $department }
//         }
//       }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 140, truncate: true)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             templateKey
//             department
//             subdepartment
//             title
//             lecturer
//             term
//             date(formatString: "YYYY/MM/DD")
//             description
//             featuredpost
//             featuredimage {
//               childImageSharp {
//                 gatsbyImageData(width: 480, quality: 100, layout: CONSTRAINED)
//               }
//             }
//             featuredimageURL
//           }
//         }
//       }
//     }
//     coursesOnSubdepartment: allMarkdownRemark(
//       sort: { frontmatter: { date: DESC } }
//       filter: {
//         frontmatter: {
//           templateKey: { in: ["courses-en"] }
//           subdepartment: { eq: $department }
//         }
//       }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 140, truncate: true)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             templateKey
//             department
//             title
//             lecturer
//             term
//             date(formatString: "YYYY/MM/DD")
//             description
//             featuredpost
//             featuredimage {
//               childImageSharp {
//                 gatsbyImageData(width: 480, quality: 100, layout: CONSTRAINED)
//               }
//             }
//             featuredimageURL
//           }
//         }
//       }
//     }
//   }
// `;
