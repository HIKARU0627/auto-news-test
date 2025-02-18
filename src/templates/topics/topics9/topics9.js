import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics9 = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"特集！学生実験・実習"}
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
          <Title className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-1-widescreen has-text-centered">
            【TOPICS No.9】
            <br />
            特集！学生実験・実習
          </Title>
          <Subtitle className="has-text-weight-bold is-size-4-widescreen has-text-lefted is-hidden-touch">
            実際に手を動かし、肌で感じて学ぶ実験・実習。座学では身につかない様々なことが、ここにはたくさん詰まっています。今回は名古屋大学で行われている多くの実験・実習の中から「生物環境科学実験実習」、「有機化学実験第2」、「電気・電子工学実験」の3つを紹介します。
          </Subtitle>
        </MesssageBox>
      </div>
      <section className="section">
        <div className="container">
          <div className="content is-hidden-desktop">
            <p>
              　実際に手を動かし、肌で感じて学ぶ実験・実習。座学では身につかない様々なことが、ここにはたくさん詰まっています。今回は名古屋大学で行われている多くの実験・実習の中から「生物環境科学実験実習」、「有機化学実験第2」、「電気・電子工学実験」の3つを紹介します。
            </p>
          </div>

          <div className="content box">
            <div className="columns is-vcentered is-desktop">
              <div className="column has-text-centered add-hoverable">
                <Link to="/topics/topics9/topics9agri">
                  <img
                    src={withPrefix(
                      "/img/topics/topics9/top/top_agriculture.jpg"
                    )}
                    alt="topics9_top_agriculture"
                  />
                </Link>
              </div>
              <div className="column">
                <p>
                  　9月中旬、名古屋大学稲武フィールドで行われた「生物環境科学実験実習」を取材しました。稲武フィールドは、豊田市稲武町にある名古屋大学の演習林で、東山キャンパスから車で90分、長野県に隣接する奥三河の自然豊かな人工林です。生物環境科学実験実習では、化学・生物学・物理学・地学・情報学に基づく生物環境の構造・機能・多様性評価・解析手法を学びます。今回、4泊5日の日程のうち、3日目に行われた実習を取材しました。この日は学科を2つに分け、ヒノキ林とスギ林でそれぞれ実習が行われました。
                </p>
              </div>
            </div>
          </div>

          <div className="content box box-link-hover-shadow">
            <div className="columns is-vcentered is-desktop ">
              <div className="column has-text-centered add-hoverable">
                <Link to="/topics/topics9/topics9chem">
                  <img
                    src={withPrefix(
                      "/img/topics/topics9/top/top_chemistry.jpg"
                    )}
                    alt="topics9_top_chemistry"
                  />
                </Link>
              </div>
              <div className="column">
                <p>
                  工学部
                  化学・生物工学科の3年生を対象に行われた「有機化学実験第2」を取材しました。この実験では、これまでに履修した有機化学の授業で学んだ様々な反応を実際に目の前で見ることができ、学生はひとつひとつの反応や変化を確かめながら実験をしていました。毎週、有機化学系の研究室が独自のテーマを用意し実験が行われ、4年次の研究室配属に向けた第一歩としても重要な実験となっています。
                </p>
              </div>
            </div>
          </div>

          <div className="content box box-link-hover-shadow">
            <div className="columns is-vcentered is-desktop">
              <div className="column has-text-centered add-hoverable">
                <Link to="/topics/topics9/topics9engi">
                  <img
                    src={withPrefix(
                      "/img/topics/topics9/top/top_engineering.jpg"
                    )}
                    alt="topics9_top_engineering"
                  />
                </Link>
              </div>
              <div className="column">
                <p>
                  　工学部電気電子工学科では3年次の後期に、「大実験」と呼ばれる学生実習が行われます。今回は12のテーマの中から各自1つを選択し、それぞれ実習を進めます。この実習は他とは異なり、問題設定から解決策まで全て自分で考えるようにカリキュラムが設定されており、学生自ら考え工夫する力を養います。今回は、この中から、「高温超伝導材料の作製」「ロボットビジョン」の2つについて紹介します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Topics9;

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
