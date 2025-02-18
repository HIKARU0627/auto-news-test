import React from "react";
import { withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import DepartmentRoll from "@features/Department/DepartmentRoll";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const DepartmentIndexPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  return (
    <Layout>
      <HelmetForOGP title={"学部／研究科一覧"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header5.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          学部／研究科一覧
        </h1>
      </div>
      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container">
          <div className="content">
            <DepartmentRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DepartmentIndexPage;
