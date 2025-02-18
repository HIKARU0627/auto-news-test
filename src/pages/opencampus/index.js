import React from "react";
import styled from "styled-components";
import { Link, withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const OpenCampusIndexPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  return (
    <Layout>
      <HelmetForOGP title={"オープンキャンパス"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header7.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          オープンキャンパス
        </h1>
      </div>
      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container column is-8-widescreen">
          <div className="content">
            <p className="has-text-centered">
              <h1 className="is-size-3-tablet is-size-4-mobile has-text-bold has-text-centered">
                最新のオープンキャンパス
              </h1>
              <div>
                <img
                  src={`${withPrefix("/img/opencampus/tobira/line.svg")}`}
                  alt=""
                />
              </div>
              去る2018年8月、名古屋大学にてオープンキャンパスが開催されました。ここではその模様を、一部紹介します。
            </p>
            <div className="column has-text-centered">
              <Link to="/opencampus/opencampus_2018/open_campus_2018">
                <Banner
                  src={`${withPrefix("/img/opencampus/tobira/campus2018.svg")}`}
                />
              </Link>
            </div>
            <p>
              <br />
              <br />
            </p>
            <p>
              <h1 className="is-size-3-tablet is-size-4-mobile has-text-bold has-text-centered">
                過去のオープンキャンパス
              </h1>
            </p>
            <div>
              <img
                src={`${withPrefix("/img/opencampus/tobira/line.svg")}`}
                alt=""
              />
            </div>
          </div>
          <div className="column has-text-centered">
            <Link to="/opencampus/opencampus_2018/open_campus_2018">
              <Banner
                src={`${withPrefix("/")}img/opencampus/tobira/campus2018.svg`}
              />
            </Link>
          </div>
          <div className="column">
            <Link to="/opencampus/opencampus_2017/open_campus_2017">
              <Banner
                src={`${withPrefix("/img/opencampus/tobira/campus2017.svg")}`}
              />
            </Link>
          </div>
          <p></p>
          <div className="column has-text-centered">
            <Link to="/opencampus/opencampus_2016/open_campus_2016">
              <Banner
                src={`${withPrefix("/img/opencampus/tobira/campus2016.svg")}`}
              />
            </Link>
          </div>
          <p></p>
          <div className="column has-text-centered">
            <Link to="/opencampus/opencampus_2015/open_campus_2015">
              <Banner
                src={`${withPrefix("/img/opencampus/tobira/campus2015.svg")}`}
              />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default OpenCampusIndexPage;

const Banner = styled.img`
  box-shadow: 0px 0px 5px #e5e5e5;
  &:hover {
    box-shadow: 0px 0px 20px #c0c0c0;
  }
`;
