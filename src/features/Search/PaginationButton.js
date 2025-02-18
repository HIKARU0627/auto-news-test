import React from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";

const calcPageList = (page_, nbPages) => {
  // page: 現在のページ
  // nbPages: 全ページ数
  // ページを範囲内に丸め込む
  let page = Math.min(Math.max(page_, 1), nbPages);

  let pageList = [page];

  if (page < nbPages - page) {
    // 初めの方に近い場合
    let curPage = page;
    // 前方に追加
    while (curPage - 1 >= 1 && page - curPage < 2) {
      pageList.unshift(curPage - 1);
      curPage--;
    }
    curPage = page;
    // 後方に追加
    while (curPage + 1 <= nbPages && pageList.length < 5) {
      pageList.push(curPage + 1);
      curPage++;
    }
  } else {
    // 後ろの方に近い場合
    let curPage = page;
    curPage = page;
    // 後方に追加
    while (curPage + 1 <= nbPages && curPage - page < 2) {
      pageList.push(curPage + 1);
      curPage++;
    }
    curPage = page;
    // 前方に追加
    while (curPage - 1 >= 1 && pageList.length < 5) {
      pageList.unshift(curPage - 1);
      curPage--;
    }
  }

  // ページネーションの左右の端に...を追加する必要があるかどうか
  const isEmpty = pageList[0] === 0;
  const isLeftEllipsis = !isEmpty && pageList[0] !== 1;
  const isRightEllipsis = !isEmpty && pageList[pageList.length - 1] !== nbPages;

  return [pageList, isLeftEllipsis, isRightEllipsis];
};

const PageNumBottom = (
  index,
  page,
  pageNum,
  nbPages,
  onClick,
  isLeftEllipsis,
  isRightEllipsis
) => {
  if (index === 0 && isLeftEllipsis) {
    // 左端を1ページめにし，...を追加
    return (
      <React.Fragment>
        <StyledButton
          key={index}
          className={`button ${
            page === pageNum
              ? "has-text-primary border-primary is-outlined"
              : "is-primary"
          }`}
          onClick={() => onClick(1)}
        >
          {1}
        </StyledButton>
        <StyledPaginationDot>...</StyledPaginationDot>
      </React.Fragment>
    );
  } else if (index === 4 && isRightEllipsis) {
    // 右端をnbPagesページめにし，...を追加
    return (
      <React.Fragment>
        <StyledPaginationDot>...</StyledPaginationDot>
        <StyledButton
          key={index}
          className={`button ${
            page === pageNum
              ? "has-text-primary border-primary is-outlined"
              : "is-primary"
          }`}
          onClick={() => onClick(nbPages)}
        >
          {nbPages}
        </StyledButton>
      </React.Fragment>
    );
  }
  return (
    <StyledButton
      key={index}
      className={`button ${
        page === pageNum
          ? "has-text-primary border-primary is-outlined"
          : "is-primary"
      }`}
      disabled={pageNum === 0}
      onClick={() => onClick(pageNum)}
    >
      {pageNum}
    </StyledButton>
  );
};

const PaginationButton = (props) => {
  const { nbPages, page, onClick } = props;
  const [pageList, isLeftEllipsis, isRightEllipsis] = calcPageList(
    page,
    nbPages
  );

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StyledButton
        className="button is-primary"
        disabled={page - 1 < 1}
        onClick={() => onClick(page - 1)}
      >
        &lt;
      </StyledButton>

      {pageList.map((pageNum, index) =>
        PageNumBottom(
          index,
          page,
          pageNum,
          nbPages,
          onClick,
          isLeftEllipsis,
          isRightEllipsis
        )
      )}

      <StyledButton
        className="button is-primary"
        disabled={page + 1 > nbPages}
        onClick={() => onClick(page + 1)}
      >
        &gt;
      </StyledButton>
    </div>
  );
};

// 講義のチャプター名
const StyledButton = styled.button`
  margin: 10px;
  @media (max-width: 768px) {
    width: 25px;
    margin: 1px;
  }
`;

const StyledPaginationDot = styled.div`
  margin: 14px;
  @media (max-width: 768px) {
    margin: 5px;
  }
`;

export default PaginationButton;
