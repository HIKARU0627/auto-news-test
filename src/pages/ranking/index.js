import React from "react";
import { withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import RankingRoll from "@features/Ranking/RankingRoll";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const RankingIndexPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  return (
    <Layout>
      <HelmetForOGP title={"人気講義"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header3.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          人気講義
        </h1>
      </div>
      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container">
          <div className="content">
            <RankingRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RankingIndexPage;
