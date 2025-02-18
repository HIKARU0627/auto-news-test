import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_miyata_students = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"細胞を観る-学生へのインタビュー"}
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
              学生へのインタビュー: コオロギの組織観察
            </h1>
          </div>

          <div className="content">
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 何に注目して観察したか?
            </h3>
            <Answer>
              A1:
              呼吸がどのように行われるかを調べるために、呼吸をするために動くお腹の筋肉を観察した。
            </Answer>
            <Answer>
              A2:
              消化器系について調べているので、口から胃や腸を含めて肛門までを観察した。前回はメスで調べたので、今回はオスで調べた。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 観察をしていて何か発見したことや面白いと思ったことはあったか？
            </h3>
            <Answer>
              A1:
              羽の付け根あたりはすごく筋肉が多いことがわかった。呼吸するための筋肉はよくわからなかった。(呼吸器系の観察担当)
            </Answer>
            <Answer>
              A2:
              観察だけだとどうしても表面的にしかわからないことが多かったが、実際に解剖をしていろいろなことがわかったので良かった。(消化器系の観察担当)
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. オスとメスで何か違いはあるか?
            </h3>
            <Answer>
              A: &nbsp;
              メスだと卵があって観察がしづらい。オスのほうがやりやすい。(消化器系の観察担当)
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 観察をする上で難しかったことは何か?
            </h3>
            <Answer>
              A1:
              顕微鏡を見ながら手を動かすというのが初めての経験だったので、やはりそこが難しかった。(呼吸器系の観察担当)
            </Answer>
            <Answer>
              A2:
              実際に臓器を見るのは初めてなので、取り出した部分のどれがどの臓器なのかを考えるのに苦労した。(消化器系の観察担当)
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. この講義を選んだ理由は?
            </h3>
            <Answer>
              A: &nbsp;
              他のセミナーと違って、実体験として学べるものが多いところに魅力を感じて受講した。(消化器系の観察担当)
            </Answer>
          </div>

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
              学生へのインタビュー: マウス胎仔の培養と観察
            </h1>
          </div>

          <div className="content">
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 何を観察したか?
            </h3>
            <Answer>
              A1:
              13日目のマウスの胎児から取り出した心臓を培養したものが、先週からどのように変化したかを観察した。
            </Answer>
            <Answer>
              A2:
              マウスの泌尿生殖器系を取り出し培養したものを観察した。また、お腹の中で13日目で成長が止まっているものを解剖し、観察した。
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q. 今回の観察で気づいたことはあったか?
            </h3>
            <Answer>
              A1:
              想像では培養していた細胞が成長し、心臓のような形になっていると思っていたが、実際にはそのようにはなっていなかった。(循環器系の観察担当)
            </Answer>
            <Answer>
              A2:
              寒天培地上で成長した方(器官原基・組織片サンプル)は前回よりも構造が複雑になっており、前回よりも成長していることが実感できた。前回は生殖器と泌尿器は両方ともボヤッとした白い丸が見られただけだったが、今日は形がくっきりとしており、中にひだ状の構造物が見えて器官へと成長していることが分かった。(泌尿・生殖器系の観察担当)
            </Answer>
            <h3 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              Q.
              マウスはコオロギよりも人間に近いサンプルとなっているが、扱ってみて気付いたこと、感じたことはあるか?
            </h3>
            <Answer>
              A1:
              マウスは肺があり、その中に心臓があるなど人間と同じような構造をしているので、臓器を見つけやすかった。(循環器系の観察担当)
            </Answer>
            <Answer>
              A2:
              コオロギは「こんなに違うのか！」「こういう生き物もいるのか！」と言った人間との違いに面白さがあった。今回は人間とは違う部分もあったが、似ている部分も多く、人間の体についての面白さがあった。(泌尿・生殖器系の観察担当)
            </Answer>
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
                <StyledLink to="/topics/topics10/topics10_miyata_class2">
                  マウス胎仔の培養と観察
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
export default Topics10_miyata_students;

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

const Answer = styled.p`
  margin-top: 0vw;
  margin-bottom: 4vw;
  padding-left: 1.9vw;
  text-indent: -1.9vw;
`;
