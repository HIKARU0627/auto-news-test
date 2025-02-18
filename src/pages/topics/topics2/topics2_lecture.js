import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics2_lecture = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"講義の流れ"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics2/topics2_kanban.png"
        )}`}
      />
      <div className="container column is-11-desktop">
        <section>
          <div className="container column is-9-desktop">
            <div className="content columns is-vcentered">
              <TitleTopics2 className="has-text-weight-bold">
                講義の流れ
              </TitleTopics2>
            </div>

            <div className="content column is-full">
              以下のような流れで進んでいきました。
              <br />
              ①　ルール説明
              <br />
              ②　グループに分かれてゲームをプレイ
              <br />
              ③　グループ交換
              <br />
              ④　先生からまとめ
            </div>

            <div className="container is-10 content columns is-vcentered">
              <div className="container is-8">
                <p className="has-text-weight-semibold">
                  1.事前に担当を決められた学生がゲームのルールを解説
                  <br />
                  <img
                    src={withPrefix("/img/topics/topics2/lec/nagare01.png")}
                    alt="t2_01"
                  />
                  <br />
                  2.グループにわかれてプレイ、中盤にグループ交代。
                  <br />
                  <img
                    src={withPrefix("/img/topics/topics2/lec/nagare02.png")}
                    alt="t2_02"
                  />
                  <br />
                  3.担当の学生はプレイに参加せず、サポートや戦略の分析を行う。
                  途中でグループを入れ替える。
                  <br />
                  <img
                    src={withPrefix("/img/topics/topics2/lec/nagare03.png")}
                    alt="t2_03"
                  />
                  <img
                    src={withPrefix("/img/topics/topics2/lec/nagare04.png")}
                    alt="t2_04"
                  />
                  <br />
                  4.最後に先生がゲームの解説・まとめをする。
                  <br />
                </p>
                <br />
              </div>
              <div className="column is-4 image">
                <img
                  src={withPrefix("/img/topics/topics2/lec/lec_pic.png")}
                  alt="t2_05"
                />
              </div>
            </div>

            <article className="message is-warning">
              <div className="message-body">
                <h3 className="container is-hidden-mobile has-text-weight-bold is-size-6-mobile is-size-4-tablet is-size-4-desktop ">
                  授業を見学してみて
                  <br />
                  <br />
                </h3>
                <div className="columns is-vcentered-desktop">
                  <p className="is-hidden-tablet is-marginless-mobile has-text-weight-bold is-size-6-mobile is-size-4-tablet is-size-4-desktop ">
                    授業を見学してみて
                  </p>
                  <div className="content　container is-9">
                    <p className="container is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                      最初は、皆、「とりあえずプレイ」しているように見えた。しかし、ゲームのコツが分かると、段々とその目つきが変わり、様々な駆け引きが始まる。
                      会話を交えつつプレイしていた学生たちの口数が徐々に減っていき、授業の雰囲気はガラリと変わった。
                      全員、ボードゲームに集中する様には、他の講義と違った緊張感がある。
                      想像していたより人数が少なかったものの、そのおかげで集中できる環境が作られていた。「学部一年に戻ってこの授業を受けたい！」と思ってしまう授業であった。
                    </p>
                  </div>
                  <div className="column is-3 image  is-hidden-mobile">
                    <img
                      src={withPrefix("/img/topics/topics2/lec/yamamoto.png")}
                      alt="t2_yamamoto"
                    />
                  </div>
                </div>
                <img
                  className="is-hidden-tablet"
                  src={withPrefix("/img/topics/topics2/lec/yamamoto.png")}
                  alt="t2_y"
                />
                <p className="has-text-right is-size-7-mobile is-size-6-tablet is-size-6-desktop ">
                  OCWサポーター　理学部2年　山本
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section columns is-centered-widescreen">
          <div className="container column is-10-widescreen ">
            <div className="content columns is-vcentered is-multiline">
              <Arrow>他のコンテンツを見る </Arrow>
              <ul className="column is-12-desktop is-12-touch margin-top-0 has-text-weight-bold">
                <StyledLink to="/topics/topics2/topics2">
                  ◆TOPICS2トップへ
                </StyledLink>
                <br />
                <StyledLink to="/topics/topics2/topics2_arita">
                  ◆先生へのインタビュー
                </StyledLink>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default topics2_lecture;

/*タイトル装飾 ここから*/
const TitleTopics2 = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  border-left: solid 5px #c7b299;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #c7b299;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #c7b299;
  }
`;
/*タイトル装飾 ここまで*/

/*見出し　ポストイット風デザイン https://www.sejuku.net/blog/56721#i-9を参考*/
/*矢印型見出し　はじめ*/
const Arrow = styled.div`
  position: relative;
  padding-left: 30px;
  font-size: 25px;
  &:before {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 0;
    width: 0;
    height: 0;
    border: none;
    border-left: solid 20px transparent;
    border-bottom: solid 20px #c7b299;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 5px #c7b299;
  }
`;
/*矢印型見出し　終わり*/

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;
