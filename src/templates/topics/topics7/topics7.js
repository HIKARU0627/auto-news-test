import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

// 授業選択パネルの中身を表示するコンポーネント
class Class extends React.Component {
  render() {
    return (
      <div
        className="columns is-multiline add-hoverable"
        style={{ cursor: "pointer" }}
        onMouseOver={this.props.onMouseOver}
        onFocus={() => 0}
        role="presentation"
      >
        <div className="column is-full">
          <div className="columns is-mobile">
            <div className="column is-half-touch is-full-desktop">
              <p className="is-size-4 is-size-3-tablet is-size-4-desktop has-text-weight-bold">
                {this.props.subject}
              </p>
              <p className="">{this.props.overview}</p>
              <p className="has-text-weight-semibold">{this.props.teacher}</p>
              {/* <p className="">{ this.props.affiliation }</p> */}
            </div>
            <div className="column is-hidden-desktop has-text-centered">
              <img
                src={this.props.image}
                style={{ width: "80%" }}
                className="is-hidden-desktop"
                alt=" "
              />
            </div>
          </div>
        </div>
        <div className="column is-hidden-desktop">
          {/* ディスクリプション */}
          <p className="">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

// 授業詳細を表示するコンポーネント
class Detail extends React.Component {
  render() {
    return (
      <div className="columns is-multiline margin-top-0">
        <div className="column is-full">
          <div className="columns">
            <div className="column is-half">
              <p className="is-size-3-tablet is-size-2-widescreen has-text-weight-bold"></p>
              <p className="">{this.props.overview}</p>
              <p className="has-text-weight-bold">{this.props.teacher}</p>
              <p>{this.props.affiliation}</p>
            </div>
            <div className="column is-half has-text-centered">
              <img src={this.props.image} alt=" " />
            </div>
          </div>
        </div>
        <div className="column">
          <p className="">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

class Topics7 extends React.Component {
  constructor(props) {
    super(props);
    // 各授業の情報を格納したオブジェクトを要素とする配列
    this.classList = [
      {
        subject: "計算情報学Ⅰ",
        overview: "解析のカギ「数値計算」",
        teacher: "鈴木泰博 准教授",
        affiliation: "情報文化学部",
        image: "/img/topics/topics7/suzuki_kanban.png",
        // 詳細表示や背景色変更の際に使用する授業の識別タグ
        tag: 0,
        description: `コンピューターによるシミュレーションはありとあらゆる分野で使われています。その結果は、天気予報や交通量など身近な情報にも活用され、私たちの生活に役だっています。そのようなシミュレーションに必須なのが「数値計算」です。数値計算では、様々な情報を数学や物理を用いて近似的に解き、解析しています。この講義で数値計算を学び、種々の課題を解決するための術を知りましょう。`,
        link: "../../../courses/0058-計算情報学-I-2011/",
      },
      {
        subject: "システム論の基礎",
        overview: "現代社会を見渡す",
        teacher: "佐野充 教授",
        affiliation: "環境学研究科",
        image: "/img/topics/topics7/sano_kanban.png",
        tag: 1,
        description: `情報技術が急速に発展した現代社会。そこで生じる様々な問題を解決するには、種々の要素の集合体が機能を持ち合わせた「システム」のひとつ、「社会」を広い視野で捉えることが重要となります。この授業では生態系、経済など、身近に見られる様々なシステムを題材として扱います。そしてそれらの仕組みを知り、個々のシステムを広い視野で理解する力を身につけます。社会というシステムを見渡すことで、私たちのこれからについて考えてみましょう。`,
        link: "../../../courses/0301-システム論の基礎-2011/",
      },
      {
        subject: "情報通信工学第2",
        overview: "つながる仕組み",
        teacher: "片山正昭 教授",
        affiliation: "工学部／工学研究科",
        image: "/img/topics/topics7/katayama_kanban.png",
        tag: 2,
        description: `スマートフォンや無線LANなどの普及により、無線通信の技術が私たちの生活に浸透してきました。しかし、それらの仕組みをあなたは自信を持って説明できますか？この講義では、スマートフォンなどの通信機器に使われている技術と、それを明確に説明するための数学的表現を紹介します。身近にありながら知らないことの多い通信技術、一度詳しく学んでみませんか？`,
        link: "../../../courses/0047-情報通信工学第2-2011/",
      },
      {
        subject: "情報と法",
        overview: "刑事訴訟法の役割",
        teacher: "大屋雄裕 教授",
        affiliation: "教養教育院",
        image: "/img/topics/topics7/ooya_kanban.png",
        tag: 3,
        description: `情報技術の進歩は、私たちの生活と社会を大きく変えました。今まで実現できなかったことが、次々と実現できるようになっています。
        しかし同時に、今まで起きなかった問題が次々と起こるようにもなっています。
        法の役割は、社会を適切にコントロールし、人々の権利や利益を守ることにあります。
        激動し続ける情報化社会に、法はどう対応すればよいのでしょうか。
        法や思想の観点から、情報化社会を読み解いてみませんか。`,
        link: "../../../courses/0006-情報と法-2005/",
      },
      {
        subject: "複雑系プログラミング特論",
        overview: "情報技術で人工世界を作り、考える",
        teacher: "鈴木麗璽 准教授",
        affiliation: "情報科学研究科",
        image: "/img/topics/topics7/rsuzuki_kanban.png",
        tag: 4,
        description: `現在、生命や社会現象などさまざまな分野の研究で、コンピュータ上でモデルを作ってシミュレーションし理解する、という試みがなされています。
        この授業では、Pythonというプログラミング言語を使い、実際にプログラムを作って動かしながら実験手法の基礎を身につけ、
        更に得られたデータを可視化して分析する方法を学びます。情報科学の技術で、世界の動きを考えてみましょう。`,
        link: "../../../courses/0403-複雑系プログラミング特論-2013/",
      },
    ];
    this.state = {
      // ホバーされた授業の識別タグを保持
      hoveredClass: 0,
    };
  }

  // ホバーされた授業の識別タグをhoveredClassステートにセット
  // Classコンポーネントに渡す
  setHoveredState(receivedTag) {
    this.setState({ hoveredClass: receivedTag });
  }

  render() {
    // ホバーされた授業の識別タグを略記
    let index = this.state.hoveredClass;
    return (
      <Layout>
        <HelmetForOGP
          title={"0と1がつなぐ社会"}
          category={"Topics"}
          image={`https://ocw.nagoya-u.jp${withPrefix(
            "/img/topics/topics7/topics7_header.png"
          )}`}
        />
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${withPrefix(
              "/img/topics/topics7/start.png"
            )})`,
            backgroundPosition: `top center`,
            backgroundRepeat: `repeat`,
          }}
        >
          <MesssageBox>
            <Title className="has-text-weight-bold is-size-4-mobile is-size-2-tablet has-text-centered">
              【TOPICS No.7】
              <br />
              0と1がつなぐ社会
            </Title>
            <Subtitle className="has-text-weight-bold is-size-5-widescreen has-text-centered is-hidden-touch">
              コンピュータやインターネットが高度に発達した現代の社会。
              <br />
              情報技術の進歩は、日々の生活に大きな変化をもたらしています。
              <br />
              そのような「情報」と、どう向き合えば良いのか、一緒に考えてみませんか？
              <br />
            </Subtitle>
          </MesssageBox>
        </div>

        <section className="section">
          <div className="container">
            <div className="columns is-variable is-6">
              {/* 授業選択パネルの表示 */}
              <div className="column is-5-desktop">
                <div className="columns is-multiline is-variable">
                  {/* 各授業のパネルをmap関数で表示  */}
                  {this.classList.map((classInfo) => {
                    return (
                      <div
                        className={`column is-10 is-offset-1 box is-full \
                          ${
                            // 表示しようとしている授業がホバーされた授業なら背景をグレーにする
                            classInfo.tag === this.state.hoveredClass
                              ? "has-background-light"
                              : ""
                          }`}
                        key={classInfo.tag}
                      >
                        <StyledLink to={classInfo.link}>
                          <Class
                            subject={classInfo.subject}
                            overview={classInfo.overview}
                            teacher={classInfo.teacher}
                            affiliation={classInfo.affiliation}
                            image={classInfo.image}
                            description={classInfo.description}
                            link={classInfo.link}
                            // ホバーされたらその授業の識別タグをhoveredClassステートにセットする関数を渡す
                            onMouseOver={() => {
                              this.setHoveredState(classInfo.tag);
                            }}
                          />
                        </StyledLink>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 授業詳細の表示 */}
              <div className="column is-hidden-touch">
                {
                  <Detail
                    className="has-text-centered"
                    subject={this.classList[index].subject}
                    overview={this.classList[index].overview}
                    teacher={this.classList[index].teacher}
                    affiliation={this.classList[index].affiliation}
                    image={this.classList[index].image}
                    description={this.classList[index].description}
                  />
                }
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Topics7;

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

const StyledLink = styled(Link)`
  color: #333;
`;
