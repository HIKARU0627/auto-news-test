import React from "react";
import { withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import IframeMovie from "@common/IframeMovie";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics9agri = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"生物環境科学実験実習"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics9/top/top.jpg"
        )}`}
      />
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/img/topics/topics9/topics9_top.jpg"
          )})`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered">
            生物環境科学実験実習
          </Title>
          <Subtitle className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered">
            農学部生物環境科学科3年
          </Subtitle>
        </MesssageBox>
      </div>

      <section className="section">
        <div className="container">
          <div className="content">
            <p>
              　9月中旬、名古屋大学稲武フィールドで行われた「生物環境科学実験実習」を取材しました。稲武フィールドは、豊田市稲武町にある名古屋大学の演習林で、東山キャンパスから車で90分、長野県に隣接する奥三河の自然豊かな人工林です。生物環境科学実験実習では、化学・生物学・物理学・地学・情報学に基づく生物環境の構造・機能・多様性評価・解析手法を学びます。今回、4泊5日の日程のうち、3日目に行われた実習を取材しました。この日は学科を2つに分け、ヒノキ林とスギ林でそれぞれ実習が行われました。
            </p>
          </div>

          <div className="content">
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              森林を守り、育てる
            </h1>
            <p>
              　ヒノキ林では、森林を健康に保つために木を間引く「伐倒」や、枯れ枝やある高さまでの枝を切り落とす「枝打ち」と呼ばれる作業が行われました。
            </p>

            <div className="columns is-variable is-0-widescreen">
              <div className="column has-text-centered">
                <img
                  src={withPrefix("/img/topics/topics9/agriculture/01.jpg")}
                  alt="t9_argi01"
                />
              </div>
              <div className="column">
                <p>
                  伐倒（木を間引く作業）する木に目印をつけ、直径などを測定する様子。ただ木を切るだけでなく、その後分析をするのも実習のひとつです。
                </p>
              </div>
              <div className="column has-text-centered">
                <img
                  src={withPrefix("/img/topics/topics9/agriculture/02.jpg")}
                  alt="t9_argi02"
                />
              </div>
              <div className="column">
                <p>
                  学生がチェーンソーを用いて伐倒（木を間引く作業）を行う様子。チェーンソーに触れるのが始めてという学生が多く、緊張した様子で作業をしていました。
                </p>
              </div>
            </div>

            <div className="columns is-variable is-0-widescreen">
              <div className="column has-text-centered">
                <img
                  src={withPrefix("/img/topics/topics9/agriculture/03.jpg")}
                  alt="t9_argi03"
                />
              </div>
              <div className="column">
                <p>
                  倒した木が他の木に寄りかかってしまう「かかり木」が発生した様子。安全に処理するには知識と技術が必要です。
                </p>
              </div>
              <div className="column is-3 has-text-centered">
                <img
                  src={withPrefix("/img/topics/topics9/agriculture/04.jpg")}
                  alt="t9_argi04"
                />
              </div>
              <div className="column is-3">
                <p>倒した木から、樹高を測定する様子。</p>
              </div>
            </div>

            <div className="columns is-variable is-0-widescreen">
              <div className="column is-3 has-text-centered">
                <img
                  src={withPrefix("/img/topics/topics9/agriculture/05.jpg")}
                  alt="t9_argi05"
                />
              </div>
              <div className="column is-3">
                <p>
                  木を倒した後の切り株。この年輪からも様々な情報が得られるため、学生はここから円盤を切り取って持ち帰り、分析します。
                </p>
              </div>
            </div>
          </div>

          <div className="content">
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              森林の今を知り、未来を考える
            </h1>
            <p>
              　スギ林では、木々をひとつひとつ測定し、地形によって木の成長がどう変わるかを調べる実習（標準地調査）が行われました。
            </p>

            <div className="columns is-variable is-0-widescreen">
              <div className="column is-3 has-text-centered">
                <img
                  src={withPrefix("/img/topics/topics9/agriculture/06.jpg")}
                  alt="t9_argi06"
                />
              </div>
              <div className="column is-3">
                <p>
                  スギ林では、尾根付近の急斜面で実習が行われます。数日前の雨もあり、斜面は非常に滑りやすくなっていました。
                </p>
              </div>
              <div className="column is-3 has-text-centered">
                <img
                  src={withPrefix("/img/topics/topics9/agriculture/07.jpg")}
                  alt="t9_argi07"
                />
              </div>
              <div className="column is-3">
                <p>
                  測高器で樹木の高さを測る様子。尾根付近の定められた区画の中にある樹木の位置や高さを図に記録します。ここで作成した図を基に、将来この林をどうするか、計画を立てる実習も行われます。
                </p>
              </div>
            </div>
          </div>

          <div className="content">
            <hi className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              学生へのインタビュー
            </hi>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 木を切ってみた感想は？
            </h2>
            <ul>
              <li>今まで実際に見たことは無かったけれど、迫力があった。</li>
              <li>
                チェーンソーの扱いが難しかった。木にちゃんと歯を当てないと暴れて危なかった。
              </li>
            </ul>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 実習の感想は？
            </h2>
            <ul>
              <li>
                専門的な知識もあって難しいと感じることもあるが、深く知ることができるので楽しい。
              </li>
              <li>
                実習は大変だけど、夜は皆で喋るなどもあって、楽しい学科、楽しい実習だと感じる。
              </li>
              <li>
                机に向かうよりも外に出てフィールドワークをしているほうが楽しい。このような機会の多い学科を探してここに入学したが、満足している。
              </li>
              <li>
                日本の斜面は急で、機械が入りづらいから木材が高くなる、という話を聞いたことがあったが、実際に山に来てみると本当に斜面が急で、大変だと思った。
              </li>
            </ul>
          </div>

          <div className="content">
            <hi className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              先生へのインタビュー
            </hi>
            <p>
              　ヒノキ林での実習を担当された近藤先生と、スギ林での実習を担当された山本先生にお話を伺いました。
            </p>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 学生の印象は？
            </h2>
            <ul>
              <li>
                整備されていない山の中のような環境が好きだという人もいれば嫌いだという人もいるように、学生の中にも好き嫌いがあるように感じるが、みんな主体的に実習に参加していると思う。（近藤先生）
              </li>
            </ul>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 実習のねらいは？
            </h2>
            <ul>
              <li>
                机上での学習ばかりでなく、実際に山に入ってどうなっているのかを体験して欲しい。自然と慣れ親しんで欲しい。（近藤先生）
              </li>
              <li>
                標準地調査は、区画内の木の位置や高さを記録して、将来この林をどう変えていきたいかを仮想的に検討するのが目的。（山本先生）
              </li>
            </ul>
          </div>

          <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
            ビデオ
          </h1>
          <div className="columns">
            <div
              className="column is-12-mobile is-half-desktop"
              style={{ margin: "0 auto" }}
            >
              <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/ea373802336af8f9c19a9c47628737289d2a9539/autostart/false/caption/true" />
            </div>
          </div>

          <div className="content">
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              関連リンク・参考資料
            </h1>
            <ul>
              <li className="list-item">
                <a
                  href="/img/topics/topics9/agriculture/hinoki.pdf"
                  target="blank"
                >
                  「ヒノキ林での造材実習」実習書
                </a>
              </li>
              <li className="list-item">
                <a
                  href="/img/topics/topics9/agriculture/sugi.pdf"
                  target="blank"
                >
                  「スギ林での毎木調査」実習書
                </a>
              </li>
              <li className="list-item">
                <a href="https://www.agr.nagoya-u.ac.jp/" target="blank">
                  名古屋大学大学院生命農学研究科・農学部
                </a>
              </li>
              <li className="list-item">
                <a href="http://www.agr.nagoya-u.ac.jp/~inabu/" target="blank">
                  名古屋大学稲武フィールド
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Topics9agri;

const MesssageBox = styled.div`
  width: 80%;
  display: flex;
  line-height: 1;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
`;

const Title = styled.h1`
  text-shadow: 0px 0px 10px #2b2523;
  color: #ffffff;
  line-height: 1.5;
`;

const Subtitle = styled.h2`
  text-shadow: 0px 0px 10px #2b2523;
  color: #ffffff;
  line-height: 2;
`;
