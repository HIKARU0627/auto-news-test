import React from "react";
import { withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import IframeMovie from "@common/IframeMovie";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics9chem = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"有機化学実験第2"}
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
            有機化学実験第2
          </Title>
          <Subtitle className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered">
            工学部 化学・生物工学科3年生
          </Subtitle>
        </MesssageBox>
      </div>

      <section className="section">
        <div className="container">
          <div className="content">
            <p>
              　工学部
              化学・生物工学科の3年生を対象に行われた「有機化学実験第2」を取材しました。この実験では、これまでに履修した有機化学の授業で学んだ様々な反応を実際に目の前で見ることができ、学生はひとつひとつの反応や変化を確かめながら実験をしていました。毎週、有機化学系の研究室が独自のテーマを用意し実験が行われ、4年次の研究室配属に向けた第一歩としても重要な実験となっています。
            </p>
          </div>

          <div className="content">
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              工学部 化学・生物工学科3年生 有機化学実験第2
            </h1>
            <p>
              　この日は、クロスカップリングと呼ばれる反応を行いました。この反応は、現在様々な化合物を合成するために頻繁に用いられる反応で、その一部は過去にノーベル化学賞も受賞しています。この実験では、その先駆けとなった、熊田・玉尾・コリューカップリングと呼ばれる、歴史的にも重要な反応を行いました。
            </p>

            <div className="columns is-variable is-0-widescreen">
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/chemistry/01.jpg")}
                    alt="t9_chem01"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>
                  実験室の様子。この反応に用いる物質は空気と反応してしまうため、風船を用いて容器内に窒素を充満させていました。有機化学の実験では反応に数時間を要することも珍しくありません。
                </p>
              </div>
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/chemistry/02.jpg")}
                    alt="t9_chem02"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>
                  実験に用いた触媒。触媒は、効率よく反応を進める役目を持ちます。実験に用いる物質は、扱い方によっては危険なものも多く、学生は2年次に半年かけて安全に関する教育を受けます。
                </p>
              </div>
            </div>

            <div className="columns is-variable is-0-widescreen">
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/chemistry/03.jpg")}
                    alt="t9_chem03"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>
                  反応中の様子。反応中には、温度や色などに変化が現れることがあり、学生はよく観察しながら反応の様子を記録していました。
                </p>
              </div>
            </div>

            <p>
              　別の日には、合成繊維などに用いられる高分子化合物を合成する実験が行われました。高分子化合物は、プラスチック製品や合成繊維をはじめ、非常に広い分野で私達の生活に欠かせない物質で、これに関する研究が盛んに行われています。
            </p>

            <div className="columns is-variable is-0-widescreen">
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/chemistry/04.jpg")}
                    alt="t9_chem04"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>
                  これはナイロン-6と呼ばれる物質を合成している様子で、試験官の中で反応が進み、ピンセットで引き出すと糸状の繊維を取り出すことができます。
                </p>
              </div>
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/chemistry/05.jpg")}
                    alt="t9_chem05"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>
                  これはナイロン-6,10と呼ばれる物質を合成している様子で、2種類の液体の境界で反応が進み、そこにできた膜をつまむことで、こちらも糸状の繊維を取り出すことが出来ます。
                </p>
              </div>
            </div>
          </div>

          <div className="content">
            <hi className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              学生へのインタビュー
            </hi>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 実習の感想は？
            </h2>
            <ul>
              <li>
                反応時間は長いし、注意しないといけない部分があって神経は使うが、反応が上手く行ってよかった。
              </li>
              <li>座学で習った内容を実際に実験するのは面白いと思った。</li>
              <li>
                昔はどうしてこうなるの？と漠然としたイメージで終わっていたが、実際のプロセスが目に見えるようになるので、楽しい。
              </li>
            </ul>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 慣れない操作も多かった？
            </h2>
            <ul>
              <li>
                使ったことのない器具を使ったので、上手く使えるかどうか心配だった。
              </li>
              <li>
                実際にやってみないと操作がわからない事が多く、難しいと感じた。
              </li>
            </ul>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 実験は大変？
            </h2>
            <ul>
              <li>
                化学というとフラスコを振るなど実験のイメージが強いと思うが、実験で起こる反応を理解するための勉強が必要であったり、ケガや事故についての注意をしたりと大変。しかし、化学に興味があれば非常に楽しいと思う。
              </li>
              <li>反応時間が長いものが多く、大変であると感じる。</li>
              <li>
                反応がうまくいくのか、不安になることが多いが、色々考えながら実験をするのは楽しい。
              </li>
            </ul>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 一番やりがいのあった実験は？
            </h2>
            <ul>
              <li>
                ルミノール反応。よく刑事ドラマ等に出てくる反応で、物質が発光するのをあまり見たことがなかったから。
              </li>
            </ul>
          </div>

          <div className="content">
            <hi className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              先生へのインタビュー
            </hi>
            <p>　実験の一部を担当された三宅先生に、お話を伺いました。</p>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 実験の狙いは？
            </h2>
            <ul>
              <li>有機化学の基礎的実験手法を学び、その技術を身につける。</li>
            </ul>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 先生が工夫されていることは?
            </h2>
            <ul>
              <li>
                応用化学分野に所属する有機・高分子化学系研究室で分担して行うので、各実験で内容に重複がなく受講者が基本的なスキルを一通り経験できる機会を提供することを心がけている。
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
              <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/2cfd20b8c97fda789c875924cc2c5f2948e72425/autostart/false/caption/true" />
              <p>実験の様子。</p>
            </div>
          </div>

          <div className="content">
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              関連リンク・参考資料
            </h1>
            <ul>
              <li className="list-item">
                <a
                  href="http://www.chembio.nagoya-u.ac.jp/mc_home/"
                  target="blank"
                >
                  名古屋大学工学部化学・生物工学科 応用化学コース
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Topics9chem;

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

const Subtitle = styled.h3`
  text-shadow: 0px 0px 10px #2b2523;
  color: #ffffff;
  line-height: 2;
`;
