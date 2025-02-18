import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_goto_class1 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"メディア研究-OBによる講演会と番組制作に向けた話し合い1"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics10/top/top.png"
        )}`}
      />
      <Header className="full-width-image margin-top-0">
        <HeaderIconGreen
          src={withPrefix("/img/topics/topics10/top/header_icon_green.svg")}
          alt=""
        />

        <Title>
          <div className="container">
            <h1 className="is-size-5-mobile is-size-2-tablet is-size-1-widescreen">
              メディア研究・ビデオ作製を通した
              <br />
              メディアリテラシーの獲得
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
                  "/img/topics/topics10/goto/goto_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <figure className="image is-64x64	is-marginless is-paddingless column is-narrow is-hidden-tablet">
              <img
                src={withPrefix(
                  "/img/topics/topics10/goto/goto_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <h1 className="has-text-bold is-size-4-mobile is-size-3-tablet is-size-3-widescreen column">
              OBによる講演会と番組制作に向けた話し合い1
            </h1>
          </div>

          <div className="content">
            <p>
              かつて、名大の科目履修生で、現在、週刊朝日で記者として活躍されている大塚さんによる講演会が行われました。週刊誌の記者としての経験をもとに、メディアとどう向き合うべきかに関してお話されました。学生たちは、大塚さんのお話に真剣に耳を傾け、時には質問をするなどメディアへの高い関心が感じられました。
            </p>
            <img
              src={withPrefix("/img/topics/topics10/goto/goto_pic_1.jpg")}
              alt=""
            />
            <p>熱心に大塚さんのお話に耳を傾ける学生たち</p>
          </div>

          <div className="content">
            <p>
              講演会終了後は、番組制作に向けた話し合いが行われました。まず、学生たちは、1
              人3
              つずつ自分がやってみたい面白そうな番組テーマ案を挙げました。ただし、このとき先生は、テレビ局の資金力、取材力をもってしてもかなわないような趣向を凝らしたテーマ設定を求めました。学生からは、「下宿にはどれくらいお金がかかるか」、「名大生の恋愛事情」、「名大生はどこで勉強をしているのか」などのテーマ案が挙げられました。
            </p>
            <img
              src={withPrefix("/img/topics/topics10/goto/goto_pic_2.jpg")}
              alt=""
            />
            <p>学生たちに、番組テーマ設定のアドバイスを送る後藤先生</p>
          </div>

          <div className="content">
            <p>
              最後の10
              分は、学生たちで輪になって、テーマ設定に関する話し合いが行われました。学生たちは、お互いに言いたいことが言いやすいアットホームな雰囲気の中で、真剣かつ楽しく話し合いをしていました。
            </p>
            <img
              src={withPrefix("/img/topics/topics10/goto/goto_pic_3.jpg")}
              alt=""
            />
            <p>番組テーマ設定について、輪になって話し合う学生たち</p>
          </div>
        </div>
      </section>

      <section className="section columns is-centered is-widescreen">
        <div
          className="container column is-6-widescreen box"
          style={{ backgroundColor: `rgba(16,238,59,0.8)` }}
        >
          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/goto/goto_headline_icon2.svg"
                )}
                alt=""
                style={{ opacity: `0.33` }}
              />
            </figure>
            <h1
              className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column"
              style={{ color: `white` }}
            >
              他の回を見る
            </h1>
            <ul className="column is-10 margin-top-0 has-text-weight-bold">
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_goto_class2">
                  番組制作に向けた話し合い2
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_goto_class3">
                  番組収録
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_goto_students">
                  学生へのインタビュー
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_goto_teacher">
                  先生へのインタビュー
                </StyledLink>
              </li>
            </ul>
          </div>

          <div className="content columns is-vcentered is-multiline has-text-weight-bold">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/goto/goto_headline_icon2.svg"
                )}
                alt=""
                style={{ opacity: `0.33` }}
              />
            </figure>
            <h1
              className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column"
              style={{ color: `white` }}
            >
              他の授業を見る
            </h1>
            <ul className="column is-10 margin-top-0">
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#red">
                  ピア・カウンセリング体験を通して、他社理解及び対人援助の基礎を理解する
                </StyledA>
              </li>
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#yellow">
                  レポート作成と口頭発表の技術
                </StyledA>
              </li>
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#blue">
                  細胞を観る、記載する、そして伝える
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
export default Topics10_goto_class1;

const Header = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/goto/goto_header_pic.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  position: relative;
`;

const HeaderIconGreen = styled.img`
  background-color: rgba(16, 238, 59, 0.5);
  backgroundposition: top center;
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
