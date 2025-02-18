import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_sugioka_class = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"ピア・カウンセリング体験-授業の様子"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics10/top/top.png"
        )}`}
      />
      <Header className="full-width-image margin-top-0">
        <HeaderIconRed
          src={withPrefix("/img/topics/topics10/top/header_icon_red.svg")}
          alt=""
        />
        <Title>
          <div className="container">
            <h1 className="is-size-5-mobile is-size-2-tablet is-size-1-widescreen">
              ピア・カウンセリング体験を通して、
              <br />
              他者理解及び対人援助の基礎を理解する
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
                  "/img/topics/topics10/sugioka/sugioka_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <figure className="image is-64x64	is-marginless is-paddingless column is-narrow is-hidden-tablet">
              <img
                src={withPrefix(
                  "/img/topics/topics10/sugioka/sugioka_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>

            <h1 className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column">
              授業の様子
            </h1>
          </div>

          <div className="content">
            <p>
              今回の授業では、前回のテーマの「コミュニケーションは反応が返ってくる相互的なものである」という内容に引き続き、「非言語コミュニケーションの重要性」についての講義を行いました。
            </p>
          </div>

          <div className="content">
            <H2 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              ペアワーク【ひびきあう気持ち】
            </H2>
            <p>
              ペアの一方が1分間好きな表情・ポーズをして、もう片方がその真似をします。
              <br />
              意外と難しかったようで、みな楽しんで行っていました。
            </p>
            <img
              src={withPrefix("/img/topics/topics10/sugioka/sugioka_pic_1.jpg")}
              alt=""
            />
          </div>

          <div className="content">
            <H2 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              ペアワーク【表情チェック】
            </H2>
            <p>
              人の6
              種類（喜び、恐い、驚き、興味ある、悲しい、ムカつく）の感情のうち、ペアの一方が一つの感情を表すような表情をします。ペアもう一方が、どの感情を示していたかを当てます。
            </p>
            <img
              src={withPrefix("/img/topics/topics10/sugioka/sugioka_pic_2.jpg")}
              alt=""
            />
          </div>

          <div className="content">
            <H2 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              グループワーク
            </H2>
            <p>
              4人でグループを作り、「私が最近ムカついたこと」「私の恋愛観・人生観」「私の冬休みの予定」のいずれかについてフリートークをします。
              <br />
              聞き手に回る人は、スピーカーが話している時にどんな表情をしているかを記録し、スピーカーに報告します。
              <br />
              活動後、スピーカーは話をしているときの自分の表情について気づいたことを書いていきます。
            </p>
            <img
              src={withPrefix("/img/topics/topics10/sugioka/sugioka_pic_3.jpg")}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="section columns is-centered is-widescreen">
        <div
          className="container column is-6-widescreen box"
          style={{ backgroundColor: `rgba(255,0,0,0.5)` }}
        >
          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/sugioka/sugioka_headline_icon2.svg"
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
            <ul className="column is-10 margin-top-0">
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_sugioka_students">
                  学生へのインタビュー
                </StyledLink>
              </li>
            </ul>
          </div>

          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/sugioka/sugioka_headline_icon2.svg"
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
export default Topics10_sugioka_class;

const Header = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/sugioka/sugioka_header_pic.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  position: relative;
`;

const HeaderIconRed = styled.img`
  background-color: rgba(255, 0, 0, 0.25);
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

const H2 = styled.h2`
  position: relative;
  padding-left: 1em;
  &:before {
    background: #000;
    content: "";
    height: 0.8em; //四角のサイズ
    width: 0.8em; //四角のサイズ
    left: 0;
    position: absolute;
    top: 0.25em;
  }
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
