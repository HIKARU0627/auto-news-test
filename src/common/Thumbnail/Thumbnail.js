import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Image from "./ThumbnailImage";
import { StaticImage } from "gatsby-plugin-image";

// カテゴリー名を受け取って、カテゴリー表示するコンポーネント
// 参考ページ：https://0forest.com/gatsby-category-image/

const ThumbnailImg = ({ name }) => {
  const data = useStaticQuery(
    graphql`
      query ThumbnailQuery {
        site {
          siteMetadata {
            categories {
              name
              slug
              image
            }
          }
        }
      }
    `
  );
  const category = data.site.siteMetadata.categories.find(
    (cat) => cat.name === name
  );
  if (!category) {
    return (
      <StaticImage
        src="../../../static/img/common/default_thumbnail.png"
        alt={`featured image thumbnail`}
        style={{
          width: "100%",
          maxWidth: "800px",
          aspectRatio: "16/9",
          objectFit: "contain",
        }}
        quality={100}
      />
    );
  } else {
    return <Image filename={category.image} alt={category.name} />;
  }
};

ThumbnailImg.propTypes = {
  name: PropTypes.string,
};

export default ThumbnailImg;
