import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

// 画像名を受け取って、画像を表示するコンポーネント
// 参考ページ：https://0forest.com/gatsby-category-image/

const Image = (props) => {
  const catImages = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "png" }
          sourceInstanceName: { eq: "uploads" }
          relativeDirectory: { eq: "thumbnail" }
        }
      ) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              gatsbyImageData(width: 800, quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);
  const image = catImages.allFile.edges.find((n) => {
    return n.node.relativePath.includes(props.filename);
  });
  if (!image) {
    return (
      <StaticImage
        src="../../../static/img/common/default_thumbnail.png"
        alt={`featured image thumbnail`}
        width={480}
        quality={100}
      />
    );
  }
  return (
    <div>
      {/* <Img
        fluid={imageFluid}
        alt={props.alt}
      /> */}
      <GatsbyImage
        image={image.node.childImageSharp.gatsbyImageData}
        alt={`featured image thumbnail for post ${props.alt}`}
      />
    </div>
  );
};

Image.propTypes = {
  data: PropTypes.shape({
    allfile: PropTypes.shape({
      edges: PropTypes.array,
    }),
    file: PropTypes.object,
  }),
};

export default Image;
