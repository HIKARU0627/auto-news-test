import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_yanagihara_teacher = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"レポート作成と口頭発表の技術-先生へのインタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics10/top/top.png"
        )}`}
      />
      <Header className="full-width-image margin-top-0">
        <HeaderIconYellow
          src={withPrefix("/img/topics/topics10/top/header_icon_yellow.svg")}
          alt=""
        />
        <Title>
          <div className="container">
            <h1 className="is-size-5-mobile is-size-2-tablet is-size-1-widescreen">
              レポート作成と口頭発表の技術
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
                  "/img/topics/topics10/yanagihara/yanagihara_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <figure className="image is-64x64	is-marginless is-paddingless column is-narrow is-hidden-tablet">
              <img
                src={withPrefix(
                  "/img/topics/topics10/yanagihara/yanagihara_headline_icon1.svg"
                )}
                alt=""
                style={{ opacity: `0.22` }}
              />
            </figure>
            <h1 className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column">
              先生へのインタビュー
            </h1>
          </div>

          <div className="content">
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. この授業で心がけていることは何ですか?
            </h3>
            <Answer>
              A: &nbsp;
              この基礎セミナーでは、「書く」ことと「話す」ことを、出席される学生さん全員にわかっていただけるように気を配っています。学生さんが今後、立派な研究をされても、それを他の人たち、例えば本学の先生、先輩や同僚、あるいは他大学の先生方に単に「伝える」だけでは、十分に内容を理解いただけないかもしれません。自分が発信する情報をどのようにすれば「受け入れ」てもらえるのか、それを学んで頂ける場を提供するように努めています。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. この授業を通して、先生が学生に最も伝えたいことは何でしょうか?
            </h3>
            <Answer>
              A: &nbsp;
              「自分で判断することの大切さ」を伝えたいです。うまく「書く」ことと「話す」ことについては、わたしは誰にもあてはまる鉄則のようなものはないと思っています。学生さん各自にとって、よりよいものを探していくことが大事だと思っています。そのため、この基礎セミナーでは私の、あるいは他の学生さんのやり方が、自分のやり方に合うのか、自分自身で常に判断をしていただくようにしています。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 授業を行う中で、近頃の学生に対してどのようなことを思いますか?
            </h3>
            <Answer>
              A: &nbsp;
              与えられた課題に対して期待以上の成果を出してくれます。非常にまじめで、優秀だと思います。少し欲を言えば、もうちょっと積極性、あるいは貪欲さを持ってもらえればと思います。自分自身の持っている可能性の領域を自分自身で限定している気がします。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. この授業を通して何か感じたことはありますか?
            </h3>
            <Answer>
              A: &nbsp;
              学生さんの方がまじめで、わたしが雑談をしたり、あるいは横道にそれたりするのを不安そうに見ているのが印象的でした。わたしがもっとちゃんとしないといけないと、むしろ教えられました。
            </Answer>
          </div>
        </div>
      </section>

      <section className="section columns is-centered is-widescreen">
        <div
          className="container column is-6-widescreen box"
          style={{ backgroundColor: `rgba(238, 225, 15, 0.8)` }}
        >
          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/yanagihara/yanagihara_headline_icon2.svg"
                )}
                alt=""
              />
            </figure>
            <h1 className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column">
              他の回を見る
            </h1>
            <ul className="column is-10 margin-top-0 has-text-weight-bold">
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_yanagihara_class">
                  授業内容
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_yanagihara_students">
                  学生へのインタビュー
                </StyledLink>
              </li>
            </ul>
          </div>

          <div className="content columns is-vcentered is-multiline">
            <figure className="image is-96x96	is-marginless column is-narrow is-hidden-mobile">
              <img
                src={withPrefix(
                  "/img/topics/topics10/yanagihara/yanagihara_headline_icon2.svg"
                )}
                alt=""
              />
            </figure>
            <h1 className="has-text-bold is-size-4-mobile is-size-2-tablet is-size-2-widescreen column">
              他の授業を見る
            </h1>
            <ul className="column is-10 margin-top-0 has-text-weight-bold">
              <li className="list-item">
                <StyledA href="/topics/topics10/topics10#red">
                  ピア・カウンセリング体験を通して、他社理解及び対人援助の基礎を理解する
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
export default Topics10_yanagihara_teacher;

const Header = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/yanagihara/yanagihara_header_pic.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  position: relative;
`;

const HeaderIconYellow = styled.img`
  background-color: rgba(255, 241, 0, 0.4);
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
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
  position: relative;
  padding-left: 1.5em;
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

const StyledA = styled.a`
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
  position: relative;
  padding-left: 1.5em;
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

const Answer = styled.p`
  margin-top: 0vw;
  margin-bottom: 4vw;
  padding-left: 1.9vw;
  text-indent: -1.9vw;
`;
