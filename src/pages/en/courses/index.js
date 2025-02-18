import React from "react";
import { withPrefix } from "gatsby";

import LayoutEn from "@common/Layout/LayoutEn";
import CourseEnRoll from "@features/Course/CourseEnRoll";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const CourseEnIndexPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  return (
    <LayoutEn>
      <HelmetForOGPEn title={"courses"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header3.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          courses
        </h1>
      </div>

      <section className="section">
        <div className="container">
          <BreadcrumbBar crumbs={crumbs} />
          <div className="content">
            <CourseEnRoll />
          </div>
        </div>
      </section>
    </LayoutEn>
  );
};

export default CourseEnIndexPage;
