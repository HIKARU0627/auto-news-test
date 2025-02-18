import React from "react";
import { withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import SpecialsRoll from "@features/Specials/SpecialsRoll";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Specials = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };

  return (
    <Layout>
      <HelmetForOGP title={"過去の特集ページ"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header2.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          過去の特集ページ
        </h1>
      </div>
      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container">
          <div className="content">
            <div>
              <SpecialsRoll />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Specials;
