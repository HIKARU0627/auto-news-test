import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics10_yanagihara_class = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"レポート作成と口頭発表の技術-授業内容"}
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
              授業内容
            </h1>
          </div>

          <div className="content">
            <p>
              大学の授業では、しばしば授業で学んだことについてレポートにまとめたり、発表をしたりします。誰もがその時に、「どう工夫すれば相手にうまく伝わるだろう？」と思うことでしょう。この疑問は、大学の授業だけでなく、ゼミや研究室、そして社会に出た後も続いていきます。
              <br />
              今回、私は「レポート作成と口頭発表の技術」を取材しました。この授業では、レポート作成や口頭発表を実際に行い、その内容や工夫等について皆で討論しながら技術を身に着けていきます。授業は楽しく、活発な議論で盛り上がり、先生を含めた皆でお互いに技術を磨き合う雰囲気がありました。
            </p>
          </div>

          <div className="content">
            <H2 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              発表と討論で切磋琢磨
            </H2>
            <p>
              この授業は、主に『学生が発表→学生と先生が発表についての批評や問題点・改善点についての討論、解説』という形式で進められていきます。発表の後の討論タイムでは、皆が活発に「どこをどう変えればもっと発表や資料のまとめ方がよくなるか」を話し合っていました。伝え方は同じであっても、受け取り方は人それぞれ。発表者自身では気づかなかったような意見が飛び出したり、さらには意見同士の食い違いが見られたりもしました。相手に、伝えたいことを正しく伝えるのがレポートや発表の基本です。自分の「伝え方」について多くの人からのフィードバックを受け取ることのできるこの授業は、これからの大学生活や社会に出た後の大きな糧となると思いました。
            </p>
            <img
              src={withPrefix(
                "/img/topics/topics10/yanagihara/yanagihara_pic_1.jpg"
              )}
              alt=""
            />
            <p>
              「発表レジュメの文字サイズがすべて同じになってしまって見にくい」「原稿だけを読んでいては伝わらないのでは」等、皆が議論で盛り上がります。
            </p>
          </div>

          <div className="content">
            <H2 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              積極的に意見を伝える
            </H2>
            <p>
              「発表の声の出し方について気になったことはありましたか?」「プレゼンシートの書き方について何か意見はありますか?」柳原先生は授業中、積極的に学生に話を振り、意見を求めていました。そして、それに応えるように学生は次から次へと自分の意見をぶつけていました。しかし、先生は「もっと学生さんたちには元気になって欲しいです。」と言います。「情報を正しく伝える事」はもちろん大切ですが、「積極的に意見や考えを述べる事」も大切です。この授業は、自分の意見を積極的に伝える事も重視して設計されていると感じました。
            </p>
          </div>

          <div className="content">
            <H2 className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
              先生の解説に詰まったレポート執筆・口頭発表のエッセンス
            </H2>
            <p>
              「引用には決まったルールがある。それをしっかりと守らないと剽窃になる。」「若いうちは発表では台本を使っていった方がいい。それを通じて発表の技術を高めていける。」授業で先生は、様々な文章執筆・プレゼンのエッセンスを紹介・解説していました。文章を書くことやプレゼンをすることは大学生活だけでなく、社会に出てからも頻繁にそのような機会があります。大学1年生という、「これから」の時期に、文章執筆・プレゼンのスキルを身に着けることは、将来にとって大変重要であり、その意味でもこの授業は、とても意義のあるものとなるでしょう。
            </p>
            <img
              src={withPrefix(
                "/img/topics/topics10/yanagihara/yanagihara_pic_2.jpg"
              )}
              alt=""
            />
            <p>
              雑談を交えながら、文章執筆・プレゼンのエッセンスを紹介・解説していく柳原先生
            </p>
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
                <StyledLink to="/topics/topics10/topics10_yanagihara_students">
                  学生へのインタビュー
                </StyledLink>
              </li>
              <li className="list-item has-text-white">
                <StyledLink to="/topics/topics10/topics10_yanagihara_teacher">
                  先生へのインタビュー
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
export default Topics10_yanagihara_class;

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

const H2 = styled.h2`
  position: relative;
  padding-left: 1em;
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
