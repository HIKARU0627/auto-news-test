import React from "react";
import { Helmet } from "react-helmet";

import useSiteMetadata from "@common/SiteMetadata";

const HelmetForOGP = ({ title, category, image, description }) => {
  const default_description = useSiteMetadata().description;
  // 定義されていない or 5文字以下 のときはデフォルトの文章にする
  const meta_description =
    !description || description.length <= 5 ? default_description : description;

  return (
    <Helmet>
      {/* タイトル */}
      {title && (
        <title>{`${title}${
          title === "NUOCW" ? "" : ` | ${category || "NUOCW"}`
        }`}</title>
      )}
      {title && (
        <meta
          property="og:title"
          content={`${title} | ${category || "NUOCW"}`}
        />
      )}
      {title && (
        <meta
          property="twitter:title"
          content={`${title} | ${category || "NUOCW"}`}
        />
      )}

      {/* 画像: 絶対パスで指定 */}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="twitter:image" content={image} />}

      {/* 詳細分 */}
      {/* SEO的にはページごとに指定できた方が良いが、Layout にあるものを上書きできないので、保留 */}
      <meta name="description" content={meta_description} />
      <meta property="og:description" content={meta_description} />
      <meta property="twitter:description" content={meta_description} />
    </Helmet>
  );
};

export default HelmetForOGP;
