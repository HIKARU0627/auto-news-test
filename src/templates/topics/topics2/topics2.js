import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics2 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"ボードゲームを究める"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics2/topics2_kanban.png"
        )}`}
      />
      <div
        className="full-width-image margin-top-0 is-medium is-hidden-mobile"
        style={{
          backgroundImage: `url(${withPrefix(
            "/"
          )}img/topics/topics2/topics2_header.jpg)`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-3-desktop has-text-centered">
            <p>【TOPICS No.2】</p>
          </Title>
          <Title className="has-text-weight-bold is-size-2-desktop has-text-centered">
            <p> ボードゲームを究める</p>
          </Title>
        </MesssageBox>
      </div>

      <section className="columns">
        <div className="container column is-9-desktop">
          <img
            className="is-hidden-tablet"
            src={withPrefix("/img/topics/topics2/topics2_newsite_kanban.png")}
            alt=""
          />
          {/* <img className="is-hidden-mobile" src={withPrefix('/img/topics/topics2/topics2_newsite_kanban.png')} alt=""/>
              <img className="is-hidden-tablet" src={withPrefix('/img/topics/topics2/topics2_kanban.png')} alt=""/> */}

          <section className="column is-centered">
            <TitleTopics className="has-text-weight-bold">授業概要</TitleTopics>
            <div className="content">
              <Link to="../../../courses/0025-基礎セミナーボードゲームを究める-2015/">
                <nav className="panel">
                  <a className="panel-block" href="# ">
                    <div className="columns is-full is-multiline is-mobile">
                      <div className="column is-full">
                        <div className="columns is-vcentered">
                          <div className="column is-7">
                            <h1 className="title is-size-4-mobile title is-size-5-mobile is-size-3-tablet">
                              ボードゲームを究める
                            </h1>
                            <h2 className="subtitle has-text-weight-light  is-size-6-mobile is-size-4-tablet is-size-3-desktop">
                              有田隆也
                              <span className="is-size-6-mobile is-size-7-mobile is-size-5-tablet">
                                教授
                              </span>{" "}
                              情報文化学部
                            </h2>
                            <p></p>
                            <h3 className="has-text-weight-bold is-size-6-mobile is-size-4-tablet is-size-4-desktop is-hidden-touch">
                              考える楽しさ
                            </h3>
                            <p className="is-size-7-mobile is-size-6-tablet is-size-6-desktop is-hidden-touch">
                              ゲームに勝つためには、プレイヤー間の駆け引きに想像を膨らませて、戦略を練るということが必要となります。
                              この授業では普段触れることのない海外のボードゲームを取り上げ、実際にプレイし、勝つための戦略を考え、皆で議論します。
                              ボードゲームを通して想像力を鍛え、考えることの楽しさを味わいませんか。
                              <div className="message-body ">
                                <li>開講部局：教養教育院</li>
                                <li>
                                  対象者：文系学部、情報文化学部・自然情報学科(2020年現在：情報学部)、理学部、農学部、工学部(Ⅱ、Ⅲ、Ⅳ系)
                                </li>
                                <li>週1回全15回</li>
                              </div>
                            </p>
                            {/* スマホ版は講義情報のみ載せる */}
                            <div className="is-hidden-desktop is-size-7-mobile is-size-6-tablet">
                              <li>開講部局：教養教育院</li>
                              <li>
                                対象者：文系学部、情報文化学部・自然情報学科(2020年現在：情報学部)、理学部、農学部、工学部(Ⅱ、Ⅲ、Ⅳ系)
                              </li>
                              <li>週1回全15回</li>
                            </div>
                          </div>
                          <div className="column is-5 image">
                            <img
                              src={withPrefix(
                                "/img/topics/topics3/thumbnails/home_arita.jpg"
                              )}
                              alt="topic2_home_a"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </nav>
              </Link>
            </div>
          </section>

          <section className="column is-centered">
            <div className="columns is-centered is-desktop is-11-desktop">
              <div className="container column has-text-left">
                <TitleTopics className="has-text-weight-bold">
                  先生へのインタビュー
                </TitleTopics>

                <div className="column is-hidden-mobile">
                  <Link to="/topics/topics2/topics2_arita">
                    <img
                      src={withPrefix("/img/topics/topics2//top/Arita_PC.png")}
                      alt="topic2_a"
                    />
                  </Link>
                </div>

                <div className="is-hidden-tablet">
                  <Link to="/topics/topics2/topics2_arita">
                    <img
                      src={withPrefix("/img/topics/topics2/top/Arita_SP.png")}
                      alt="topic2_home_arita"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="column is-centered">
            <div className="columns is-centered is-desktop">
              <div className="container column has-text-left">
                <TitleTopics className="has-text-weight-bold">
                  講義の流れ
                </TitleTopics>

                <div className="column has-text-weight-medium">
                  ゲームに勝つためには、プレイヤー間の駆け引きに想像を膨らませて戦略を練るということが必要になります。
                  <br />
                  この授業では、普段触れることにない海外のボードゲームを取り上げ、実際にプレイし、勝つための戦略を考え、皆で議論します。
                  <br />
                  今回は、OCW学生サポーターが授業を体験してきました。
                  <br />
                </div>

                <div className="is-hidden-mobile is-11-desktop">
                  <Link to="/topics/topics2/topics2_lecture">
                    <img
                      src={withPrefix("/img/topics/topics2/top/Lec_PC.png")}
                      alt="topic2_Lec"
                    />
                  </Link>
                </div>

                <div className="is-hidden-tablet">
                  <Link to="/topics/topics2/topics2_lecture">
                    <img
                      src={withPrefix("/img/topics/topics2/top/Lec_SP.png")}
                      alt="topic2_SP"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Topics2;

/*タイトル装飾 ここから*/
const Title = styled.h1`
  text-shadow: 0px 0px 10px #2b2523;
  color: #ffffff;
  line-height: 1.5;
`;

const MesssageBox = styled.div`
  width: 80%;
  display: flex;
  line-height: 1;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
`;

const TitleTopics = styled.div`
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
