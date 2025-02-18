import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Card from "@common/Card/Card";

const DepartmentCard = ({ post }) => {
  let link = post.fields.slug;
  let thumbnail = post.frontmatter.featuredimage ? (
    <GatsbyImage
      image={post.frontmatter.featuredimage.childImageSharp.gatsbyImageData}
      alt={`featured image thumbnail for post ${post.title}`}
      style={{
        width: "100%",
        maxWidth: "800px",
      }}
    />
  ) : (
    <StaticImage
      src="../../../static/img/common/default_thumbnail.png"
      alt={`featured image thumbnail for post ${post.title}`}
      quality={100}
      style={{
        width: "100%",
        maxWidth: "800px",
      }}
    />
  );
  let title = post.frontmatter.title;
  let explanation = post.frontmatter.subtitle;
  return (
    <Card
      link={link}
      thumbnail={thumbnail}
      title={title}
      explanation={explanation}
    />
  );
};

export default DepartmentCard;
