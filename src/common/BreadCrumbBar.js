import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import styled from "styled-components";

export const BreadcrumbBar = ({ crumbs }) => {
  return (
    <BreadcrumbStyled>
      <Breadcrumb crumbs={crumbs} crumbSeparator="" hiddenCrumbs={[]} />
    </BreadcrumbStyled>
  );
};

// topics/topics1/topics1などのパンくずリストが表示されてしまう問題はここで解決する
const BreadcrumbStyled = styled.div`
  .breadcrumb__link__active {
    color: #4a4a4a;
  }
  //ホバーしてないときの色を指定する
  .breadcrumb__link {
    color: #4a4a4a;
  }

  //ホバーしたときの動作
  .breadcrumb__link:not(.breadcrumb__separator):hover {
    color: #0a6d50;
    font-weight: bold;
    letter-spacing: -0.02em; /* ホバー時に文字をずらさないための文字の幅調整 */
  }
  //内容がないパンクズリストのアイテムを非表示にする
  .breadcrumb__list__item a:empty {
    display: None;
  }
  //<a>の内容があるとき，後ろに > をつける
  .breadcrumb__list__item:not(:last-child) a:not(:empty):after {
    content: ">";
    color: gray;
    margin-left: 1em;
  }

  .breadcrumb ol {
    width: 100vw;
    overflow: scroll !important;
    flex-wrap: nowrap !important;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none; /*Firefox対応のスクロールバー非表示コード*/
    -ms-overflow-style: none; /*Internet Explore対応のスクロールバー非表示コード*/
  }

  .breadcrumb__list {
    margin-bottom: 30px;
    font-family: monospace; /* ホバーでボールドになった際にずらさないための等幅フォント */
  }

  @media (max-width: 768px) {
    display: none; /*パンくずリストが収まらないとき、非表示にする*/
  }
`;
