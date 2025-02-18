import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_miyata_class2 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"細胞を観る-マウス胎仔の培養と観察"}
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
              マウス胎仔の培養と観察
            </h1>
          </div>

          <div className="content">
            <p>
              11月下旬～12月には第2のテーマとして、「マウス胎仔から採取した器官の観察・組織片の培養と観察」に取り組みました。学生には、(1)ホルマリン固定したマウス胎仔(下記(注1)参照)、(2)寒天培地に埋め込まれた器官の原基(下記(注2)参照)あるいは組織片が与えられます。そしてテーマ1.に引き続き「脳神経運動系」「循環系」「呼吸系」「消化系」「泌尿生殖系」それぞれの部位の観察を担当する5つの班に分かれ、これらの2種類のサンプルについて3週間にわたり観察を行い、得られた知見及び考察を発表会で発表します。
            </p>
          </div>

          <div className="content">
            <p>
              (1)のサンプルでは、各器官の発生・分化がある一定の段階でストップしているのに対し、(2)のサンプルでは時期の経過とともに、器官原基や組織片からの分化が進行している様子が観察できます。
              <br />
              また(1)のサンプルの内訳は、発生段階の異なる2種類のマウス胎仔(
              胎齢13日目、胎齢18日目)
              となっており、これら2つのサンプル間において器官分化の進行具合が比較できます。日数の経過に伴う器官分化の様子をとらえ、マウスの胚発生について知り、理解・考察を深めることが目的です。またこれはヒトの発生過程と対応させることができるため、ヒトの胚発生について理解する大きな手助けともなります。
            </p>
          </div>

          <div className="content">
            <p>
              (注1) 胎仔:
              ヒト以外の胎生の動物において、出生前、母親の体内で成長段階にある胚のこと。ヒトでいう胎児と同義。
              <br />
              (注2) 原基: 将来、様々な器官の「もと」となる細胞群のこと。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_6.JPG")}
              alt=""
            />
            <p>
              マウス胎仔のサンプル。左側が胎齢13日目、右側が胎齢18日目のものです。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_7.JPG")}
              alt=""
            />
            <p>
              マウスとヒトの発生段階についての換算表。胎齢13日目のマウス胎仔は、およそ胎齢6週目のヒト胎児に相当します。マウス胎仔は胎齢20日前後で出生するため、胎齢18日目は出生間近の段階にあたります。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_8.JPG")}
              alt=""
            />
            <p>マウスから取り出した器官原基・組織片が埋め込まれた寒天培地。</p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_9.JPG")}
              alt=""
            />
            <p>
              寒天培地の中身を顕微鏡観察した時の様子です。この培地には、生殖器系の原基が埋められています。取材日は、各原基・組織片が培地に埋められてからちょうど1週間後でした。1週間前と比較して内部構造が複雑になっており、器官分化が進んでいる様子が伺えるとのことでした。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_10.JPG")}
              alt=""
            />
            <p>
              各5グループには、解析対象となる部位のサンプルに加え、手の原基を埋め込んだ寒天培地のサンプルも観察対象として与えられます。このサンプルを顕微鏡観察した時の様子を、左の写真で示しています。手の形ができつつあるのがわかります。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_11.JPG")}
              alt=""
            />
            <p>
              先生からのアドバイス・コメントも受けながら、解剖・観察に取り組みます。
            </p>
          </div>

          <div className="content">
            <img
              src={withPrefix("/img/topics/topics10/miyata/miyata_pic_12.JPG")}
              alt=""
            />
            <p>マウス胎仔を解剖している様子です。</p>
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
                <StyledLink to="/topics/topics10/topics10_miyata_class1">
                  コオロギの組織観察
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
export default Topics10_miyata_class2;

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
