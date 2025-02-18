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
              <p className="is-size-3-tablet is-size-2-widescreen has-text-weight-bold">
                {this.props.subject}
              </p>
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

class Topics8 extends React.Component {
  constructor(props) {
    super(props);
    // 各授業の情報を格納したオブジェクトを要素とする配列
    this.classList = [
      {
        subject: "基礎セミナー",
        overview: "遺伝子の実験から学び考える",
        teacher: "石黒澄衞 准教授",
        affiliation: "教養教育院",
        image: "/img/topics/topics8/class/kisemi.png",
        // 詳細表示や背景色変更の際に使用する授業の識別タグ
        tag: 0,
        description: `昨今巷でよく聞く「遺伝子」という言葉。それは一体何ものか？これを使って実験すると何が分かる？さらにその結果はどんなことに生かせるだろう？と聞かれたとき、あなたはパッと説明できますか？
        この授業では、遺伝子を使ったいくつかの実験を実際に自分の手で行い、結果を考察することで理解を深めていきます。
        資料を読みながら、皆さんも自ら考え実験しているつもりになって、サイエンスの奥深さ、面白さに触れてみませんか。`,
        link: "../../../courses/0264-基礎セミナー遺伝子を使うと何がわかる？何ができる？-2011",
      },
      {
        subject: "中国西南の民族と歴史",
        overview: "中国西南の歴史の流れを掴む",
        teacher: "林謙一郎 准教授",
        affiliation: "文学部・文学研究科",
        image: "/img/topics/topics8/class/china.png",
        tag: 1,
        description: `大学で学ぶ歴史って何だろう？それは年代や地名人名を暗記することではありません。大事なのは、その時代・場所で物事がどのように推移していき、後の時代にどのような影響を与えたかという「歴史の流れ」を感じ取ることです。
        この講義では、中国西南部の少数民族の歴史について学びます。歴史文献は常に多数派によって書かれるものですが、少数派の立場から見直したとき違ったものが見えてきます。
        中国西南部が時代とともに変遷していく様子を、一緒に探ってみませんか？`,
        link: "../../../courses/0015-中国西南の民族と歴史-2014",
      },
      {
        subject: "フィールドセミナーⅠ",
        overview: "実際に見て、触れて、感じる地球の科学",
        teacher: "竹内誠 教授",
        affiliation: "理学部・理学研究科",
        image: "/img/topics/topics8/class/field.png",
        tag: 2,
        description: `地球上に見られる地層や岩石の中には数万年、数億年と続く悠久の歴史が刻み込まれています。それらを理解するためには、講義による知識だけではなく、実際に触れ、観察して考えることが重要となってきます。
        この「フィールドセミナーI」では、野外で実際に地層や岩石を観察することでその理解を深めていきます。
        講義だけではわからない、遥かなる昔から地球が紡いできた歴史を、あなたの目と肌で感じてみましょう。`,
        link: "../../../courses/0469-フィールドセミナーI-2014",
      },
      {
        subject: "刑事訴訟法",
        overview: "刑事訴訟法の役割",
        teacher: "宮木康博 准教授",
        affiliation: "法学部・法学研究科",
        image: "/img/topics/topics8/class/keiji.png",
        tag: 3,
        description: `社会秩序を維持する方法としては、宗教、倫理など様々なものがありますが、国家による刑罰もまた、社会的コントロールの一手段です。
        もっとも、刑罰は、対象者等に重大な権利・利益侵害を加えるものであるため、その実現には慎重さが求められます。それゆえ、憲法31条は、「何人も、法律の定める手続によらなければ･･････刑罰を科せられない」としており、これを受けて、いかなる要件のもとで、 どのような刑罰を科すのかについては「刑法」が、この要件の存否を確認する手続について定めた法が「刑事訴訟法」です。「刑事訴訟法なければ刑法なし」といわれるゆえんです。
        いかなる手続の下で、真実の発見が目指されるのか。裁判員制度の導入に伴って従来より身近なものとなっている刑事訴訟法を学んでみませんか。`,
        link: "../../../courses/0359-刑事訴訟法-2012",
      },
      {
        subject: "生物化学Ⅱ",
        overview: "代謝とは何か：エネルギーの観点で",
        teacher: "前島正義 教授",
        affiliation: "農学部・生命農学研究科",
        image: "/img/topics/topics8/class/biology.png",
        tag: 4,
        description: `普段の食事が、体内でどのように代謝されているか、考えたことがありますか？
        代謝とは、分解された食物を、エネルギーや身体を構成する物質として獲得するためのプロセスのことです。 そのプロセスには多様な酵素と細胞内構造が深く関わります。
        この講義では、奥深い「代謝」について、概念を学び、酵素反応とエネルギーの授受を数値的に解析し、理解を深めます。`,
        link: "../../../courses/0421-生物化学2-2013",
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
          title={"大学の授業入門"}
          category={"Topics"}
          image={`https://ocw.nagoya-u.jp${withPrefix(
            "/img/topics/topics8/top/topics8_kanban.jpg"
          )}`}
        />
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${withPrefix(
              "/img/topics/topics8/header/header.png"
            )})`,
            backgroundPosition: `top center`,
            backgroundSize: `cover`,
          }}
        >
          <MesssageBox>
            <Title className="has-text-weight-bold is-size-4-mobile is-size-2-tablet has-text-centered">
              【TOPICS No.8】
              <br />
              大学の授業入門
            </Title>
            <Subtitle className="has-text-weight-bold is-size-5-widescreen has-text-centered is-hidden-touch">
              大学の授業、まずはここから。
              <br />
              今回は、大学で学ぶ専門的な内容と、
              <br />
              高校までに学ぶ内容との架け橋となるような授業を紹介します。
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

export default Topics8;

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
