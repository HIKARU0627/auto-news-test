import React from "react";
import { Link, graphql, StaticQuery, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import LabIntroRoll from "@features/Specials/LabIntroRoll";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const LabIntroIndexPage = ({ data }) => {
  const { edges: contents } = data.allLabIntroIndexJson;
  return (
    <Layout>
      <HelmetForOGP
        title={"名大の研究室紹介"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/specials/LabIntro_kanban.png"
        )}`}
      />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header3.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          名大の研究室紹介
        </h1>
      </div>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h2>"研究室ってどんなところだろう？"</h2>
              <div className="is-6">
                大学といえば？講義にサークル活動、そして「研究」ですね！
              </div>
              <div className="is-6">
                名大では様々な分野で、世界の最先端をいく研究が進められています。
              </div>
              <div className="is-6">
                そんな研究室の様子をちょっとだけ覗いてみませんか？
              </div>
              <h2>動画一覧</h2>
              <div className="is-6">
                学部名をクリックすると学部ごとに動画の絞り込みができます
              </div>
              {/* From 769px */}
              <div className="content is-hidden-mobile">
                <div className="columns" style={{ marginTop: `1rem` }}>
                  <TabItem
                    to={withPrefix("/specials/labintro")}
                    className="column checked"
                  >
                    トップ
                  </TabItem>
                  <TabItem
                    to={withPrefix("/specials/labintro/lite")}
                    className="column"
                  >
                    文学部
                  </TabItem>
                  <TabItem
                    to={withPrefix("/specials/labintro/scie")}
                    className="column"
                  >
                    理学部
                  </TabItem>
                  <TabItem
                    to={withPrefix("/specials/labintro/engi")}
                    className="column"
                  >
                    工学部
                  </TabItem>
                  <TabItem
                    to={withPrefix("/specials/labintro/agri")}
                    className="column"
                  >
                    農学部
                  </TabItem>
                </div>
                <LabIntroRoll contents={contents} />
              </div>
              {/* Up to 768px */}
              <div className="content is-hidden-tablet">
                <div
                  className="columns is-mobile"
                  style={{ marginTop: `1rem` }}
                >
                  <TabItem
                    to={withPrefix("/specials/labintro")}
                    className="column checked mobile"
                  >
                    トップ
                  </TabItem>
                  <TabItem
                    to={withPrefix("/specials/labintro/lite")}
                    className="column mobile"
                  >
                    文学部
                  </TabItem>
                  <TabItem
                    to={withPrefix("/specials/labintro/scie")}
                    className="column mobile"
                  >
                    理学部
                  </TabItem>
                  <TabItem
                    to={withPrefix("/specials/labintro/engi")}
                    className="column mobile"
                  >
                    工学部
                  </TabItem>
                  <TabItem
                    to={withPrefix("/specials/labintro/agri")}
                    className="column mobile"
                  >
                    農学部
                  </TabItem>
                </div>
                <LabIntroRoll contents={contents} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const TabItem = styled(Link)`
  display: inline-block;
  border-bottom: 2px solid #006e4f;
  background-color: #ffffff;
  line-height: 60px;
  font-size: 1.25rem;
  color: #565656;
  font-weight: bold;
  float: left;
  text-align: center;
  &:hover {
    background-color: #76ae9f;
    color: #002b1f;
  }
  &.checked {
    background-color: #006e4f;
    color: white;
  }
  &.mobile {
    font-size: 1rem;
  }
`;

const LabIntroIndexPageQuery = () => (
  <StaticQuery
    query={graphql`
      query LabIntroIndexPageQuery {
        allLabIntroIndexJson {
          edges {
            node {
              video
              img
              department
              labname
            }
          }
        }
      }
    `}
    render={(data) => <LabIntroIndexPage data={data} />}
  />
);

export default LabIntroIndexPageQuery;
