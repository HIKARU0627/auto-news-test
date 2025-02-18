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

const topics14_addapted = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"体育の授業特集-アダプテット"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics14/top/TOPICS14_kanban.png"
        )}`}
      />
      <div className="container is-9-desktop">
        <Kanban
          src={withPrefix("/img/topics/topics14/addapted/Addapted_header.png")}
        />
        <Lecture
          className="container"
          style={{ maxWidth: "900px", padding: "60px 0 100px 0" }}
        >
          <Question style={{ marginBottom: "40px" }}>
            アダプテットの授業制度はどのようなものですか？
          </Question>

          <Explanation style={{ marginBottom: "50px" }}>
            アダプテットは様々な個別の事情によって一般種目（バトミントン等々普通に運動できる人達が選択する授業）
            を一緒にできない人達が選択する種目です。そのため、授業の実施方法が特殊で、実際に授業で何をやるかは個人個人を見て判断し、
            その人に合わせて決めることになります。
          </Explanation>

          <Question style={{ marginBottom: "40px" }}>
            実習として具体的に何をやっていますか？
          </Question>

          <Explanation>
            さっきも言ったように、個別で授業形態を変えているのでケースバイケースですが、大きく分けて3パターンあります。
            <br />
            1つめは、運動部で骨折など怪我をして、普通の種目の実習が出来ない場合です。
            そういう人は怪我をしている部分以外のトレーニングをして、途中で復帰が可能なら、復帰後一般種目に合流する形もあります。
            <br />
            2つめは、身体障害があって車イスを使っている人や、筋縮小で手足が動かない人などです。
            そういう人達も状況を見てその人達ができることをします。過去に実際やったこととしては、車イス卓球やボッチャなどです。
            そういったことも難しい場合は、本を読んでスポーツに関わる調べごとをし、レポートを書いて提出してもらう、
            という形を取ることもあります。
            <br />
            3つめは、対人関係に問題がある場合です。そういった人とは、
            面談をしながら大学の中や外を一緒に歩いたり、卓球をしたり、ジャグリングを教えたりすることもあります。
          </Explanation>

          <ImageFrame style={{ width: "240px", height: "auto" }}>
            <video
              src={withPrefix(
                "/img/topics/topics14/addapted/Addapted_movie1.mp4"
              )}
              controls
            ></video>
          </ImageFrame>

          <Question style={{ marginBottom: "40px" }}>
            アダプテットを開講している理由や目的は何ですか？
          </Question>

          <Explanation style={{ marginBottom: "50px" }}>
            ひとつはこころに問題を抱えている人への学習支援です。話をするよりも、動きを見ることでその人がわかったり、
            その人の問題に気づきやすかったりします。普通の講義だと先生達もそういう子に気づかないけれど、
            スポーツの授業だと顕著に表れるので、そういう子を見つけて学習支援をすることができます。
            <br />
            また、怪我をして一般種目に参加できない人が、怪我を理由に単位を取ることができないというのはかわいそうなので、
            そういった人達が次年度に必修単位を持ち越さずに済むように、とういうこともアダプテットを開講している理由の一つです。
          </Explanation>

          <Question style={{ marginBottom: "40px" }}>
            大学で体育を学ぶ意義とは？
          </Question>

          <Explanation style={{ marginBottom: "60px" }}>
            まず、コロナでよくわかったのは、外へ出て体を動かす習慣を付けられるかどうかです。
            週に一度の授業に出るということでもそれなりに外へ出る、体を動かすという習慣はある程度意識させられると思います。
            <br />
            また、学部・学科を超えて一緒に実習することもあるため、学生同士がコミュニケーションをとったり、
            知り合う一つのきっかけとなれるというのもスポーツ実習の授業の意義です。
            <br />
            さらに、中高は運動ができる人が成績よかっただろうけど、大学ではそんなことはなく、
            できる人はできない人をいかにサポートするかというところを教員は期待しています。
            単にスポーツを楽しむだけではなく、スポーツを介して人とどう接するかを学んでほしいと思っています。
            <br />
            健康スポーツ科学実習の授業はスポーツの実習ができる最後の機会です。
            実際に体を動かしながら初めて会う人たち、知らない人たちと共同作業していくということをわかってほしいです。
          </Explanation>

          <HeadLine>
            <Square style={{ background: "#e4da2f" }}></Square>
            他のインタビューを見る
          </HeadLine>

          <StyledLink to="/topics/topics14/topics14_taikyokuken">
            太極拳 張先生インタビュー
          </StyledLink>
          <br />
          <StyledLink to="/topics/topics14/topics14_ultimate">
            アルティメット 片山先生インタビュー
          </StyledLink>
        </Lecture>
      </div>
    </Layout>
  );
};

export default topics14_addapted;
