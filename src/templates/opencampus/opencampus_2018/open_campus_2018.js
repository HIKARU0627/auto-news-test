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
        { tabName: "クロマト", id: 1 },
        { tabName: "細胞", id: 2 },
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
                    クロマトグラフィーで身近なものを分解する（理学部）
                  </h1>
                  <br />
                  理学部・理学研究科 生命理学専攻 細胞間シグナル研究部門
                  <br />
                  篠原 秀文 助教授
                  <br />
                  <br />
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/5e91f31e9129f1226c559dc28f1c5f126b60ed3d" />
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
                    細胞の死が動物のかたちを作る（理学部）
                  </h1>
                  <br />
                  理学部・理学研究科 生命理学専攻 形態発生学部門
                  <br />
                  白石 洋一 助教授
                  <br />
                  <br />
                </p>
                <div
                  className="column is-12-mobile is-8-desktop"
                  style={{ margin: "0 auto" }}
                >
                  <IframeMovie src="https://nuvideo.media.nagoya-u.ac.jp/embed/4dd3e46a53f33b5063c6b688af4b99ea9a43bbbd" />
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

const OpenCampus_2018 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"OPEN CAMPUS 2018"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/opencampus/opencampus_2018.svg"
        )}`}
      />
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/"
          )}img/opencampus/opencampus_2018.svg)`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered">
            OPEN CAMPUS 2018
          </Title>
          <Subtitle className="has-text-weight-bold is-size-5-mobile is-size-4-widescreen has-text-lefted has-text-centered">
            去る2018年8月、名古屋大学にてオープンキャンパスが開催されました。
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

export default OpenCampus_2018;

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
