import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Card from "@common/Card/Card";

const SpecialsCard = ({ post }) => {
  let link = post.frontmatter.specialsurl
    ? post.frontmatter.specialsurl
    : post.frontmatter.specialspath
    ? post.frontmatter.specialspath
    : "404";
  let thumbnail = (
    <GatsbyImage
      image={post.frontmatter.featuredimage.childImageSharp.gatsbyImageData}
      alt={`featured image thumbnail for post ${post.title}`}
      style={{
        width: "100%",
        maxWidth: "800px",
      }}
    />
  );
  let title = <>{post.frontmatter.title}</>;
  return <Card link={link} thumbnail={thumbnail} title={title} />;
};

export default SpecialsCard;
