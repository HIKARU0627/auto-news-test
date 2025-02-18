import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

class Links extends React.Component {
  render() {
    return (
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
    );
  }
}

const Topics10_sugioka_students = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"ピア・カウンセリング体験-学生へのインタビュー"}
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
              学生へのインタビュー
            </h1>
          </div>

          <div className="content">
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-3-widescreen">
              Q. この授業を選んだ理由は?
            </h3>
            <Answer>
              A1:
              たくさんある基礎セミナーの中で、自分の専門の法学とは関係のないものを選ぼうと思った。「相談」というタイトルに目が止まって、この講義を選んだ。
            </Answer>
            <Answer>
              A2:
              大学入学前から心理学に興味があり、「心理学について勉強したい」「自分の思考の傾向を知りたい」と思っていた。またこれに加え、「他の人の話をきちんと聞けるようになりたい」「言われたことに対して、上手い返事ができるようになりたい」とも思っていた。相手の考えを理解できるようになれば、それもできるようになるのではと考え、そのための練習の場としても、この講義を選んだ。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-3-widescreen">
              Q. 今回の授業の感想を教えてください
            </h3>
            <Answer>
              A1:
              前回、前々回にはロールプレイ（ピア・カウンセリングにおいてどうすればコミュニケーションを取りやすいかについて、患者役・カウンセラー役などに分かれて試してみる）を行ったりするので、他の授業とは異なり能動的に参加できるのがいいと思う。
            </Answer>
            <Answer>
              A2:
              非言語の重大さ、表情がないと、言葉だけでは内容が伝わらないのだということを学んだ。またグループワークでは、話をしている際、他の人に「すごくキョロキョロしながら話すんだね」と言われたが、それは相手に対してどのような印象を与えていたのだろうか、と感じた。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-3-widescreen">
              Q. この授業から得たことを教えてください
            </h3>
            <Answer>
              A: &nbsp;
              普段の生活では得られないコミュニケーションに関する知識が得られた。相手の感情について知ることは、普段の生活にも役立つと思う。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-3-widescreen">
              Q. これからの授業への思いを聞かせてください
            </h3>
            <Answer>
              A1:
              自分は人見知りなので、コミュニケーション能力を伸ばすためにも、体験的な活動に積極的に参加したいと思う。
            </Answer>
            <Answer>
              A2:
              この講義全体の前半の内容は、「エゴグラム」のような「自己分析」がメインだった。それも面白かったし、今回のような「表情を読み取ろう」という内容も面白い。友達同士でコミュニケーションがうまく取れるようになるための練習や、それにあたっての原理やしくみを学ぶことができる場であればいいなと思う。
            </Answer>
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
                <StyledLink to="/topics/topics10/topics10_sugioka_class">
                  授業の様子
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
            <Links />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Topics10_sugioka_students;

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

const Answer = styled.p`
  margin-top: 0vw;
  margin-bottom: 4vw;
  padding-left: 1.9vw;
  text-indent: -1.9vw;
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
