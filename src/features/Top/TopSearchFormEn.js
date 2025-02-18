import React, { useRef } from "react";
import { withPrefix, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

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

const TopSearchFormEn = React.memo(function TopSearchFormEnMemo({
  data: {
    allMarkdownRemark: { group },
  },
}) {
  const keywordList = group;
  const suggestKeywordList = randomKeywordList(keywordList, 8);
  const keywordRef = useRef(null);

  const searchByInput = () => {
    let params = {
      keyword: keywordRef.current.value,
    };
    const urlSearchParam = new URLSearchParams(params).toString();
    document.location.href = `${withPrefix("/en/search?")}${urlSearchParam}`;
  };

  const searchByKeyword = (word) => {
    let params = {
      keyword: word,
    };
    const urlSearchParam = new URLSearchParams(params).toString();
    document.location.href = `${withPrefix("/en/search?")}${urlSearchParam}`;
  };

  return (
    <Wrapper>
      <div>
        <div className="my-4">
          <div className="is-size-4 has-text-white has-text-weight-bold my-2">
            Lecture Search
          </div>
          <input
            type="search"
            placeholder="Keywords: Physics, School of Engineering, John Smith"
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
            Recommended keywords
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
            Search
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

const TopSearchFormEnQuery = () => (
  <StaticQuery
    query={graphql`
      query topSearchFormEnQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          limit: 1000
          filter: { frontmatter: { templateKey: { in: ["courses-en"] } } }
        ) {
          group(field: { frontmatter: { tags: SELECT } }) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => <TopSearchFormEn data={data} />}
  />
);
export default TopSearchFormEnQuery;
