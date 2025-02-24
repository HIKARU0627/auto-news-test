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
        title={"電気・電子工学実験(大実験)"}
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
            電気・電子工学実験(大実験)
          </Title>
          <Subtitle className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-centered">
            工学部 電気電子情報工学科3年生
          </Subtitle>
        </MesssageBox>
      </div>

      <section className="section">
        <div className="container">
          <div className="content">
            <p>
              　工学部電気電子工学科では3年次の後期に、「大実験」と呼ばれる学生実習が行われます。今回は12のテーマの中から各自1つを選択し、それぞれ実習を進めます。この実習は他とは異なり、問題設定から解決策まで全て自分で考えるようにカリキュラムが設定されており、学生自ら考え工夫する力を養います。今回は、この中から、「高温超伝導材料の作製」「ロボットビジョン」の2つについて紹介します。
            </p>
          </div>

          <div className="content">
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              高温超電導材料の作製
            </h1>
            <p>
              　この実習では、実際に自分たちの手で高温超伝導体の作製を試みます。高温超伝導体とは、比較的高い温度で超伝導体の性質である完全誘導性
              (電気抵抗ゼロ) と完全反磁性
              (内部に磁場が存在せず、また外部の磁場が内部に侵入できない状態)
              を示す物質のことを言います。そしてその完成物のX線による解析や、電気的、磁気的性質などの検討を通じて、適切な材料の配合割合や、焼成の温度などを学生自ら考え、より理想に近い高温超伝導体に近づけていきます。
            </p>

            <div className="columns is-variable is-0-widescreen">
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/engineering/01.jpg")}
                    alt="t9_engi01"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>実習風景。</p>
              </div>
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/engineering/02.jpg")}
                    alt="t9_engi02"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>
                  高温超伝導体材料の調合。試行錯誤を重ね、より良い高温超伝導体が作れるように工夫していきます。
                </p>
              </div>
            </div>

            <div className="columns is-variable is-0-widescreen">
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/engineering/03.jpg")}
                    alt="t9_engi03"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>
                  作製中の高温超伝導体材料。材料混合、仮焼成、破砕混合、加圧、本焼成などの工程を経て高温超伝導体が出来上がります。
                </p>
              </div>
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/engineering/04.jpg")}
                    alt="t9_engi04"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>
                  ピン止め効果により浮上した高温超伝導体。内部の状態の違いによって「ピン止め」されたような状態になり空中に固定されます。
                </p>
              </div>
            </div>
          </div>

          <div className="content">
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              ロボットビジョン
            </h1>
            <p>
              　ロボットに視覚と頭脳を持たせるとどのようなことができるのでしょうか。この実習では、ロボットの「視覚」にあたる
              CCD
              カメラからの情報を取り込み、それをもとにロボットがアームを使って仕事をするといったコンピュータプログラム
              (「頭脳」)
              を作成します。実験は個人単位で行い、各自が自由な発想に基づいてロボットを制御するシステムを作っていきます。実習最終日にはロボットコンテストを行い、そのシステムの完成度や独創性を競います。
            </p>

            <div className="columns is-variable is-0-widescreen">
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/engineering/05.jpg")}
                    alt="t9_engi05"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>実習風景。</p>
              </div>
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/engineering/06.jpg")}
                    alt="t9_engi06"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>
                  ロボットアーム。実習では、 CCD
                  カメラから得られる情報をもとに、このアームを制御するプログラムを作成します。一人一人がそれぞれ自由にアイデアを出し合います。
                </p>
              </div>
            </div>

            <div className="columns is-variable is-0-widescreen">
              <div className="column is-3">
                <div className="has-text-centered">
                  <img
                    src={withPrefix("/img/topics/topics9/engineering/07.jpg")}
                    alt="t9_engi07"
                  />
                </div>
              </div>
              <div className="column is-3">
                <p>発表会の様子。</p>
              </div>
            </div>
          </div>

          <div className="content">
            <hi className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              学生へのインタビュー
            </hi>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 実習の感想は? (高温超伝導体)
            </h2>
            <ul>
              <li>
                前期は1週間で1つの実験が完結する実験スケジュールだったが、後期は1つの実験を半年かけて行うので、やりがいがあった。
              </li>
              <li>
                一生懸命材料を混ぜて作っても最終的に超伝導体になっていないときがあり、その時は残念に思った。
              </li>
              <li>
                この実験を始める前はこの実験について難しいというイメージがあったが、実際にやっていくうちに、コツをつかめるようになった。
              </li>
            </ul>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 実習の感想は？(ロボットビジョン)
            </h2>
            <ul>
              <li>
                他の学生実験のように、決められたことをやっていくだけの実験ではなく、自分で自由な発想によって好きなように実験を進めていくことができた。
              </li>
              <li>自分たちで課題やその解決策を見つけていくのが楽しかった。</li>
            </ul>
          </div>

          <div className="content">
            <hi className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              先生へのインタビュー
            </hi>
            <p>
              　「高温超伝導体材料の作製」を担当された一野先生と、「ロボットビジョン」を担当された舟洞先生にお話を伺いました。
            </p>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 実習のねらいは？
            </h2>
            <ul>
              <li>
                高温超伝導体を実際に作製し、評価をしてもらうことで、物事の基本となる物理を中心とした学問に興味を持ってもらうことを目的としている。本実験を通じて計画的な実験や学習の習慣を身につけて欲しい。
                (一野先生)
              </li>
              <li>
                本実験に参加する学生には、定めたテーマに対して「自主的に解決する力」、「工夫点や成果を他人にアピールする力」を特に身につけて欲しいと思っている。研究室配属直前の学部3年後期に、半年通しで行う本実験によって上記力を身につけ、卒業研究の遂行や、また、研究者への第一歩として役立てて欲しい。そのために、「自主的な実験の遂行」、「成果レポートの作成」、「成果のプレゼンテーション」を行う。
                (舟洞先生)
              </li>
            </ul>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q. 実験内容や指導等において先生が工夫されていることは何ですか?
            </h2>
            <ul>
              <li>
                新しい超伝導体の発見を目的として、作製する材料や作製条件などをグループ毎に自由に決めてもらい、自主性を尊重するようにしている。
                (一野先生)
              </li>
              <li>
                本実験は、カメラとマニピュレータを組合せたロボットを用いて、自由にテーマを設定して取組んでもらう。設定できるテーマの幅が広いため、やる気次第でどんどん工夫し、達成度を上げることができる。一方、テーマ設定によっては達成できない可能性もあるため、実験時間や自身の能力を含めた見通しが重要である。学生の自主性を重んじつつ、目標達成できるように学生毎に適宜アドバイスを行っている。
                (舟洞先生)
              </li>
            </ul>

            <h2 className="has-text-weight-bold is-size-6-mobile is-size-6-tablet is-size-5-widescreen">
              Q.
              実験に参加した学生についてや、実験全体を通しての印象や感想を教えてください。
            </h2>
            <ul>
              <li>
                最近は集中力の低い学生が増加していると感じるが、学生は基本的には真面目に実験に取り組んでいる。
                (一野先生)
              </li>
              <li>
                学生が様々なテーマを設定するため、教員も楽しみながら実験指導に当たっている。本年は、「形状や色特徴に基づくお菓子の仕分け」、「人間と強調した鍵盤ハーモニカの自動演奏」、「ボーリング」、「迷路」、「福笑い」、「すごろく」、「数字パズル」など様々なテーマがあった。プログラミングが必須であるため、得手不得手により達成度は異なるが、基本的に皆精力的に取組んでいると思う。
                (舟洞先生)
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
              <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/0a68411d4b59fc85aa0cd9f2d7e5710d9835bd5d/autostart/false/caption/true" />
              <p>実験の様子。</p>
            </div>

            <div
              className="column is-12-mobile is-half-desktop"
              style={{ margin: "0 auto" }}
            >
              <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/58cf11df2b7d1f59918cac090bf1b23997ce4d67/autostart/false/caption/true" />
              <p>発表会の様子。</p>
            </div>
          </div>

          <div className="content">
            <h1 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              関連リンク・参考資料
            </h1>
            <ul>
              <li className="list-item">
                <a href="https://www.nuee.nagoya-u.ac.jp/" target="blank">
                  名古屋大学工学部電気電子情報工学科 (電気電子工学コース)
                </a>
              </li>
              <li className="list-item">
                <a
                  href="https://www.nuee.nagoya-u.ac.jp/kyoiku/gakubu/experiment/dai.php"
                  target="blank"
                >
                  電気・電子工学実験 (大実験)
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
