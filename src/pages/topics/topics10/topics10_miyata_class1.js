import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_miyata_class1 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"細胞を観る-コオロギの組織観察"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics10/top/top.png"
        )}`}
      />
      <Header className="full-width-image margin-top-0">
        <HeaderIconBlue
          src={withPrefix("/img/topics/topics10/top/header_icon_blue.svg")}
          alt=""
        />

        <Title>
          <div className="container">
            <h1 className="is-size-5-mobile is-size-2-tablet is-size-1-widescreen ">
              細胞を観る、記載する、そして伝える
            </h1>
          </div>
        </Title>
      </Header>

      <section className="section columns is-centered is-widescreen">
        <div className="container column is-6-widescreen">
          <div className="content columns is-vcentered is-mobile is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/miyata/miyata_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <figure className="image is-64x64	is-marginless is-paddingless column is-narrow is-hidden-tablet">
              <img
                src={withPrefix(
                  "/img/topics/topics10/miyata/miyata_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <h1 className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column">
              コオロギの組織観察
            </h1>
          </div>

          <div className="content">
            <p>
              この講義では、主に2つのテーマを掲げて観察・発表を行います。10月中旬～
              11月下旬までは第1
              のテーマとして、「コオロギの組織観察」に取り組みました。学生は「脳神経運動系」「循環系」「呼吸系」「消化系」「泌尿生殖系」それぞれの部位の観察を担当する5
              つの班に分かれて解剖・観察を行い、観察から得られた知見及び考察を発表会で発表しました。
            </p>
          </div>

          <div className="content">
            <p>
              実験開始の2週間程度前から解剖実習期間中にかけて、各学生は解剖に用いるコオロギの飼育・観察を行います。解剖実習で観察する部位について意識しながら観察や調査を行い、そこで得られた発見も参考にしながら実習に臨んでいました。学生の中には、飼育の過程でコオロギに対して愛着が湧いてきたと話していた人もいました。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_1.jpg")}
              alt=""
            />
            <p>
              解剖実習風景。解剖実習、発表会は、すべて宮田先生の研究室で行われます。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_2.jpg")}
              alt=""
            />
            <p>
              解剖に用いたコオロギです。雄と雌のつがいを2週間飼育・観察し、解剖実習に臨みます。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_3.jpg")}
              alt=""
            />
            <p>泌尿生殖系を対象として解剖・観察中です。</p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_4.jpg")}
              alt=""
            />
            <p>状況の記録には、スマートフォンも用いられていました。</p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_5.jpg")}
              alt=""
            />
            <p>
              発表会風景。各班の発表の後、学生主体で質疑応答が行われます。先生は見守り役に徹します。
            </p>
          </div>
        </div>
      </section>

      <section className="section columns is-centered is-widescreen">
        <div
          className="container column is-6-widescreen box"
          style={{ backgroundColor: `rgba(16,167,238,0.8)` }}
        >
          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/miyata/miyata_headline_icon2.svg"
                )}
                alt=""
                style={{ opacity: `0.33` }}
              />
            </figure>
            <h1
              className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column"
              style={{ color: "white" }}
            >
              他の回を見る
            </h1>
            <ul className="column is-10 margin-top-0 has-text-weight-bold">
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_miyata_class2">
                  マウス胎仔の培養と観察
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_miyata_students">
                  学生へのインタビュー
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_miyata_teacher">
                  先生へのインタビュー
                </StyledLink>
              </li>
            </ul>
          </div>

          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/miyata/miyata_headline_icon2.svg"
                )}
                alt=""
                style={{ opacity: `0.33` }}
              />
            </figure>
            <h1
              className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column"
              style={{ color: "white" }}
            >
              他の授業を見る
            </h1>
            <ul className="column is-10 margin-top-0 has-text-weight-bold">
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#red">
                  ピアカウンセリング体験を通して、他者理解及び対人援助の基礎を理解する
                </StyledA>
              </li>
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#yellow">
                  レポート作成と口頭発表の技術
                </StyledA>
              </li>
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#green">
                  メディア研究・ビデオ作製を通したメディアリテラシーの獲得
                </StyledA>
              </li>
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#violet">
                  「考古学入門」～考古学に触れる～
                </StyledA>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Topics10_miyata_class1;

const Header = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/miyata/miyata_header_pic.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  position: relative;
`;

const HeaderIconBlue = styled.img`
  background-color: rgba(16, 167, 238, 0.5);
  backgroundposition: center center;
  backgroundsize: cover;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
  position: relative;
  padding-left: 1.5em;
  &:before {
    background: #fff;
    content: "";
    height: 0.8em; //四角のサイズ
    width: 0.8em; //四角のサイズ
    left: 0;
    position: absolute;
    top: 0.25em;
  }
`;

const StyledA = styled.a`
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
  position: relative;
  padding-left: 1.5em;
  &:before {
    background: #fff;
    content: "";
    height: 0.8em; //四角のサイズ
    width: 0.8em; //四角のサイズ
    left: 0;
    position: absolute;
    top: 0.25em;
  }
`;
