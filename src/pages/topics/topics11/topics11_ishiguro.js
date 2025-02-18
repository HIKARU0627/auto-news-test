import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics11_ishiguro = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"武田研究室-石黒先生インタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics11/top/TOPICS11_kanban_20220414.png"
        )}`}
      />
      <div className="columns">
        <div className="container column is-11-desktop">
          <Videoframe>
            <VideoframeImg>
              <img
                src={withPrefix("/img/topics/topics11/articles/tv_takeda.svg")}
                alt=""
              />
            </VideoframeImg>
            <Movie>
              <Moviecontents
                src="https://nuvideo.media.nagoya-u.ac.jp/embed/9818bf3d1c06243f9cbe8a2de30f8c1534444f90"
                scrolling="no"
                frameBorder={0}
              />
            </Movie>
          </Videoframe>

          <section className="columns">
            <div className="container column is-10-desktop mx-2 is-mobile">
              <TitleTakeda className="has-text-weight-bold">
                石黒先生インタビュー
              </TitleTakeda>
              <div className="content">
                <p className="has-text-weight-semibold">
                  <br />
                  インタラクションを研究されている石黒先生に以下のことをお聞きしました。
                  <br />
                  ①　石黒先生の研究内容について
                  <br />
                  ②　武田研究室の魅力とは
                  <br />
                  ③　どのような人に研究室に入って欲しいか
                  <br />
                  ④　高校生に向けて一言
                  <br />
                </p>
              </div>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                石黒先生のご研究内容は？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    自動運転車に乗る『人』の研究をしています
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　来るべき「自動運転」という社会を見据えて、そこに乗る人が「どういう風に楽しく乗れるか」ということを研究しています。自動運転車ではいわゆる「運転手」がいないため、乗っているのは「乗員だけ」ということになります。その上で、「運転する人」がいない状態で本当に乗っている人たちは安心できるのか、また折角ハイテクな車に乗っているというのに、ただ乗っているだけでは勿体ないのではないか、何かそこでこそできることがあるのではないか、ということを研究しています。具体的にはVR（ヴァーチャル・リアリティ）を利用して、赤信号などの待ち時間をゲームの時間へと変えるなどしています（詳しくは動画を参照！）。そうすることで、人間が今までに体感したことのない楽しさや、問題解決などにつなげています。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                武田研究室の魅力とは
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    緻密な基礎理論をきっちり抑えつつ、その応用ができる！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　武田研究室では緻密な数学や信号処理など、いわゆる「アカデミック」な内容をきっちりやっています。それらをしっかり学んだ上で、その応用にまで発展させることができます。基礎から応用まで、すべての人が揃っているというのがこの研究室の魅力です。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                どのような人に研究室に入って欲しいですか？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    『ユニークな発想』を持つ学生！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　日常の中で細かいことに気付くことができたり、人とは違う発想をするなどの、いわゆる「ユニーク」な人材が向いています。「車とゲーム」は一見何の関係もないものですが、それらの関連を見出す「発想力」によって新たな研究分野が拓けていきます。そのようにして新しい研究分野を切り開いていける学生が求められます。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                高校生に向けて一言お願いします。
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    「コンピュータ」でどう問題を解決するか……そこに興味がある方歓迎！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　コンピュータには「難しい」というイメージがあるかもしれませんが、それをどううまく使って、社会の問題を解決していくかというのが「コンピュータ・サイエンス」の１つの分野になります。その辺りに興味のある方は、ぜひ武田研究室を覗きにきてください！
              </Answer>
            </div>
          </section>

          <section className="section columns is-centered">
            <div className="container column">
              <div className="content">
                <Arrow className="columns">他のインタビューを見る </Arrow>
                <ul className="column is-12-desktop is-12-touch margin-top-0 has-text-weight-bold ">
                  <StyledLink to="/topics/topics11/topics11">
                    ◆TOPICS11　トップへ
                  </StyledLink>
                  <br />
                  <br />
                  ◆戸田山・久木田研究室（社会情報学専攻）
                  <Pagelist>
                    <li>
                      <StyledLink to="/topics/topics11/topics11_kukita">
                        久木田先生へのインタビュー
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/topics/topics11/topics11_kukita_stu">
                        研究室の学生へのインタビュー
                      </StyledLink>
                    </li>
                  </Pagelist>
                  ◆武田研究室（知能システム学専攻）
                  <Pagelist>
                    <li>
                      <StyledLink to="/topics/topics11/topics11_takeda">
                        武田先生へのインタビュー
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/topics/topics11/topics11_takeuchi">
                        竹内先生へのインタビュー
                      </StyledLink>
                    </li>
                  </Pagelist>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
export default topics11_ishiguro;

/*タイトル装飾 ここから*/
const TitleTakeda = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  border-left: solid 5px #867aaa;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #867aaa;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #867aaa;
  }
`;
/*タイトル装飾 ここまで*/

/*見出し　ポストイット風デザイン https://www.sejuku.net/blog/56721#i-9を参考*/
const Postit = styled.div`
  color: white;
  display: block;
  position: relative;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #867aaa;
`;

const Postitwrap = styled.div`
  position: relative;
  display: inline-block;
  &:before {
    content: "";
    background-color: #b3b3b3;
    display: block;
    position: absolute;
    left: 50%;
    height: 60%;
    top: 33%;
    width: 46%;
    box-shadow: 0 0 8px 8px #b3b3b3;
    transform: rotate(2deg);
  }
`;
/*ポストイット風デザインここまで*/

/*左に横線見出しデザイン　はじめ*/
const Q = styled.div`
  position: relative;
  margin-left: 30px;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -30px;
    width: 25px;
    border-top: solid 2px black;
  }
`;
/*左に横線見出しデザイン　終わり*/

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
    border-bottom: solid 20px #867aaa;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 5px #867aaa;
  }
`;
/*矢印型見出し　終わり*/

/*動画部分　はじめ*/

const Videoframe = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 4.25% 5.2% 22% 5.2%;
`;

const VideoframeImg = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: auto;
`;

const Movie = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
`;

const Moviecontents = styled.iframe`
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: 90%;
`;

/*動画部分　終わり*/

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;

const Answer = styled.div`
  position: relative;
  padding: 10px;
`;

const Pagelist = styled.div`
  position: relative;
  padding-left: 36px;
`;
