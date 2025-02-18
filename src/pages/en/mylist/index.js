import React from "react";
import { withPrefix } from "gatsby";

import LayoutEn from "@common/Layout/LayoutEn";
import FavoriteRollEn from "@features/Mylist/FavoriteRollEn";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGP";

const FavoriteIndexPage = () => {
  return (
    <LayoutEn>
      <HelmetForOGPEn title={"My List"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/blog-index.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          My List
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <FavoriteRollEn />
          </div>
        </div>
      </section>
    </LayoutEn>
  );
};
export default FavoriteIndexPage;
