import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics11_takeda = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"武田研究室-武田先生インタビュー"}
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
                src="https://nuvideo.media.nagoya-u.ac.jp/embed/e6d984a5c6d4c3030a9b4cddc43d433e2c9afd1c"
                scrolling="no"
                frameBorder={0}
              />
            </Movie>
          </Videoframe>

          <section className="columns">
            <div className="container column is-10-desktop mx-2 is-mobile">
              <TitleTakeda className="has-text-weight-bold">
                武田先生インタビュー
              </TitleTakeda>
              <div className="content">
                <p className="has-text-weight-semibold">
                  情報信号処理を研究されている武田先生に以下のことをお聞きしました。
                  <br />
                  ①　武田研究室とは
                  <br />
                  ②　武田研究室の魅力とは
                  <br />
                  ③　研究室の卒業生の主な進路について
                  <br />
                  ④　どのような学生に入って欲しいか
                  <br />
                  ⑤　高校生に向けて一言
                  <br />
                </p>
              </div>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                武田研究室では何をしていますか？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    行動情報処理を行っています
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　「人間の行動を情報処理する」ということを行なっています。つまり、「人間が情報をどのように処理しているのか」を理解し、応用するための研究を行っています。工学部や情報学部の学生を中心に、大きく分けて３つの班に分かれて研究をしています。一つ目に「音」に関する研究、二つ目に「車の運転」に関する研究、三つ目に「人間と機械の間のインタラクション」に関する研究となっています。この三つの班がそれぞれ協力し合い、「車」と「インタラクション」であれば自動運転の研究、「音」と「インタラクション」であればVR（ヴァーチャル・リアリティ）を使った音の研究などをしています。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                武田研究室の魅力とは
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    理論から実験まで、いろんな事ができる研究室
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　武田研究室では全般的には情報技術を扱っていますが、メカが好きな人は車の研究、ゲームが好きな人はインタラクション班でVRの研究、音楽が好きな人は音班で音響の処理の研究など、いろんな身近な情報を使った研究ができる上に、それを組み合わせることも可能というのが魅力です。また、音班であれば巨大な地下音響実験室や楽器の揃った実験室、車班であれば自動運転付きの二台の車、インタラクション班であれば
                VRなど、様々な設備が整っています。信号処理理論・パターン認識理論といった基礎理論から、大規模な実験まで可能ということも大きな魅力です。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                卒業生の主な進路は？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    専門性を活かして、大手企業からベンチャーまで！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　４年生（学部）を終えた学生のほぼ
                100％が大学院に進学します。大学院の修士課程を終了したら、三分の一の学生が博士課程に、それ以外は企業に就職などしています。博士課程が終わった人も、その後は企業に就職する人がほとんどです。一口に企業といっても、それぞれの専門分野を生かして様々な会社に就職しています。「音」であれば
                NTT docomo
                など、「車」であればトヨタを中心とした自動車会社、「インタラクション」であればそのどちらかが主となります。全般的に大きな会社の研究所に就職する学生が多いです。また、最近であれば自分たちで企業を立ち上げる学生も出始めています（主に博士課程の方達）。自分たちの研究分野を生かしたベンチャーを始めており、十分利益も出ているそうです。車班では、
                <a href="https://www.tier4.jp/">
                  名古屋大学初の自動運転の教員ベンチャー
                </a>
                も行われています。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                どのような学生に入って欲しいですか？
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    チャレンジ精神・積極性を持った学生！
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　いろんなことに好奇心をもって、何にでもチャレンジする学生が向いています。武田研究室では具体的なゴールが一人一人に決まっているわけではありません。自分で自分の興味に従って、どんどん積極的に勉強・実験・チャレンジできる学生が向いています。
              </Answer>

              <Q className="is-size-5-touch is-size-4-desktop has-text-weight-semibold">
                高校生に向けて一言お願いします
              </Q>
              <Answer>
                <Postitwrap className="is-size-5-touch is-size-4-desktop">
                  <Postit className="has-text-weight-semibold">
                    楽しい時間は必ず来る、頑張って試練を乗り越えて欲しい
                  </Postit>
                </Postitwrap>
              </Answer>
              <Answer>
                　大学に入るまでの受験勉強に加えて、大学に入ってからもしばらく基礎勉強は続きます。そうした勉強はつらいかもしれませんが、研究室に配属されれば自分の好きなことを最後まで突き詰めてできます。しばらくは修行になりますが、その後には非常に楽しい科学の世界が待っています。頑張って試練を乗り越えてください。
              </Answer>
            </div>
          </section>

          <section className="section columns is-centered">
            <div className="container column">
              <div className="content">
                <Arrow className="columns">他のインタビューを見る </Arrow>
                <ul className="column is-12-desktop is-12-touch margin-top-0 has-text-weight-bold">
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
                      <StyledLink to="/topics/topics11/topics11_ishiguro">
                        石黒先生へのインタビュー
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
export default topics11_takeda;

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
