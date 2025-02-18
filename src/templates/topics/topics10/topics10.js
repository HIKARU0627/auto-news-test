import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10 = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"基礎セミナー特集"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics10/top/top.png"
        )}`}
      />
      <Header className="full-width-image margin-top-0">
        <HeaderRed>
          <HeaderIconRed
            src={withPrefix("/img/topics/topics10/top/header_icon_red.svg")}
          />
        </HeaderRed>
        <HeaderYellow>
          <HeaderIconYellow
            src={withPrefix("/img/topics/topics10/top/header_icon_yellow.svg")}
          />
        </HeaderYellow>
        <HeaderGreen>
          <HeaderIconGreen
            src={withPrefix("/img/topics/topics10/top/header_icon_green.svg")}
          />
        </HeaderGreen>
        <HeaderBlue>
          <HeaderIconBlue
            src={withPrefix("/img/topics/topics10/top/header_icon_blue.svg")}
          />
        </HeaderBlue>
        <HeaderViolet>
          <HeaderIconViolet
            src={withPrefix("/img/topics/topics10/top/header_icon_violet.svg")}
          />
        </HeaderViolet>
        <Title>
          <div className="container">
            <h1 className="has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
              【Topics No.10】基礎セミナー特集
            </h1>
          </div>
        </Title>
      </Header>

      <section className="section columns">
        <div className="container column is-9-widescreen">
          <div className="column">
            <img
              src={withPrefix("/img/topics/topics10/top/small_title.svg")}
              style={{ width: "60%" }}
              alt="topics10_small_title"
            />
            <a id="red" href="# ">
              <br />
              <br />
            </a>
            <div className="script">
              みなさんは「基礎セミナー」という科目を聞いたことがありますか?
              名古屋大学のシラバスによると、基礎セミナーとは「多面的な知的トレーニングによって、コモンベーシックとしての読み、書き、話す能力のかん養を図るとともに、真理探究の方法と面白さを学ぶ科目」とありますが、今一つピンときませんよね?
              今回のTOPICSでは、そんな「よくわからない」基礎セミナーについて取材しました。記事を読んで、基礎セミナーの雰囲気をつかみましょう!
            </div>
            <br />
            <br />
          </div>
          <div>
            <ButtonBox>
              <div className="box" style={{ backgroundColor: "#ff7f7f" }}>
                <div className="columns is-vcentered is-desktop">
                  <div className="column">
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_pic_red.png"
                      )}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        zindex: 2,
                      }}
                      alt="topics10_button_pic_red"
                    />
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_icon_red.svg"
                      )}
                      style={{
                        position: "absolute",
                        right: "5%",
                        height: "80%",
                        zindex: 1,
                      }}
                      alt="topics10_button_icon_red"
                    />
                    <div style={{ zindex: 2, position: "relative" }}>
                      <p className="title is-size-5-mobile is-size-1-tablet has-text-right">
                        What is Counseling?
                      </p>
                      <p className="subtitle  is-size-7-mobile has-text-right">
                        ピア・カウンセリング体験を通して
                        <br />
                        他者理解及び対人援助の基礎を理解する (杉岡正典先生)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ButtonBox>

            <div className="column">
              <div className="column">
                <p>
                  「ピア・カウンセリング」という言葉について、みなさんはご存知でしょうか?
                  「ピア・カウンセリング」とは、同じ仲間として他者の話を聞き、他者を理解して行くための援助法のことです。グループワークやロールプレイを通じて「ピア・カウンセリング」に触れてみる、2016年度後期開講の基礎セミナー「ピア・カウンセリング」(担当:
                  杉岡正典先生) を取材しました。
                </p>
              </div>
              <a id="yellow" href="# ">
                <ul className="column ">
                  <li>
                    <StyledLink to="/topics/topics10/topics10_sugioka_class">
                      授業内容のページへ
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics10/topics10_sugioka_students">
                      学生へのインタビューのページへ
                    </StyledLink>
                  </li>
                </ul>
              </a>
            </div>
            <br />

            <ButtonBox>
              <div className="box" style={{ backgroundColor: "#f5f178" }}>
                <div className="columns is-vcentered is-desktop">
                  <div className="column">
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_pic_yellow.png"
                      )}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        zindex: 2,
                      }}
                      alt="topics10_button_pic_yellow"
                    />
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_icon_yellow.svg"
                      )}
                      style={{
                        position: "absolute",
                        right: "5%",
                        height: "80%",
                        zindex: 1,
                      }}
                      alt="topics10_button_icon_yellow"
                    />
                    <div style={{ zindex: 2, position: "relative" }}>
                      <p className="title is-size-5-mobile is-size-1-tablet has-text-right">
                        How to Write Papers.
                      </p>
                      <p className="subtitle  is-size-7-mobile has-text-right">
                        レポート作成と口頭発表の技術 (柳原光芳先生)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ButtonBox>

            <div className="column">
              <div className="column">
                <p>
                  大学の授業では、しばしば授業で学んだことについてレポートにまとめたり、発表をしたりします。誰もがその時に、「どう工夫をすれば相手にうまく伝わるだろう?」と思うことでしょう。レポート作成や口頭発表を実際に行い、その内容や工夫等について皆で討論しながら技術を身に着けていく、2016年後期開講の基礎セミナー「レポート作成と口頭発表の技術」(担当:
                  柳原光芳先生) を取材しました。
                </p>
              </div>
              <a id="green" href="# ">
                <ul className="link">
                  <li>
                    <StyledLink to="/topics/topics10/topics10_yanagihara_class">
                      授業内容のページへ
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics10/topics10_yanagihara_students">
                      学生へのインタビューのページへ
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics10/topics10_yanagihara_teacher">
                      先生へのインタビューのページへ
                    </StyledLink>
                  </li>
                </ul>
              </a>
            </div>
            <br />

            <ButtonBox>
              <div className="box" style={{ backgroundColor: "#8af46d" }}>
                <div className="columns is-vcentered is-desktop">
                  <div className="column">
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_pic_green.png"
                      )}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        zindex: 2,
                      }}
                      alt="topics10_button_pic_green"
                    />
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_icon_green.svg"
                      )}
                      style={{
                        position: "absolute",
                        right: "5%",
                        height: "80%",
                        zindex: 1,
                      }}
                      alt="topics10_button_icon_green"
                    />
                    <div style={{ zindex: 2, position: "relative" }}>
                      <p className="title is-size-5-mobile is-size-1-tablet has-text-right">
                        Be a TV Director!
                      </p>
                      <p className="subtitle is-size-7-mobile has-text-right">
                        メディア研究・ビデオ制作を通した
                        <br />
                        メディアリテラシーの獲得 (後藤明史先生)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ButtonBox>

            <div className="column">
              <div className="column">
                <p>
                  「メディアリテラシー」という言葉をご存知でしょうか?
                  インターネットやテレビ、新聞などのメディアが伝える情報を理解し、見極め、使いこなす能力のことを「メディアリテラシー」と呼びます。実際に番組を制作することでこれらの獲得を目指す、2016年度後期開講の基礎セミナー「メディア研究・ビデオ制作を通したメディアリテラシーの獲得」(担当:
                  後藤明史先生) を取材しました。
                </p>
              </div>
              <ul className="link">
                <li>
                  <StyledLink to="/topics/topics10/topics10_goto_class1">
                    「OBによる講演会と番組製作に向けた話し合い 1」のページへ
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/topics/topics10/topics10_goto_class2">
                    「番組制作に向けた話し合い 2」のページへ
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/topics/topics10/topics10_goto_class3">
                    「番組収録」のページへ
                  </StyledLink>
                </li>
                <a id="blue" href="# ">
                  <li>
                    <StyledLink to="/topics/topics10/topics10_goto_students">
                      学生へのインタビューのページへ
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics10/topics10_goto_teacher">
                      先生へのインタビューのページへ
                    </StyledLink>
                  </li>
                </a>{" "}
              </ul>
            </div>
            <br />

            <ButtonBox>
              <div className="box" style={{ backgroundColor: "#7983dc" }}>
                <div className="columns is-vcentered is-desktop">
                  <div className="column">
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_pic_blue.png"
                      )}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        zindex: 2,
                      }}
                      alt="topics10_button_pic_blue"
                    />
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_icon_blue.svg"
                      )}
                      style={{
                        position: "absolute",
                        right: "5%",
                        height: "80%",
                        zindex: 1,
                      }}
                      alt="topics10_button_icon_blue"
                    />
                    <div style={{ zindex: 2, position: "relative" }}>
                      <p className="title is-size-5-mobile is-size-1-tablet has-text-right">
                        Letʼs Analyze Aminals!
                      </p>
                      <p className="subtitle  is-size-7-mobile has-text-right">
                        細胞を観る、記載する、そして伝える (宮田卓樹先生)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ButtonBox>

            <div className="column">
              <div className="column">
                <p>
                  学期後期、医学部医学科の1年生向けに基礎セミナーB「細胞を観る、記載する、そして伝える」(担当:
                  同学部、宮田卓樹先生)
                  が開講されました。この講義では、様々な生体材料の「観察」を通して知識を深め、それをもとに発表を行うという、座学とは別な実践的な形式がとられています。学生たちは不慣れな解剖に苦戦しつつも、工夫を凝らしながら意欲的に取り組み、また成果についても活発な議論を交わし合いました。
                </p>
              </div>

              <ul className="link">
                <a id="violet" href="# ">
                  <li>
                    <StyledLink to="/topics/topics10/topics10_miyata_class1">
                      「コオロギの組織観察」のページへ
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics10/topics10_miyata_class2">
                      「マウス胎仔から採取した器官の観察・組織片の培養と観察」のページへ
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics10/topics10_miyata_students">
                      学生へのインタビューのページへ
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics10/topics10_miyata_teacher">
                      先生へのインタビューのページへ
                    </StyledLink>
                  </li>
                </a>
              </ul>
            </div>

            <br />
            <ButtonBox>
              <div className="box" style={{ backgroundColor: "#D8A0DE" }}>
                <div className="columns is-vcentered is-desktop">
                  <div className="column">
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_pic_violet.png"
                      )}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        zindex: 2,
                      }}
                      alt="topics10_button_pic_violet"
                    />
                    <img
                      src={withPrefix(
                        "/img/topics/topics10/top/button_icon_violet.svg"
                      )}
                      style={{
                        position: "absolute",
                        right: "5%",
                        height: "80%",
                        zindex: 1,
                      }}
                      alt="topics10_button_icon_violet"
                    />
                    <div style={{ zindex: 2, position: "relative" }}>
                      <p className="title is-size-5-mobile is-size-1-tablet has-text-right">
                        Welcome to Ancient Time!
                      </p>
                      <p className="subtitle is-size-7-mobile has-text-right">
                        「考古学入門」～考古学に触れる～ (梶原義実先生)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ButtonBox>

            <div className="column">
              <div className="column">
                <p>
                  考古学といえば、マスコミにもよく取り上げられ馴染み深い学問ですが、現場ではどのようなことが行われているのでしょうか?
                  フィールドワークや博物館見学を通じて考古学に触れてみる、2016年後期開講の基礎セミナー「考古学入門」(担当:
                  梶原義実先生) を取材しました。
                </p>
              </div>
              <ul className="link">
                <li>
                  <StyledLink to="/topics/topics10/topics10_kajiwara_class">
                    「測量実習・名古屋大学の遺跡を知る・報告会」のページへ
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/topics/topics10/topics10_kajiwara_students">
                    学生へのインタビューのページへ
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/topics/topics10/topics10_kajiwara_teacher">
                    先生へのインタビューのページへ
                  </StyledLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Topics10;

const Header = styled.div`
  background-position: center center;
  background-size: cover;
  position: relative;
`;

const HeaderRed = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/top/header_pic_red.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  width: 20%;
  height: 100%;
`;

const HeaderIconRed = styled.img`
  background-color: rgba(255, 0, 0, 0.25);
  backgroundposition: center center;
  backgroundsize: cover;
  width: 100%;
  height: 100%;
`;

const HeaderYellow = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/top/header_pic_yellow.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  width: 20%;
  height: 100%;
`;

const HeaderIconYellow = styled.img`
  background-color: rgba(255, 255, 0, 0.4);
  backgroundposition: center center;
  backgroundsize: cover;
  width: 100%;
  height: 100%;
`;
const HeaderGreen = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/top/header_pic_green.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  width: 20%;
  height: 100%;
`;

const HeaderIconGreen = styled.img`
  background-color: rgba(0, 255, 0, 0.4);
  backgroundposition: center center;
  backgroundsize: cover;
  width: 100%;
  height: 100%;
`;
const HeaderBlue = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/top/header_pic_blue.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  width: 20%;
  height: 100%;
`;

const HeaderIconBlue = styled.img`
  background-color: rgba(0, 0, 255, 0.4);
  backgroundposition: center center;
  backgroundsize: cover;
  width: 100%;
  height: 100%;
`;
const HeaderViolet = styled.div`
  background-image: url("${withPrefix(
    "/img/topics/topics10/top/header_pic_violet.jpg"
  )}");
  background-position: center center;
  background-size: cover;
  width: 20%;
  height: 100%;
`;

const HeaderIconViolet = styled.img`
  background-color: rgba(255, 0, 255, 0.4);
  backgroundposition: center center;
  backgroundsize: cover;
  width: 100%;
  height: 100%;
`;

const ButtonBox = styled.div`
background-color: rgba(0, 0, 0,0);
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
display: inline-block;
position: relative;
&:hover {
  color: #ffffff;
}
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
`;

const StyledLink = styled(Link)`
  color: #606060;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
  position: relative;
  padding-left: 1.5em;
  ::before {
    content: "➤";
    margin: 0 0.5rem;
    text-decoration: none;
    display: inline-block;
  }
`;
