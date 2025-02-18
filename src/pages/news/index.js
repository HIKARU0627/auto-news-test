import React from "react";
import { withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import NewsTable from "@features/News/NewsTable";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const NewsIndexPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  return (
    <Layout>
      <HelmetForOGP title={"お知らせ"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header2.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          お知らせ
        </h1>
      </div>
      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container">
          <div className="content">
            <NewsTable />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsIndexPage;
