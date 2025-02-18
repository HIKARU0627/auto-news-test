import React, { useState, useEffect } from "react";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import styled from "styled-components";

// isEN で英語版に対応
const TagSearchResultSummary = ({ length, isSearching, emptyQuery, isEN }) => {
  if (isSearching) {
    return (
      <Message
        id="search-results-message"
        aria-live="assertive"
        className="is-size-6"
      >
        {!isEN ? "検索中です。" : "Searching..."}
      </Message>
    );
  } else if (emptyQuery) {
    return (
      <Message
        id="search-results-message"
        aria-live="assertive"
        className="is-size-6"
      >
        {!isEN
          ? "キーワードを入力してください（例: 物理学, 工学部, 大学院）"
          : "Keywords: physics, analysis, japan"}
      </Message>
    );
  } else if (length !== 0) {
    return (
      <Message
        id="search-results-message"
        aria-live="assertive"
        className="is-size-6"
      >
        {!isEN
          ? `${length} 件 見つかりました。`
          : `${length} course${length === 1 ? "" : "s"} found.`}
      </Message>
    );
  } else {
    return (
      <Message
        id="search-results-message"
        aria-live="assertive"
        className="is-size-6"
      >
        {!isEN
          ? "タグが見つかりませんでした。"
          : "Sorry, we could not find any tags for your search."}
      </Message>
    );
  }
};

const ResultTagList = React.memo(function ResultTagListMemo({ tagList }) {
  return (
    <div>
      <Results>
        <div className="columns is-multiline">
          <ul className="taglist">
            {tagList.map((tag) => (
              <li key={tag.fieldValue} className="d-inline-block m-1">
                <Link
                  to={`${kebabCase(tag.fieldValue)}/`}
                  className="button is-outlined is-primary"
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Results>
    </div>
  );
});

export const TagSearch = ({ tagList, isEN = false }) => {
  const [searchWord, setSearchWord] = useState("");
  const [emptyQuery, setEmptyQuery] = useState(null);
  const [isSearching, setIsSearching] = useState(true);
  const [result, setResult] = useState([]);

  // 検索処理（filterしてるだけ）
  const Search = (word, tagList, setIsSearching) => {
    const value = word.toLowerCase().trim();
    const result = tagList.filter((e) => {
      const target = `${e.fieldValue.toLowerCase()}`;
      return target.includes(value);
    });
    setIsSearching(false); //検索終了
    return result;
  };

  // 連続で検索しないように、0.5秒開ける
  useEffect(() => {
    setIsSearching(true); // 検索開始
    const timer = setTimeout(() => {
      const trimedWord = searchWord.toLowerCase().trim();
      setEmptyQuery(trimedWord === "");
      setResult(Search(trimedWord, tagList, setIsSearching));
    }, 500);
    return () => clearTimeout(timer);
  }, [searchWord]);

  return (
    <div>
      <TagSearchResultSummary
        length={result.length}
        isSearching={isSearching}
        emptyQuery={emptyQuery}
        isEN={isEN}
      />
      <div className="field">
        <div className="control is-expanded">
          <input
            className="input"
            id="Search"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </div>
      </div>
      <ResultTagList tagList={result} />
    </div>
  );
};

const Message = styled.div`
  margin: 1rem;
`;

const Results = styled.div`
  margin-bottom: 1.5rem;
`;
