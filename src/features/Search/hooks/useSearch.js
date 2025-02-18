import { useState, useEffect } from "react";
import axios from "axios";

const sort_dict = {
  relevance: [],
  date_asc: [{ date: { order: "asc" } }],
  date_desc: [{ date: { order: "desc" } }],
  access: [],
};

// 検索用のパラメータを作る関数
const createSearchParam = (keyword, department, language, term, type) => {
  let searchOption = [];
  let filterOption = [];
  if (keyword !== "")
    searchOption.push({
      multi_match: {
        fields: ["title", "content", "lecturer", "department"],
        query: keyword,
        operator: "and",
      },
    });
  if (department !== "")
    filterOption.push({ match: { department: department } });
  if (language !== "") filterOption.push({ match: { language: language } });
  if (term !== "") filterOption.push({ wildcard: { term: `*${term}*` } });
  if (type !== "") filterOption.push({ wildcard: { category: `${type}*` } }); // courses or farewell, courses の場合は courses, courses-en などがヒットするように

  return [searchOption, filterOption];
};

const useSearch = (
  keywordRef,
  departmentRef,
  languageRef,
  termRef,
  typeRef,
  sortvalRef
) => {
  // ヒットした講義
  const [resultData, setResultData] = useState([]);
  // 現在検索しているページ番号
  const [searchPageNum, setSearchPageNum] = useState(1);
  // 現在表示しているページ番号
  const [pageNum, setPageNum] = useState(1);
  // 検索結果の最大ページ数
  const [totalResultNum, setTotalResultNum] = useState(0);

  // 検索のAPIを叩く処理
  useEffect(() => {
    // 競合状態を正しい順序で解決するためのフラグ
    let ignore = false;
    // クエリを取得
    const searchParams = new URLSearchParams(window.location.search);
    const keyword = searchParams.get("keyword") ?? "";
    const department = searchParams.get("department") ?? "";
    const language = searchParams.get("language") ?? "";
    const term = searchParams.get("term") ?? "";
    const type = searchParams.get("type") ?? "";
    const page = searchParams.get("page") ?? "1";
    const sort = searchParams.get("sort") ?? "relevance";

    // 表示するページ番号を指定
    setSearchPageNum(parseInt(page));

    // 値を指定
    // SSRなのでこうしないと反映されない
    keywordRef.current.value = keyword;
    languageRef.current.value = language;
    departmentRef.current.value = department;
    termRef.current.value = term;
    typeRef.current.value = type;
    sortvalRef.current.value = sort;

    // クエリから検索用のパラメータを取得
    const [searchOption, filterOption] = createSearchParam(
      keyword,
      department,
      language,
      term,
      type
    );

    axios({
      url: "https://dev.ocw.media.nagoya-u.ac.jp/search/test_index/_search",
      method: "POST",
      headers: {
        Authorization: `Basic ${window.btoa("elastic:nuocw")}`,
        "Content-Type": "application/json",
      },
      data: {
        from: (searchPageNum - 1) * 20,
        size: 20,
        query: {
          bool: {
            must: searchOption,
            filter: filterOption,
          },
        },
        sort: sort_dict[sort],
      },
    }).then(
      (res) => {
        if (!ignore) {
          setResultData(res.data.hits.hits);
          setPageNum(searchPageNum);
          setTotalResultNum(res.data.hits.total.value);
        }
      },
      (err) => {
        console.log(err.message);
      }
    );
    return () => {
      ignore = true;
    };
  }, [searchPageNum]);

  return { resultData, pageNum, totalResultNum };
};

export default useSearch;
