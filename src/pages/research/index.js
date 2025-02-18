import React from "react";
import { graphql, Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const ResearchIndexPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes;
  const latestPost = posts[0];
  const backnumber = posts.slice(1).reverse();

  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };

  return (
    <Layout>
      <HelmetForOGP title={"名大の研究指導"} />
      {/* ヘッダー画像 */}
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/img/research/header/header.jpg"
          )})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-2-mobile is-size-1-tablet has-text-centered">
            名大の研究指導
          </Title>
        </MesssageBox>
      </div>

      {/* メインコンテンツ */}
      <div className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-9 styled-title">
              {/* 名大の研究指導 */}
              <div>
                <h2 className="has-text-weight-bold is-size-4">
                  名大の研究指導
                </h2>
                <p className="m-3">
                  多くの学生が一度は経験する卒業研究。学生はゼミや研究室に所属し、指導教員や他の学生たちを関わり合いながら自分の研究を進めていきます。では、そもそも卒業研究とはどのようなものなのでしょうか？そして、教員はどのような思いで学生の指導にあたるのでしょうか？学生はどのような思いでその指導を受け止めるのでしょうか？
                </p>
              </div>

              {/* 最新記事 */}
              <div>
                <h2 className="has-text-weight-bold is-size-4 mt-6">
                  最新記事
                </h2>
                <div className="columns mt-3">
                  <div className="column is-full">
                    <h3 className="has-text-weight-bold is-size-5">
                      #{latestPost.frontmatter.articleNumber}{" "}
                      {latestPost.frontmatter.title}
                    </h3>
                    <p className="m-3">{latestPost.frontmatter.overview}</p>
                  </div>
                </div>
                <div
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  <Link to={latestPost.fields.slug}>最新記事を読む</Link>
                </div>
              </div>

              {/* バックナンバー */}
              <div>
                <h2 className="has-text-weight-bold is-size-4 mt-6">
                  バックナンバー
                </h2>
                <div className="columns is-multiline mt-3">
                  {
                    // 教授ページの情報を用いてバックナンバーを表示
                    backnumber.map((post) => {
                      return (
                        <div
                          className="column is-half mt-2"
                          key={post.frontmatter.articleNumber}
                        >
                          <BacknumberPanel>
                            <GrayLink to={post.fields.slug}>
                              <h4 className="has-text-weight-semibold p-5 my-1">
                                #{post.frontmatter.articleNumber}{" "}
                                {post.frontmatter.title}
                              </h4>
                            </GrayLink>
                          </BacknumberPanel>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResearchIndexPage;

const GrayLink = styled(Link)`
  color: #333333;
`;

const BacknumberPanel = styled.div`
  border: 1px solid #006e4f;
  transition: 0.3s;
  background: white;
  &:hover {
    box-shadow: 7px 11px 0px 0px rgba(0, 0, 0, 0.5);
    transform: translateY(-3px);
    text-decoration: underline;
  }
`;

const MesssageBox = styled.div`
  width: 80%;
  display: flex;
  line-height: 1;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
`;

const Title = styled.h1`
  text-shadow: 0px 0px 10px #2b2523;
  color: #ffffff;
  line-height: 1.5;
`;

// templateKeyがresearch-interviewかつstatusがteacherであるmdの情報を取得
export const pageQuery = graphql`
  query InterviewsByTemplateKey {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "research-interview" }
          status: { eq: "teacher" }
        }
      }
      sort: { frontmatter: { articleNumber: DESC } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          articleNumber
          overview
          title
        }
      }
    }
  }
`;
