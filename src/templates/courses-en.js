import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link, withPrefix } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import LayoutEn from "@common/Layout/LayoutEn";
import Content, { HTMLContent } from "@common/Content/Content";
import IframeMovie from "@common/IframeMovie";
import FavoriteButtonNormal from "@features/Mylist/FavoriteButtonNormal";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";
import RecommendEnRoll from "@features/Recommend/RecommendEnRoll";

const CourseEnTemplate = ({
  content,
  contentComponent,
  helmet,
  title,
  lecturer,
  department,
  subdepartment,
  term,
  target,
  classes,
  credit,
  tags,
  featuredimage,
  featuredimageURL,
  movie,
  date,
  id,
  course_id,
  crumbs,
  slug,
}) => {
  const PostContent = contentComponent || Content;
  const image = getImage(featuredimage);
  // const GatsbyThumbnailImage = getImage(thumbnail);

  return (
    <section className="section">
      {helmet || ""}
      <BreadcrumbBar crumbs={crumbs} />
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
                    <IframeMovie src={movie} />
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
                <div className="has-text-right">
                  <FavoriteButtonNormal id={id} slug={slug} />
                </div>
              </div>
            </div>

            {tags && tags.length ? (
              <div style={{ marginBottom: "2rem" }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`} className="d-inline-block m-1">
                      <Link
                        to={`/en/tags/${kebabCase(tag)}/`}
                        className="button is-outlined is-primary"
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                  {/*<li>
                    <Link to={`/en/tags`}>
                      <button className="button is-big">All tags</button>
                    </Link>
                  </li>*/}
                </ul>
              </div>
            ) : null}
            <PostContent content={content} />

            <RecommendEnRoll course_id={course_id} />
            <div style={{ marginTop: `1rem` }}>
              <h4>Last updated</h4>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const StyledImg = styled(Img)`
//   margin-bottom: 1em;
// `;

// CourseEnTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   contentComponent: PropTypes.func,
//   helmet: PropTypes.object,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   lecturer: PropTypes.string,
//   department: PropTypes.string,
//   term: PropTypes.string,
//   target: PropTypes.string,
//   classes: PropTypes.string,
//   credit: PropTypes.string,
//   attachments: PropTypes.object,
//   category: PropTypes.string,
//   tags: PropTypes.string,
//   featuredimage: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   movie: PropTypes.string,
//   date: PropTypes.string.isRequired,
//   thumbnail: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.string])
// };

const CourseEn = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { file: thumbnail } = data;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };

  return (
    <LayoutEn>
      {/* <Sidebar title={post.frontmatter.title} content={post.html} /> */}

      <CourseEnTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <HelmetForOGPEn
            title={post.frontmatter.title}
            category={"Course"}
            image={
              post.frontmatter.featuredimageURL ||
              `https://ocw.nagoya-u.jp${withPrefix(
                "/img/common/default_thumbnail.png"
              )}`
            }
            description={post.frontmatter.description}
          />
        }
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        lecturer={post.frontmatter.lecturer}
        department={post.frontmatter.department}
        subdepartment={post.frontmatter.subdepartment}
        term={post.frontmatter.term}
        target={post.frontmatter.target}
        classes={post.frontmatter.classes}
        credit={post.frontmatter.credit}
        attachments={post.frontmatter.attachments}
        category={post.frontmatter.category}
        tags={post.frontmatter.tags}
        featuredimage={post.frontmatter.featuredimage}
        featuredimageURL={post.frontmatter.featuredimageURL}
        movie={post.frontmatter.movie}
        date={post.frontmatter.date}
        thumbnail={thumbnail}
        id={post.id}
        crumbs={crumbs}
        slug={post.fields.slug}
      />
    </LayoutEn>
  );
};

CourseEn.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    file: PropTypes.object,
  }),
};

export default CourseEn;

export const pageQuery = graphql`
  query CoursesEnByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        templateKey
        title
        description
        lecturer
        department
        subdepartment
        term
        target
        classes
        credit
        attachments {
          name
          path
        }
        category
        tags
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 480
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        featuredimageURL
        movie
        date(formatString: "MMMM DD, YYYY")
        course_id
      }
    }
    file(
      relativePath: { eq: "../../static/img/common/default_thumbnail.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1024
          quality: 100
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
