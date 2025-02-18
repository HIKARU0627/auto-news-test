import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_kajiwara_class = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"考古学入門-測量実習"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics10/top/top.png"
        )}`}
      />
      <Header className="full-width-image margin-top-0">
        <HeaderIconRed
          src={withPrefix("/img/topics/topics10/top/header_icon_violet.svg")}
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
              測量実習
            </h1>
          </div>

          <div className="content">
            <p>
              名大生の憩いの場、第一グリーンベルトで測量実習を行いました。工事現場などでお馴染みの「測量」ですが、考古学の世界ではどのようなことをするのでしょうか?
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix(
                "/img/topics/topics10/kajiwara/kajiwara_pic_1.jpg"
              )}
              alt=""
            />
          </div>

          <div className="content">
            <img
              src={withPrefix(
                "/img/topics/topics10/kajiwara/kajiwara_pic_2.jpg"
              )}
              alt=""
            />
          </div>

          <div className="content">
            <p>
              考古学の測量では、実際の遺跡の様子を紙面上に写す作業を行います。紙と鉛筆、ロープ、ポール、専用の器具を用いて、相似の原理で測量を行いました。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix(
                "/img/topics/topics10/kajiwara/kajiwara_pic_3.jpg"
              )}
              alt=""
            />
            <p>数メートル毎に打点し、紙面上に構造物を描いていきます。</p>
          </div>

          <div className="content">
            <img
              src={withPrefix(
                "/img/topics/topics10/kajiwara/kajiwara_pic_4.jpg"
              )}
              alt=""
            />
            <p>
              点と点を滑らかに結び、完成です。完成した資料は調査結果の分析で大きな役割を果たします。
            </p>
          </div>

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
              名古屋大学の遺跡を知る
            </h1>
          </div>

          <div className="content">
            <p>
              名古屋大学内にも遺跡があるのはご存知ですか?この日は名古屋大学周辺の遺跡についての講義とその展示についての講義が行われました。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix(
                "/img/topics/topics10/kajiwara/kajiwara_pic_6.jpg"
              )}
              alt=""
            />
            <p>
              授業後半では文学部考古学陳列室で出土品についての講義が行われました。
            </p>
          </div>

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
              報告会
            </h1>
          </div>

          <div className="content">
            <p>
              今まで講義で扱ったテーマを踏まえ、各班が「博物館の評価」という表題で発表をおこないました。
            </p>
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
                <StyledLink to="/topics/topics10/topics10_kajiwara_students">
                  学生へのインタビュー
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
export default Topics10_kajiwara_class;

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
