import React from "react";
import ThumbnailImg from "@common/Thumbnail/Thumbnail";
import { GatsbyImage } from "gatsby-plugin-image";
import Card from "@common/Card/Card";

const CourseCard = ({ post }) => {
  let link = post.fields.slug;
  let thumbnail = post.frontmatter.featuredimageURL ? (
    <img
      src={post.frontmatter.featuredimageURL}
      alt=""
      style={{
        width: "100%",
        maxWidth: "800px",
        aspectRatio: "16/9",
        objectFit: "contain",
      }}
    ></img>
  ) : post.frontmatter.featuredimage ? (
    <GatsbyImage
      image={post.frontmatter.featuredimage.childImageSharp.gatsbyImageData}
      alt={`featured image thumbnail for post ${post.title}`}
      style={{
        width: "100%",
        maxWidth: "800px",
      }}
    />
  ) : (
    <ThumbnailImg name={post.frontmatter.department} />
  );
  let title = post.frontmatter.title;
  let subtitle = (
    <>
      {post.frontmatter.department ? (
        <div>{post.frontmatter.department}</div>
      ) : null}
      {post.frontmatter.lecturer ? (
        <div>
          {post.frontmatter.lecturer.length > 20
            ? post.frontmatter.lecturer.slice(0, 20) + " …"
            : post.frontmatter.lecturer}
        </div>
      ) : null}
    </>
  );

  let date = post.frontmatter.date ? (
    <div>
      <br />
      {post.frontmatter.templateKey === "courses-en"
        ? "Last updated: "
        : "最終更新日: "}
      {post.frontmatter.date}
    </div>
  ) : null;
  return (
    <Card
      link={link}
      thumbnail={thumbnail}
      title={title}
      subtitle={subtitle}
      date={date}
    />
  );
};

export default CourseCard;
