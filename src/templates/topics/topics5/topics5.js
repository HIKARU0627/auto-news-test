import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics5 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"こころ"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics5/topics5_header.png"
        )}`}
      />
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/"
          )}img/topics/topics5/kokoro_bg.png)`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-1-widescreen has-text-centered has-text-light">
            【TOPICS No.5】
            <br />
            こころ
          </Title>
          <Subtitle className="has-text-weight-bold is-size-4-widescreen has-text-centered is-hidden-touch has-text-light">
            およそ人間である以上、無関係ではいられないこころの問題。この人間が研究対象としてきた中で最も複雑・不可解な存在に、
            科学はどのようなアプローチをもって迫ってきたのでしょうか。その成果は私たちの人生に何をもたらしてくれるのでしょうか。
          </Subtitle>
        </MesssageBox>
      </div>

      <section className="section">
        <div className="container">
          <div className="content is-hidden-desktop has-text-centered">
            <p>
              およそ人間である以上、無関係ではいられないこころの問題。
              <br />
              この人間が研究対象としてきた中で最も複雑・不可解な存在に、
              科学はどのようなアプローチをもって迫ってきたのでしょうか。
              <br />
              その成果は私たちの人生に何をもたらしてくれるのでしょうか。
            </p>
          </div>

          <section className="section columns">
            <div className="container column is-9-widescreen">
              <div>
                <ButtonBox>
                  <div className="box" style={{ backgroundColor: "#ffddff" }}>
                    <div className="columns is-vcentered is-desktop">
                      <div className="column">
                        <div style={{ zindex: 2, position: "relative" }}>
                          <p className="title is-size-5-mobile is-size-1-tablet has-text-left">
                            こころの健康を維持する
                          </p>
                          <p className="subtitle  is-size-7-mobile has-text-left">
                            本城秀次 教授
                            <br />
                            発達心理精神科学教育研究センター
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ButtonBox>

                <div className="column">
                  <div className="column">
                    <p className="title is-size-5-mobile is-size-5-tablet has-text-left">
                      こころを科学的に見る
                    </p>
                    <p className="title is-size-7-mobile is-size-7-tablet has-text-left">
                      開発部局：研究協力部社会連携課
                    </p>
                    <p>
                      経済不況の中うつ病が増加しているといいます。その年齢層も十代から四、五十代の方まで及ぶそうです。しかし、うつ病がどんな症状でどんな治療法があり、どういう方がなりやすいのかなどあまり知らない方も多いのではないでしょうか？この講座ではそういった方向けにうつ病について紹介しています。自分の心の健康を維持するためだけでなく、ほかの方の理解もできるよう、正しくうつ病を知ってみませんか？
                    </p>
                  </div>
                  <ul className="link">
                    <li>
                      <Link to="../../../courses/0201-こころの健康を維持する-2009/">
                        本城先生のページへ
                      </Link>
                    </li>
                  </ul>
                </div>
                <br />

                <ButtonBox>
                  <div className="box" style={{ backgroundColor: "#ffad90" }}>
                    <div className="columns is-vcentered is-desktop">
                      <div className="column">
                        <div style={{ zindex: 2, position: "relative" }}>
                          <p className="title is-size-5-mobile is-size-1-tablet has-text-left">
                            応用行動学講義
                            <br />
                            ー産業・組織の行動心理学ー
                          </p>
                          <p className="subtitle  is-size-7-mobile has-text-left">
                            金井篤子 教授
                            <br />
                            教育学部・教育発達科学研究科
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ButtonBox>

                <div className="column">
                  <div className="column">
                    <p className="title is-size-5-mobile is-size-5-tablet has-text-left">
                      応用し、活用する心理学
                    </p>
                    <p className="title is-size-7-mobile is-size-7-tablet has-text-left">
                      開発部局：教育学部・教育発達科学研究科
                    </p>
                    <p>
                      「大学の講義って将来本当に役に立つのかな？」そんな疑問は、この講義では必要ありません！マクレガーのＸＹ理論、ホランダーの特異性クレ
                      ジット理論、セリエのストレス学説…。心理学的知見から産業・組織を検討し、理解を深めることで，将来私たちが何らかの職に就いた時、"仕事への動機づけ"や"ストレス"などといった組織の中で起こる様々な課題に対して、私たちはどのように行動していけば良いかを学びます。
                    </p>
                  </div>
                  <ul className="link">
                    <li>
                      <Link to="../../../courses/0064-応用行動学講義-II-産業・組織の心理学-2010/">
                        金井先生のページへ
                      </Link>
                    </li>
                  </ul>
                </div>
                <br />
                <ButtonBox>
                  <div className="box" style={{ backgroundColor: "#ffffaa" }}>
                    <div className="columns is-vcentered is-desktop">
                      <div className="column">
                        <div style={{ zindex: 2, position: "relative" }}>
                          <p className="title is-size-5-mobile is-size-1-tablet has-text-left">
                            人間発達の心理学
                            <br />
                            （発達教育臨床基礎論）
                          </p>
                          <p className="subtitle is-size-7-mobile has-text-left">
                            氏家達夫 教授
                            <br />
                            教育学部・教育発達科学研究科
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ButtonBox>

                <div className="column">
                  <div className="column">
                    <p className="title is-size-5-mobile is-size-5-tablet has-text-left">
                      人の「こころ」のあゆみ
                    </p>
                    <p className="title is-size-7-mobile is-size-7-tablet has-text-left">
                      開発部局：教育学部・教育発達科学研究科
                    </p>
                    <p>
                      　産声をあげる前の頃から、赤ちゃん、子ども、青少年、大人、お年寄りへと、人はどのような過程を経て精神的・社会的に成長していくのか。この授業で、「こころ」が育っていく壮大な物語について知ることができます。幼い頃から今に至るまで、どんな風に育ってきただろう？そしてこれからどうなっていくだろう？と、自分自身の人生に今一度目を向けてみてはいかがでしょうか。
                    </p>
                  </div>
                  <ul className="link">
                    <li>
                      <Link to="../../../courses/0173-人間発達の心理学（発達教育臨床基礎論）-2011/">
                        氏家先生のページへ
                      </Link>
                    </li>
                  </ul>
                </div>
                <br />
                <ButtonBox>
                  <div className="box" style={{ backgroundColor: "#aeffbd" }}>
                    <div className="columns is-vcentered is-desktop">
                      <div className="column">
                        <div style={{ zindex: 2, position: "relative" }}>
                          <p className="title is-size-5-mobile is-size-1-tablet has-text-left">
                            心理・教育の統計学
                          </p>
                          <p className="subtitle  is-size-7-mobile has-text-left">
                            石井秀宗 教授
                            <br />
                            教育学部・教育発達科学研究科
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ButtonBox>

                <div className="column">
                  <div className="column">
                    <p className="title is-size-5-mobile is-size-5-tablet has-text-left">
                      見えないものを分析する
                    </p>
                    <p className="title is-size-7-mobile is-size-7-tablet has-text-left">
                      開発部局：教育学部・教育発達科学研究科
                    </p>
                    <p>
                      　私達の性格や知識は目に見えません。それらを理解するためにアンケートや試験などの手段が取られますが、その内容はどのような理屈のもとに考え出されるのでしょうか？また、そこから集められたデータが専門家たちによって分析されて初めて、私たちに役に立つ情報となります。では、その分析とはどのようなものなのでしょうか？この講義では、心理学・教育学で重要な位置にある統計分析のプロセスを実例に基づいて学ぶことができます。
                    </p>
                  </div>
                  <ul className="link">
                    <li>
                      <Link to="../../../courses/0193-心理・教育の統計学-2014/">
                        石井先生のページへ
                      </Link>
                    </li>
                  </ul>
                </div>
                <br />
                <ButtonBox>
                  <div className="box" style={{ backgroundColor: "#dcc2ff" }}>
                    <div className="columns is-vcentered is-desktop">
                      <div className="column">
                        <div style={{ zindex: 2, position: "relative" }}>
                          <p className="title is-size-5-mobile is-size-1-tablet has-text-left">
                            心理行動科学実験演習３
                            <br />
                            （検査・測定法）
                          </p>
                          <p className="subtitle is-size-7-mobile has-text-left">
                            　永田雅子 教授
                            <br />
                            教育学部・教育発達科学研究科
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ButtonBox>

                <div className="column">
                  <div className="column">
                    <p className="title is-size-5-mobile is-size-5-tablet has-text-left">
                      測れるもの・測れないもの
                    </p>
                    <p className="title is-size-7-mobile is-size-7-tablet has-text-left">
                      開発部局：教育学部・教育発達科学研究科
                    </p>
                    <p>
                      　たとえば，知能指数(IQ)というものがあります。「頭の良さを表す数字」としてテレビなどでもよく目にしますが、測定出来るのは知能の一面に過ぎません。しかし心理学を役立てるためにはこのような指標が不可欠なのもまた確かです。発達検査、知能検査、人格検査。これらで何が分かり、何が分からないのか。それを知る事がこころの問題を解決する第一歩です。
                    </p>
                  </div>
                  <ul className="link">
                    <li>
                      <Link to="../../../courses/0250-心理行動科学実験演習3（検査・測定法）-2011/">
                        永田先生のページへ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Topics5;

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
