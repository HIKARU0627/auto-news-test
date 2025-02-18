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
        { tabName: "理学部", id: 1 },
        { tabName: "文学部", id: 2 },
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
                    模擬実験実習 (理学部 生命理学科)
                  </h1>
                  <br />
                  大学院理学研究科 生命理学専攻
                  <br />
                  白石洋一 助手
                  <br />
                  <br />
                  孵化前のニワトリの胚を取り出し、アポトーシスの様子を観察しました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/48584f0c71f7c620561ad7706a35ae49257996f5" />
                  <br />
                  <br />
                  <div>
                    <img
                      src={withPrefix("/img/opencampus/tobira/line.svg")}
                      alt=""
                    />
                  </div>
                </div>{" "}
                <p className="has-text-centered ">
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    ラボツアー (理学部 生命理学科 生殖分子情報学研究室)
                  </h1>
                  <br />
                  大学院理学研究科 生命理学専攻 <br />
                  東山哲也 教授
                  <br />
                  <br />
                  2015年5月に完成したITbM棟と、その建物の中にある最新の研究設備の数々を見学しました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/ab2f8edab777aad85d4fef0355a54639c628a7e9" />
                  <br />
                  <br />
                  <div>
                    <img
                      src={withPrefix("/img/opencampus/tobira/line.svg")}
                      alt=""
                    />
                  </div>{" "}
                </div>
                <p className="has-text-centered ">
                  <br />
                  <h1 className="has-text-centered is-size-4">
                    研究室紹介 (理学部 生命理学科)
                  </h1>
                  <br />
                  発生成長制御学グループ &nbsp; 学部4年 柳瀬里奈 さん
                  <br />
                  脳回路構築学グループ &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                  助教 石川由希 先生
                  <br />
                  細胞間シグナル研究グループ &nbsp; 助教 篠原秀文 先生
                  <br />
                  卵細胞生物学グループ&nbsp; &nbsp; &nbsp;&nbsp; 博士3年
                  小田春佳 さん
                  <br />
                  <br />
                  ポスターによる各研究室の紹介をしていただきました。
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/8fe0621802840d513673787c1ae9c50e9ef5327a" />
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
                    研究室紹介 (文学部 考古学研究室)
                  </h1>
                  <br />
                  大学院文学研究科 人文学専攻
                  <br />
                  梶原義実 准教授
                  <br />
                  <br />
                  名古屋大学構内から出てきた800年〜1500年前の土器に実際に触れ、学びました。
                  <br />
                  <br />
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/b95517b285a531eda5e39259fe3be1ca6f490e8a" />
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

const OpenCampus_2015 = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"OPEN CAMPUS 2015"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/opencampus/opencampus_2015.svg"
        )}`}
      />
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/"
          )}img/opencampus/opencampus_2015.svg)`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered">
            OPEN CAMPUS 2015
          </Title>
          <Subtitle className="has-text-weight-bold is-size-4-widescreen is-size-5-mobile has-text-lefted has-text-centered">
            去る2015年8月、名古屋大学にてオープンキャンパスが開催されました。
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

export default OpenCampus_2015;

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
  width: 50%;
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
