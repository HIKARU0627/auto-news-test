import React from "react";
import { withPrefix } from "gatsby";

import LayoutEn from "@common/Layout/LayoutEn";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import DepartmentRollEn from "@features/Department/DepartmentRollEn";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const DepartmentIndexPage = (props) => {
  const { pageContext, location } = props;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  return (
    <LayoutEn location={location}>
      <HelmetForOGPEn title={"Department"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header5.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          Department
        </h1>
      </div>

      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container">
          <div className="content">
            <DepartmentRollEn />
          </div>
        </div>
      </section>
    </LayoutEn>
  );
};

export default DepartmentIndexPage;
