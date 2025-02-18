import React, { useRef } from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import "bulma/css/bulma.css";

import Layout from "@common/Layout/Layout";
import Result from "@features/Search/SearchResult";
import PaginationButton from "@features/Search/PaginationButton";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";
import useSearch from "@features/Search/hooks/useSearch";

const termOption = () => {
  let termList = [];
  //現在の日付けを取得
  const now = new Date();

  const nowYear = now.getFullYear();
  const oldestYear = 2005;
  for (let i = oldestYear; i <= nowYear; i++) {
    termList.push(i.toString());
  }
  return termList;
};

const Search = (props) => {
  const { data, pageContext } = props;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  const { edges: posts } = data.allMarkdownRemark;

  // 検索オプションのref
  const keywordRef = useRef(null);
  const departmentRef = useRef(null);
  const languageRef = useRef(null);
  const termRef = useRef(null);
  const typeRef = useRef(null);
  const sortvalRef = useRef(null);

  // 検索
  const { resultData, pageNum, totalResultNum } = useSearch(
    keywordRef,
    departmentRef,
    languageRef,
    termRef,
    typeRef,
    sortvalRef
  );

  // 検索のオプションをリセットする関数
  const handleOptionReset = () => {
    keywordRef.current.value = "";
    departmentRef.current.value = "";
    languageRef.current.value = "";
    typeRef.current.value = "";
    termRef.current.value = "";
    sortvalRef.current.value = "";
  };

  // ソートの基準が変わった時に発火する関数
  const handleSortValChange = () => {
    handleSearch();
  };

  // 検索時に発火する関数
  const handleSearch = () => {
    let params = {
      keyword: keywordRef.current.value,
      department: departmentRef.current.value,
      language: languageRef.current.value,
      type: typeRef.current.value,
      term: termRef.current.value,
      sort: sortvalRef.current.value,
    };
    const urlSearchParam = new URLSearchParams(params).toString();
    document.location.href = `${withPrefix("/search?")}${urlSearchParam}`;
  };

  return (
    <Layout>
      <HelmetForOGP title={"講義検索"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header4.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold -widescreen is-size-2-tablet is-size-3-mobile header-title">
          講義検索
        </h1>
      </div>
      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container">
          <div className="box p-5">
            <div className="columns is-vcentered py-2">
              <div className="column is-one-quarter mb-2 pb-0">キーワード</div>
              <div className="column pb-0">
                <input
                  type="search"
                  placeholder="キーワードを入力してください"
                  className="input"
                  ref={keywordRef}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSearch();
                    }
                  }}
                />
              </div>
            </div>
            <div className="columns is-vcentered is-mobile py-2">
              <div className="column">
                <div className="columns is-vcentered ">
                  <div className="column is-half mb-2 pb-0">開講学部</div>
                  <div className="column pb-0">
                    <div className="select is-primary is-fullwidth">
                      <select ref={departmentRef}>
                        <option value="">すべて</option>
                        {posts.map(({ node: post }) => {
                          return (
                            <option
                              value={post.frontmatter.department}
                              key={post.id}
                            >
                              {post.frontmatter.department}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="columns is-vcentered ">
                  <div className="column is-half mb-2 pb-0">言語</div>
                  <div className="column pb-0">
                    <div className="select is-primary is-fullwidth">
                      <select ref={languageRef}>
                        <option value="">すべて</option>
                        <option value="ja">日本語</option>
                        <option value="en">英語</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-vcentered is-mobile py-2">
              <div className="column">
                <div className="columns is-vcentered ">
                  <div className="column is-half mb-2 pb-0">開講形式</div>
                  <div className="column pb-0">
                    <div className="select is-primary is-fullwidth">
                      <select ref={typeRef}>
                        <option value="">すべて</option>
                        <option value="courses">通常講義</option>
                        <option value="farewell">最終講義</option>
                        {/* <option value="courses-en">英語講義</option> */}
                        {/* <option value="others">その他</option> */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="columns is-vcentered ">
                  <div className="column is-half mb-2 pb-0">年度</div>
                  <div className="column pb-0">
                    <div className="select is-primary is-fullwidth">
                      <select ref={termRef}>
                        <option value="">すべて</option>
                        {termOption().map((term, index) => (
                          <option key={index} value={term}>
                            {term + "年度"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns py-2">
              <div className="column">
                <button
                  className="button is-fullwidth is-primary"
                  onClick={handleSearch}
                >
                  検索
                </button>
              </div>
              <div className="column">
                <button
                  className="button is-fullwidth"
                  onClick={handleOptionReset}
                >
                  リセット
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="columns is-vcentered px-2">
              <div className="column is-size-5">
                {totalResultNum > 0
                  ? `講義が${totalResultNum}件見つかりました`
                  : "講義が見つかりませんでした"}
              </div>
              <div className="column is-size-5 has-text-right-tablet">
                <div className="field">
                  <div className="select is-primary in-small">
                    <select onChange={handleSortValChange} ref={sortvalRef}>
                      <option value="relevance">関連度順</option>
                      <option value="date_asc">公開が早い順</option>
                      <option value="date_desc">公開が遅い順</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <Result resultData={resultData} />
            <PaginationButton
              nbPages={Math.ceil(totalResultNum / 20)}
              page={pageNum}
              onClick={(i) => {
                const searchParams = new URLSearchParams(
                  window.location.search
                );
                searchParams.set("page", i);
                document.location.href = `${withPrefix(
                  "/search?"
                )}${searchParams.toString()}`;
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

const SearchPage = (props) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "department" } } }
          sort: { frontmatter: { departmentOrder: ASC } }
        ) {
          edges {
            node {
              frontmatter {
                department
                templateKey
              }
              id
            }
          }
        }
      }
    `}
    render={(data) => <Search data={data} {...props} />}
  ></StaticQuery>
);

export default SearchPage;
