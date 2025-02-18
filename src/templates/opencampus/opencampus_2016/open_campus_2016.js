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
        { tabName: "情報学部", id: 2 },
        { tabName: "理学部", id: 3 },
        { tabName: "法学部", id: 4 },
        { tabName: "その他", id: 5 },
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
                    災害と心のケア
                  </h1>
                  <br />
                  教育学部・教育科学発達科学研究科
                  <br />
                  窪田由紀 教授
                  <br />
                  <br />
                  <p style={{ textIndent: "2em" }}>
                    2016年4月に熊本で発生した地震を題材に、災害の際の心のケアの仕方を心理学の立場から講義をしてくださいました。
                  </p>
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/082ad8147fdc01bceba4a1332480673add0eeced" />
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
                    人工知能はアイスナインの夢を見るか？
                  </h1>
                  <br />
                  情報学部・自然情報学科
                  <br />
                  時田恵一郎 教授
                  <br />
                  <br />
                  情報学部で扱う複雑系科学研究について講義をしてくださいました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/1c78b28bf724650350b7e6d6fb9c30a97faa1972" />
                  <br />
                  <br />
                </div>
                <div>
                  <img
                    src={withPrefix("/img/opencampus/tobira/line.svg")}
                    alt=""
                  />
                </div>
              </div>

              <div style={{ display: isBox3Show }}>
                <p className="has-text-centered ">
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className="has-text-centered is-size-4">模擬実験実習</h1>
                  <br />
                  理学部・生命理学科
                  <br />
                  井上晋一郎 助教
                  <br />
                  <br />
                  植物の光に対する反応を観察しました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/a556f88b027f316a41bcd7424fc3d500f45238eb" />
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
                    理学部数理学科 授業紹介
                  </h1>
                  <br />
                  多元数理科学研究科事務員
                  <br />
                  小崎和子 さん
                  <br />
                  <br />
                  <p style={{ textIndent: "2em" }}>
                    学生が作ったポスターを使って、理学部の授業について説明してくださいました。
                  </p>
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/d1319ad2dae5ebb562540fe9e26e7c622e95d77b" />
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
                    保護者対象説明会
                  </h1>
                  <br />
                  理学部長
                  <br />
                  松本邦弘 他
                  <br />
                  <br />
                  理学部生の生活、就職状況について紹介しました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/ee6a08bd638682c38b3aa6af0f5c5c92d976e936" />
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
                  <h1 className="has-text-centered is-size-4">法廷教室紹介</h1>
                  <br />
                  大学院法学研究科
                  <br />
                  長田理 研究員
                  <br />
                  <br />
                  実際の裁判所をもとに造られた、法廷教室を見学しました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/a2522260082ab3f102aaded6604182877696092a" />
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
                  <h1 className="has-text-centered is-size-4">海外留学室</h1>
                  <br />
                  工学部化学生物工学科
                  <br />
                  渡邉智基 さん
                  <br />
                  <br />
                  留学支援プログラムの紹介をしてくださいました
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/aa9519272921e61e1f30bae3b67217512999243b" />
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
                    新入生対応ブース
                  </h1>
                  <br />
                  名大生のボランティアの方々
                  <br />
                  <br />
                  自分の体験をもとに、名大について紹介してくださいました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/b6b1b573b0af6fbb9fb34c223c61aa8d4cf58d68" />
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

const OpenCampus_2016 = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"OPEN CAMPUS 2016"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/opencampus/opencampus_2016.svg"
        )}`}
      />
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/"
          )}img/opencampus/opencampus_2016.svg)`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered">
            OPEN CAMPUS 2016
          </Title>
          <Subtitle className="has-text-weight-bold is-size-5-mobile is-size-4-widescreen has-text-lefted has-text-centered">
            去る2016年8月、名古屋大学にてオープンキャンパスが開催されました。
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

export default OpenCampus_2016;

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
