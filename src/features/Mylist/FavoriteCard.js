import React from "react";
import { Link } from "gatsby";
import ThumbnailImg from "@common/Thumbnail/Thumbnail";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import FavoriteButtonNormal from "./FavoriteButtonNormal";
import FavoriteButtonSimple from "./FavoriteButtonSimple";

const FavoriteCard = ({ post }) => {
  let description = post.frontmatter.description ?? "";
  if (description.endsWith("....")) {
    description = description.slice(0, -5);
  }

  return (
    <div className="tile is-8 is-parent">
      <Link to={post.fields.slug} className="tile">
        <article className="course-list-item tile box notification add-hoverable">
          <header className="columns tile" style={{ display: "flex" }}>
            <div
              style={{
                width: "40%",
                padding: "0.75rem",
                display: "grid",
                alignContent: "space-between",
              }}
            >
              {post.frontmatter.featuredimageURL ? (
                <img
                  src={post.frontmatter.featuredimageURL}
                  alt=""
                  style={{ gridArea: "1/1" }}
                ></img>
              ) : post.frontmatter.featuredimage ? (
                <div style={{ gridArea: "1/1" }}>
                  <GatsbyImage
                    image={
                      post.frontmatter.featuredimage.childImageSharp
                        .gatsbyImageData
                    }
                    alt={`featured image thumbnail for post ${post.title}`}
                  />
                </div>
              ) : (
                <div style={{ gridArea: "1/1" }}>
                  <ThumbnailImg name={post.frontmatter.department} />
                </div>
              )}
              <div
                className="is-hidden-tablet"
                style={{
                  gridArea: "1/1",
                  justifySelf: "end",
                  alignSelf: "end",
                  zIndex: 1,
                }}
              >
                <FavoriteButtonSimple id={post.id} slug={post.fields.slug} />
              </div>
              <div
                className="is-hidden-mobile"
                style={{
                  gridArea: "1/1",
                  justifySelf: "end",
                  alignSelf: "end",
                  zIndex: 1,
                }}
              >
                <FavoriteButtonNormal id={post.id} slug={post.fields.slug} />
              </div>
            </div>

            <div
              className="post-meta column"
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LineClamp
                as="h3"
                className="is-size-5 is-size-6-mobile"
                lines="2"
              >
                {post.frontmatter.title}
              </LineClamp>
              {post.frontmatter.department ? (
                <div className="is-size-6  is-hidden-mobile">
                  <p>{post.frontmatter.department}</p>
                </div>
              ) : null}
              {post.frontmatter.lecturer ? (
                <div className="is-size-6 is-size-7-mobile">
                  <LineClamp lines="2">{post.frontmatter.lecturer}</LineClamp>
                </div>
              ) : null}
              {post.frontmatter.term ? (
                <div className="is-size-6 is-size-7-mobile">
                  <p>{post.frontmatter.term}</p>
                </div>
              ) : null}
              {post.frontmatter.description ? (
                <div
                  className="is-size-6 is-hidden-mobile"
                  style={{ flexGrow: "1" }}
                >
                  <LineClamp lines="4">{description}</LineClamp>
                </div>
              ) : null}
              {post.frontmatter.date ? (
                <div
                  className="is-hidden-mobile"
                  style={{
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "flex-end",
                  }}
                >
                  <p>
                    {post.frontmatter.templateKey === "courses-en"
                      ? "Last updated: "
                      : "最終更新日: "}
                    {post.frontmatter.date}
                  </p>
                </div>
              ) : null}
            </div>
          </header>
        </article>
      </Link>
    </div>
  );
};

const LineClamp = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.lines ? props.lines : 2)};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default FavoriteCard;
