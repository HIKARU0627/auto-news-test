import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_kajiwara_teacher = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"考古学入門-先生へのインタビュー"}
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
              先生へのインタビュー
            </h1>
          </div>

          <div className="content">
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 授業を組み立て行う際、どんなことを心がけていますか?
            </h3>
            <Answer>
              A: &nbsp;
              基礎セミナーという一年生向けの授業なので、学生にとってわかりやすい、とっつきやすい授業の組み立てを心がけています。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. この授業を通して先生が学生にもっとも伝えたいことは何ですか?
            </h3>
            <Answer>
              A: &nbsp;
              専攻生ではないので、考古学という学問分野の楽しさをまずわかっていただけたらと思っています。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 近頃の学生に対してどのようなことを思いますか?
            </h3>
            <Answer>
              A: &nbsp;
              指摘や指導したことは、きちんとこなしてくる優秀さを感じるとともに、それ以上の積極性や自主性が少ないことは気になります。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. この授業を通して何か感じたことはありますか?
            </h3>
            <Answer>
              A: &nbsp;
              初は食いつきの悪い学生が多いかな、と感じましたが、意外に興味を持ってくれた学生が多かったようで、楽しく授業ができました。
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
                <StyledLink to="/topics/topics10/topics10_kajiwara_students">
                  学生へのインタビュー
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
export default Topics10_kajiwara_teacher;

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
