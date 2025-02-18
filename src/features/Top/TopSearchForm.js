import React, { useRef } from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

// 配列から指定した個数の要素をランダムに抽出する関数
const randomKeywordList = (array, num) => {
  let a = array;
  let t = [];
  let r = [];
  let l = a.length;
  let n = num < l ? num : l;
  while (n-- > 0) {
    let i = (Math.random() * l) | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
};

const TopSearchForm = React.memo(function TopSearchFormMemo({
  data: {
    allMarkdownRemark: { group },
  },
}) {
  const keywordList = group.filter((val) => {
    return (
      val.totalCount >= 2 &&
      val.fieldValue.length >= 2 &&
      val.fieldValue.length <= 10
    );
  });
  const suggestKeywordList = randomKeywordList(keywordList, 8);

  const keywordRef = useRef(null);

  const searchByInput = () => {
    let params = {
      keyword: keywordRef.current.value,
    };
    const urlSearchParam = new URLSearchParams(params).toString();
    document.location.href = `${withPrefix("/search?")}${urlSearchParam}`;
  };

  const searchByKeyword = (word) => {
    let params = {
      keyword: word,
    };
    const urlSearchParam = new URLSearchParams(params).toString();
    document.location.href = `${withPrefix("/search?")}${urlSearchParam}`;
  };

  return (
    <Wrapper>
      <div>
        <div className="my-4">
          <div className="is-size-4 has-text-white has-text-weight-bold my-2">
            講義検索
          </div>
          <input
            type="search"
            placeholder="キーワードを入力してください"
            className="input"
            ref={keywordRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                searchByInput();
              }
            }}
          />
        </div>
        <div className="pb-4 my-4">
          <div className="is-size-4 has-text-white has-text-weight-bold my-2">
            おすすめキーワード
          </div>
          <div className="my-2">
            {suggestKeywordList.map((word, index) => {
              return (
                <SuggestButton
                  key={index}
                  className="button is-primary is-rounded"
                  onClick={() => searchByKeyword(word.fieldValue)}
                >
                  {word.fieldValue}
                </SuggestButton>
              );
            })}
          </div>
        </div>
        <div className="py-4">
          <button
            className="button is-fullwidth is-primary"
            onClick={searchByInput}
          >
            検索
          </button>
        </div>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 45%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  padding: 3%;
`;

const SuggestButton = styled.button`
  margin-left: 0.25rem;
  margin-bottom: 0.5rem;
`;

const TopSearchFormQuery = () => (
  <StaticQuery
    query={graphql`
      query topSearchFormQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          limit: 1000
          filter: {
            frontmatter: { templateKey: { in: ["courses", "farewell"] } }
          }
        ) {
          group(field: { frontmatter: { tags: SELECT } }) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => <TopSearchForm data={data} />}
  />
);
export default TopSearchFormQuery;
