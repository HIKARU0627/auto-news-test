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

const topics14_taikyokuken = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"体育の授業特集-太極拳"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics14/top/TOPICS14_kanban.png"
        )}`}
      />
      <div className="container is-9-desktop">
        <Kanban
          src={withPrefix(
            "/img/topics/topics14/taikyokuken/Taikyokuken_header.png"
          )}
        />
        <Lecture
          className="container"
          style={{ maxWidth: "900px", padding: "60px 0 100px 0" }}
        >
          <Question style={{ marginBottom: "40px" }}>
            太極拳はどういったスポーツですか？
          </Question>

          <Explanation style={{ marginBottom: "50px" }}>
            太極拳は激しいスポーツではなく、比較的静的なスポーツです。相手と戦闘をすることもありますが、
            太極拳にあるさまざまな「型」を実践することが授業のメインとなっています。
          </Explanation>

          <Question style={{ marginBottom: "40px" }}>
            どういったことを意識して教えていますか？
          </Question>

          <Explanation>
            型を教えることよりも、型をつくることで授業が体を動かす機会になるようにすることを意識しています。
            やはり、現代の人は若くても運動不足になりがちです。そんな中で、授業をとってくれた学生が体育の授業として
            体を動かしながら方を覚えていってもらえるように教えています。
            <br />
            また、太極拳は中国の伝統文化的なスポーツであり、日本の人からすれば異文化のスポーツです。
            この太極拳を通して中国の文化や考え方など、中国に関する色々なことを知ってもらえるよう意識して教えています。
          </Explanation>

          <ImageFrame>
            <img
              src={withPrefix(
                "/img/topics/topics14/taikyokuken/Taikyokuken_pic1.png"
              )}
            ></img>
          </ImageFrame>

          <Question style={{ marginBottom: "40px" }}>
            授業のやりがいは何ですか？
          </Question>

          <Explanation style={{ marginBottom: "50px" }}>
            名古屋大学の学生は、まじめに、一生懸命に授業に取り組んでくれます。そういった学生がいると、
            なんとかして教えてあげようという気持ちが強くなり、講師としてやりがいを感じます。
          </Explanation>

          <Question style={{ marginBottom: "40px" }}>
            大学で体育を学ぶ意義とは？
          </Question>

          <Explanation style={{ marginBottom: "60px" }}>
            大学で体育の授業をする必要なんかないんじゃないかと思う人もいると思いますが、僕は必要だと思います。
            <br />
            これは僕の考えですが、大学生の中には大学の体育の授業が運動をする最後のチャンスになる学生もいると思います。
            例えば、高校で2年生まで運動系の部活を頑張ってきて、その後引退して受験勉強に力を入れてきた人はまず1年間は
            あまり運動ができていません。その上、大学で体育の授業を受けず、運動系のサークルや部活に入らなければ、
            その後の就職のことを考えると5年以上運動不足になってしまいます。そういった学生にとって
            大学で体育の授業をすることは、とても意味があることです。そして大学の体育の授業を通して
            体を動かすことの楽しさを知って、それを生活の一部に取り入れることができれば、
            運動をするいい習慣が生まれるのではないかとも思っています。
            <br />
            大学生のみなさんにはぜひ体育の授業を受けてもらって、生涯にわたって運動をする習慣を身につけてもらいたいです。
          </Explanation>

          <HeadLine>
            <Square style={{ background: "#e72e3f" }}></Square>
            他のインタビューを見る
          </HeadLine>

          <StyledLink to="/topics/topics14/topics14_ultimate">
            アルティメット 片山先生インタビュー
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

export default topics14_taikyokuken;
