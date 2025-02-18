import React from "react";
import { withPrefix } from "gatsby";

import LayoutEn from "@common/Layout/LayoutEn";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import NewsTableEn from "@features/News/NewsTableEn";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const NewsIndexPageEn = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };

  return (
    <LayoutEn>
      <HelmetForOGPEn title={"News"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header2.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          News
        </h1>
      </div>

      <section className="section">
        <div className="container">
          <BreadcrumbBar crumbs={crumbs} />
          <div className="content">
            <NewsTableEn />
          </div>
        </div>
      </section>
    </LayoutEn>
  );
};

export default NewsIndexPageEn;
