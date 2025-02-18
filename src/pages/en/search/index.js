import React, { useRef } from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import "bulma/css/bulma.css";

import LayoutEn from "@common/Layout/LayoutEn";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import Result from "@features/Search/SearchResultEn";
import PaginationButton from "@features/Search/PaginationButton";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";
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

const EnSearch = (props) => {
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
      term: termRef.current.value,
      type: typeRef.current.value,
      sort: sortvalRef.current.value,
    };
    const urlSearchParam = new URLSearchParams(params).toString();
    document.location.href = `${withPrefix("/en/search?")}${urlSearchParam}`;
  };

  return (
    <LayoutEn>
      <HelmetForOGPEn title={"Search by Keyword"} />
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix("/img/header4.jpg")})`,
        }}
      >
        <h1 className="has-text-weight-bold is-size-1-widescreen is-size-2-tablet is-size-3-mobile header-title">
          Search by Keyword
        </h1>
      </div>

      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container">
          <div className="box p-5">
            <div className="columns is-vcentered py-2">
              <div className="column is-one-quarter mb-2 pb-0">Keyword</div>
              <div className="column pb-0">
                <input
                  type="search"
                  placeholder="Keywords: Physics, School of Engineering, John Smith"
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
                  <div className="column is-half mb-2 pb-0">Department</div>
                  <div className="column pb-0">
                    <div className="select is-primary is-fullwidth">
                      <select ref={departmentRef}>
                        <option value="">all</option>
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
                  <div className="column is-half mb-2 pb-0">Language</div>
                  <div className="column pb-0">
                    <div className="select is-primary is-fullwidth">
                      <select ref={languageRef}>
                        <option value="">all</option>
                        <option value="en">English</option>
                        <option value="ja">Japanese</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-vcentered is-mobile py-2">
              <div className="column">
                <div className="columns is-vcentered ">
                  <div className="column is-half mb-2 pb-0">Lecture Type</div>
                  <div className="column pb-0">
                    <div className="select is-primary is-fullwidth">
                      <select ref={typeRef}>
                        <option value="">all</option>
                        <option value="courses">Regular Lecture</option>
                        <option value="farewell">Farewell</option>
                        {/* <option value="others">other</option> */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="columns is-vcentered ">
                  <div className="column is-half mb-2 pb-0">Year</div>
                  <div className="column pb-0">
                    <div className="select is-primary is-fullwidth">
                      <select ref={termRef}>
                        <option value="">all</option>
                        {termOption().map((term, index) => (
                          <option key={index} value={term}>
                            {term}
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
                  Search
                </button>
              </div>
              <div className="column">
                <button
                  className="button is-fullwidth"
                  onClick={handleOptionReset}
                >
                  Reset
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
                  ? `${totalResultNum} course${
                      totalResultNum >= 2 ? "s" : ""
                    } found.`
                  : "Sorry, we could not find any courses for your search."}
              </div>
              <div className="column is-size-5 has-text-right-tablet">
                <div className="field">
                  <div className="select is-primary in-small">
                    <select onChange={handleSortValChange} ref={sortvalRef}>
                      <option value="relevance">relevance</option>
                      <option value="date_asc">Oldest to Newest</option>
                      <option value="date_desc">Newest to Oldest</option>
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
                  "/en/search?"
                )}${searchParams.toString()}`;
              }}
            />
          </div>
        </div>
      </section>
    </LayoutEn>
  );
};

const EnSearchPage = (props) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "department-en" } } }
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
    render={(data) => <EnSearch data={data} {...props} />}
  ></StaticQuery>
);

export default EnSearchPage;
