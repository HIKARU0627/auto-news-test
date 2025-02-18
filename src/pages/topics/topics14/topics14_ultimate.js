import React from "react";
import { withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";
import {
  Kanban,
  Lecture,
  HeadLine,
  Explanation,
  ImageFrame,
  Square,
  Question,
  StyledLink,
} from "../../../templates/topics/topics14/topics14-style";

const topics14_ultimate = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"体育の授業特集-アルティメット"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics14/top/TOPICS14_kanban.png"
        )}`}
      />
      <div className="container is-9-desktop">
        <Kanban
          src={withPrefix("/img/topics/topics14/ultimate/Ultimate_header.png")}
        />
        <Lecture
          className="container"
          style={{ maxWidth: "900px", padding: "60px 0 100px 0" }}
        >
          <Question style={{ marginBottom: "40px" }}>
            アルティメットはどういったスポーツですか？
          </Question>

          <Explanation style={{ marginBottom: "50px" }}>
            アルティメットはフライングディスクを用いたスポーツです。ディスクを持った人が動くことなくパスし、
            ラグビーのようなゴールで選手がディスクを受け取ることで得点します。また、このようなルールのため、
            選手同士がぶつからないというのも特徴です。
          </Explanation>

          <Question style={{ marginBottom: "40px" }}>
            なにを意識して教えていますか？
          </Question>

          <Explanation>
            第一に、いかにスポーツをする機会を作るかというのを意識しています。高３年生の夏以降、学生はスポーツをしていないので、
            そのように考えています。
            <br />
            第二に、集団でプレーすることで学生同士がコミュニケーションをとることを目指しています。
            大学は知り合いがゼロの状態から学生は他の学生と交流しますが、教室ではそのようなことは起こりにくいです。
            そこで、学生で毎回の授業ごとで、基礎練習を行うペアのメンバーを変えています。それにより。学生が会話し、交流する機会を設けています。
          </Explanation>

          <ImageFrame>
            <img
              src={withPrefix(
                "/img/topics/topics14/ultimate/Ultimate_pic1.png"
              )}
            ></img>
          </ImageFrame>

          <Question style={{ marginBottom: "40px" }}>
            なぜこの種目を開講しているのですか？
          </Question>

          <Explanation style={{ marginBottom: "50px" }}>
            当初は非常勤の教員がこの科目を担当しており、自分は専門ではありませんでした。しかし、アルティメットについて知るうちに、
            良さに気づきました。それは、男女ともに楽しめるということです。アルティメットは選手同士がぶつからない種目ですから、
            男女の力の差がそこには生じません。それゆえ、選手全員が対等に楽しむことが出来ます。
          </Explanation>

          <Question style={{ marginBottom: "40px" }}>
            大学で体育を学ぶ意義とは？
          </Question>

          <Explanation>
            まず、体力をつけることです。基礎体力がないと何もできないという考えを持っています。運動をあまりしない受験期の後の大学1年生という時期に、
            体育の授業を受ける意味があると考えています。次に、メンタルヘルスに役立てられるということがあります。体育の授業は毎週、出席をとります。
            来ていない学生や様子が気になる学生に気づきやすく、学生支援センターとも連携がとりやすくなっています。
          </Explanation>

          <ImageFrame style={{ margin: "50px auto 60px auto" }}>
            <img
              src={withPrefix(
                "/img/topics/topics14/ultimate/Ultimate_pic2.png"
              )}
            ></img>
          </ImageFrame>

          <HeadLine>
            <Square style={{ background: "#fd862c" }}></Square>
            他のインタビューを見る
          </HeadLine>

          <StyledLink to="/topics/topics14/topics14_taikyokuken">
            太極拳 張先生インタビュー
          </StyledLink>
          <br />
          <StyledLink to="/topics/topics14/topics14_addapted">
            アダプテット 山本先生インタビュー
          </StyledLink>
        </Lecture>
      </div>
    </Layout>
  );
};

export default topics14_ultimate;
