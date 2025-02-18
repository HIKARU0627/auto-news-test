import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Card from "@common/Card/Card";

const TopicsCard = ({ post }) => {
  let link = post.fields.slug;
  let thumbnail = post.frontmatter.featuredimage ? (
    <GatsbyImage
      image={post.frontmatter.featuredimage.childImageSharp.gatsbyImageData}
      alt={`featured image thumbnail for post ${post.title}`}
    />
  ) : (
    <StaticImage
      src="../../../static/img/common/default_thumbnail.png"
      alt={`featured image thumbnail for post ${post.title}`}
      style={{
        width: "100%",
        maxWidth: "800px",
      }}
      quality={100}
    />
  );
  let title = (
    <>
      {/* 【Topics No.{post.frontmatter.number}】<br />
      {post.frontmatter.title} */}

      {post.frontmatter.number ? (
        <div>
          【Topics No.{post.frontmatter.number}】{post.frontmatter.title}{" "}
        </div>
      ) : post.frontmatter.extra_number ? (
        <div>
          {/* 【番外編 No.{post.frontmatter.extra_number}】{post.frontmatter.title} */}
          【番外編】{post.frontmatter.title}
        </div>
      ) : null}
    </>
  );
  return <Card link={link} thumbnail={thumbnail} title={title} />;
};

export default TopicsCard;
