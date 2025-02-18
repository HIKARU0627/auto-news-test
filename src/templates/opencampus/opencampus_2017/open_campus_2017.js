import React from "react";
import { withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import IframeMovie from "@common/IframeMovie";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

class TabControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tabName: "教育学部", id: 1 },
        { tabName: "経済学部", id: 2 },
        { tabName: "情報学部", id: 3 },
        { tabName: "理学部", id: 4 },
        { tabName: "医学部(保)", id: 5 },
      ],
      currentIndex: 1,
    };
  }
  componentDidMount() {}

  tabChecked = (id) => {
    // switch current index
    this.setState({
      currentIndex: id,
    });
  };

  render() {
    var _this = this;
    var isBox1Show = this.state.currentIndex === 1 ? "block" : "none";
    var isBox2Show = this.state.currentIndex === 2 ? "block" : "none";
    var isBox3Show = this.state.currentIndex === 3 ? "block" : "none";
    var isBox4Show = this.state.currentIndex === 4 ? "block" : "none";
    var isBox5Show = this.state.currentIndex === 5 ? "block" : "none";

    var tabList = this.state.tabs.map(
      function (res, index) {
        // set the current tab to "active"
        var tabStyle = res.id === this.state.currentIndex ? "checked" : " ";
        return (
          <TabItem
            className={tabStyle}
            key={index}
            onClick={this.tabChecked.bind(_this, res.id)}
          >
            {res.tabName}
          </TabItem>
        );
      }.bind(_this)
    );
    // render(){
    return (
      <div>
        <div className="container column is-10-widescreen">
          <div className="table-container">
            <div>{tabList}</div>
            <TabTable>
              <div style={{ display: isBox1Show }}>
                <p className="has-text-centered ">
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    記憶を促進するには？
                  </h1>
                  <br />
                  教育学部・心理発達科学専攻
                  <br />
                  清河幸子 准教授
                  <br />
                  <br />
                  記憶の仕組みと記憶の促進について認知心理学の立場から講義をしてくださいました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/ec6b5aed79e8b529d079210fd8d18a229adac04c" />
                  <br />
                  <br />
                </div>
              </div>

              <div style={{ display: isBox2Show }}>
                <p className="has-text-centered ">
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    豊かな国のルーツをたどる
                  </h1>
                  <br />
                  経済学研究科
                  <br />
                  木越義則 准教授
                  <br />
                  <br />
                  <p style={{ textIndent: "2em" }}>
                    {" "}
                    様々な経済学者たちの足跡を辿り、豊かな国の出来上がったルーツを考える講義をしてくださいました。
                  </p>
                </p>

                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/fa9487212916433a49cbe36b2acd81a093cfebb8" />
                  <br />
                  <br />
                  <div>
                    <img
                      src={withPrefix("/img/opencampus/tobira/line.svg")}
                      alt=""
                    />
                  </div>
                </div>
                <p className="has-text-centered ">
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    データを使って経済を考える：計量経済学入門
                  </h1>
                  <br />
                  経済学研究科
                  <br />
                  園田正 教授
                  <br />
                  <br />
                  <p style={{ textIndent: "2em" }}>
                    大学で学ぶ経済学の入門として計量経済学の講義をしていただきました。
                  </p>
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/198820794db480acf6e1baa06f120361f69c7a10" />
                  <br />
                  <br />
                </div>
              </div>
              <div style={{ display: isBox3Show }}>
                <p className="has-text-centered ">
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    自然情報学科 学科紹介
                  </h1>
                  <br />
                  情報学部・自然情報学科長
                  <br />
                  畔上秀幸 教授
                  <br />
                  <br />
                  自然情報学科の学科紹介をしていただきました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/4eb6e89670862db8aa3f623765e4121b41590817" />
                  <br />
                  <br />{" "}
                  <div>
                    <img
                      src={withPrefix("/img/opencampus/tobira/line.svg")}
                      alt=""
                    />
                  </div>
                </div>

                <p className="has-text-centered ">
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    人間・社会情報学科 学科紹介
                  </h1>
                  <br />
                  情報学部・人間・社会情報学科長
                  <br />
                  中村登志哉 教授
                  <br />
                  <br />
                  人間・社会情報学科の学科紹介をしていただきました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/842fc20732aababc506dfff93a853454a17fde6a" />
                  <br />
                  <br />
                  <div>
                    <img
                      src={withPrefix("/img/opencampus/tobira/line.svg")}
                      alt=""
                    />
                  </div>
                </div>

                <p className="has-text-centered ">
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    コンピュータ科学科 学科紹介
                  </h1>
                  <br />
                  情報学部・コンピュータ科学科長
                  <br />
                  間瀬健二 教授
                  <br />
                  <br />
                  コンピュータ科学科の学科紹介をしていただきました
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/674a13cd349446b0b4a95941dee41719fdb4c108" />
                  <br />
                  <br />
                  <div>
                    <img
                      src={withPrefix("/img/opencampus/tobira/line.svg")}
                      alt=""
                    />
                  </div>
                </div>

                <p className="has-text-centered ">
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    意外と身近な組合せ最適化
                  </h1>
                  <br />
                  情報学部・自然情報学科
                  <br />
                  柳浦睦憲 教授
                  <br />
                  <br />
                  <p style={{ textIndent: "2em" }}>
                    組合せ最適化について長方形の例を使いながら分かりやすい講義をしてくださいました。
                  </p>
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  {" "}
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/d9ac8d1753612435cbeeb72e3dbdfc50d3dd388e" />
                  <br />
                  <br />
                  <div>
                    <img
                      src={withPrefix("/img/opencampus/tobira/line.svg")}
                      alt=""
                    />
                  </div>
                </div>

                <p className="has-text-centered ">
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    やさしいコンピュータ科学入門
                  </h1>
                  <br />
                  情報学部・コンピュータ科学科
                  <br />
                  関浩之 教授
                  <br />
                  <br />
                  <p style={{ textIndent: "2em" }}>
                    現在のIT
                    技術と、それを支えるコンピュータ科学について講義をしてくださいました。
                  </p>
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  {" "}
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/079ef524190c637327f422ecd3ac53296be1706c" />
                  <br />
                  <br />
                </div>
              </div>

              <div style={{ display: isBox4Show }}>
                <p className="has-text-centered ">
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    有機化学研究室ラボツアー
                  </h1>
                  <br />
                  有機化学研究室のラボツアーをしていただきました。
                  <br />
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/d4b11c0b42ea799c83b6ab024e8fe69e0c752133" />
                  <br />
                  <br />
                  <div>
                    <img
                      src={withPrefix("/img/opencampus/tobira/line.svg")}
                      alt=""
                    />
                  </div>
                </div>

                <p className="has-text-centered ">
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    光物理化学研究室ラボツアー
                  </h1>
                  <br />
                  光物理化学研究室のラボツアーをしていただきました。
                  <br />
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/0ad196c6e75a37eca53dab06e41ed3d8df4cb196" />
                  <br />
                  <br />
                </div>
              </div>

              <div style={{ display: isBox5Show }}>
                <p className="has-text-centered ">
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    臨床在宅看護学実習室
                  </h1>
                  <br />
                  実演を交えた実習室の見学会をしていただきました。
                  <br />
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/442f23712bd1d804c3d2296a0a736d76ab35c928" />
                  <br />
                  <br />
                </div>
              </div>
            </TabTable>
          </div>
        </div>
      </div>
    );
  }
}

const OpenCampus_2017 = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"OPEN CAMPUS 2017"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/opencampus/opencampus_2017.svg"
        )}`}
      />
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/"
          )}img/opencampus/opencampus_2017.svg)`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered">
            OPEN CAMPUS 2017
          </Title>
          <Subtitle className="has-text-weight-bold is-size-5-mobile is-size-4-widescreen has-text-lefted has-text-centered">
            去る2017年8月、名古屋大学にてオープンキャンパスが開催されました。
            <br />
            ここではその模様を、一部紹介します。
          </Subtitle>
        </MesssageBox>
      </div>
      <section className="section">
        <div className="container">
          <TabControl />
        </div>
      </section>
    </Layout>
  );
};

export default OpenCampus_2017;

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

const TabItem = styled.div`
  width: 20%;
  border-bottom: 2px solid #006e4f;
  background-color: #ffffff;
  line-height: 60px;
  font-size: 16px;
  color: #565656;
  font-weight: bold;
  float: left;
  text-align: center;

  &:hover {
    background-color: #76ae9f;
    color: #002b1f;
  }

  &.checked {
    background-color: #006e4f;
    color: white;
  }
`;

const TabTable = styled.div`
  border: 2px solid #006e4f;
`;
