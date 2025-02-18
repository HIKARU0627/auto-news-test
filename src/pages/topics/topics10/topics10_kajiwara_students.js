import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_kajiwara_students = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"考古学入門-学生へのインタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics10/top/top.png"
        )}`}
      />
      <Header className="full-width-image margin-top-0">
        <HeaderIconRed
          src={withPrefix("/img/topics/topics10/top/header_icon_viloet.svg")}
          alt=""
        />

        <Title>
          <div className="container">
            <h1 className="is-size-5-mobile is-size-2-tablet is-size-1-widescreen">
              「考古学入門」～考古学に触れる～
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
                  "/img/topics/topics10/kajiwara/kajiwara_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <figure className="image is-64x64	is-marginless is-paddingless column is-narrow is-hidden-tablet">
              <img
                src={withPrefix(
                  "/img/topics/topics10/kajiwara/kajiwara_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <h1 className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column">
              学生へのインタビュー
            </h1>
          </div>

          <div className="content">
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 測量してみた感想は?
            </h3>
            <Answer>
              A1:
              測量をするのは初めてだったが、思っていたよりも簡単だった。（工学部
              1 年）
            </Answer>
            <Answer>
              A2: 細かい作業が多く、忍耐力のいる作業だなと思いました。（法学部
              １年）
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 出土品に触れてみた感想は?
            </h3>
            <Answer>
              A: &nbsp;
              普段は目にできないような貴重な品に触れられるのはとても新鮮でした。また、実習を通じて座学で学んだことについての理解が深まるとともに、今後の学習へのモチベーションとなりました。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. このセミナーを通じてどんなことを学びましたか?
            </h3>
            <Answer>
              A: &nbsp;
              思ったよりも発掘や展示に労力が割かれているということを知りました。また、博物館展示の工夫や努力といった裏の事情も学ぶことができ、今後は新たな視点で博物館を楽しむことができそうです。
            </Answer>
          </div>
        </div>
      </section>

      <section className="section columns is-centered is-widescreen">
        <div
          className="container column is-6-widescreen box"
          style={{ backgroundColor: `rgba(99,65,149,0.8)` }}
        >
          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/kajiwara/kajiwara_headline_icon2.svg"
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
                <StyledLink to="/topics/topics10/topics10_kajiwara_class">
                  測量実習、名古屋大学の遺跡を知る、報告会
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_kajiwara_teacher">
                  先生へのインタビュー
                </StyledLink>
              </li>
            </ul>
          </div>

          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/kajiwara/kajiwara_headline_icon2.svg"
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
                  ピア・カウンセリング体験を通して、他者理解及び対人援助の基礎を理解する
                </StyledA>
              </li>
              <li className="list-item">
                <StyledLink to="/topics/topics10/topics10#yellow">
                  レポート作成と口頭発表の技術
                </StyledLink>
              </li>
              <li className="list-item">
                <StyledLink to="/topics/topics10/topics10#green">
                  メディア研究・ビデオ作製を通したメディアリテラシーの獲得
                </StyledLink>
              </li>
              <li className="list-item">
                <StyledLink to="/topics/topics10/topics10#blue">
                  細胞を観る、記載する、そして伝える
                </StyledLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Topics10_kajiwara_students;

const Header = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/kajiwara/kajiwara_header_pic.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  position: relative;
`;

const HeaderIconRed = styled.img`
  background-color: rgba(99, 65, 149, 0.5);
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

const Answer = styled.p`
  margin-top: 0vw;
  margin-bottom: 4vw;
  padding-left: 1.9vw;
  text-indent: -1.9vw;
`;
