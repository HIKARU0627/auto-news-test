import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const ResearchInterviewPage = ({ data }) => {
  const post = data.markdownRemark;
  const content = post.html;
  const info = post.frontmatter;
  return (
    <Layout>
      <HelmetForOGP title={info.title} description={info.overview} />
      {/* ヘッダー画像 */}
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${withPrefix(
            "/img/research/header/header.jpg"
          )})`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
        }}
      >
        <MesssageBox>
          <Title className="has-text-weight-bold is-size-2-mobile is-size-1-tablet has-text-centered">
            名大の研究指導
          </Title>
        </MesssageBox>
      </div>
      {/* メインコンテンツ */}
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-9 styled-title">
              {/* 概要 */}
              <div>
                <h2 className="has-text-weight-bold is-size-4">
                  #{info.articleNumber} {info.title}
                </h2>
                <p className="mx-3 mt-4 mb-6">{info.overview}</p>
              </div>

              {/* インタビュー記事 */}
              <TabView info={info} content={content} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResearchInterviewPage;

// タブ選択のコンポーネント
class TabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // statusがteacherの場合はtabを教授インタビューの表示に、学生なら学生インタビューの表示にする
      index: props.info.status === "teacher" ? 0 : 1,
      //targetがteacher-studentの場合はtabを表示し、teacherの場合はtabを非表示にする
      target: props.info.interviewTarget === "teacher-student" ? 0 : 1,
    };
    // 記事番号が同じ記事へのスラグを作成（Tabs内で末尾にteacherまたはstudentを結合）
    this.slug = `/research/interview/${("00" + props.info.articleNumber).slice(
      -2
    )}-`;
    // 選択されたタブにつけるためのstyle
    this.selectedStyle = {
      backgroundColor: "#006e4f",
    };
  }

  render() {
    return (
      <div>
        {this.state.target === 0 && (
          <div>
            <Tabs>
              <div style={this.state.index === 0 ? this.selectedStyle : null}>
                <Link
                  to={this.slug + "teacher"}
                  style={{
                    color: this.state.index === 0 ? "white" : "inherit",
                  }}
                >
                  <h4>教授インタビュー</h4>
                </Link>
              </div>
              <div style={this.state.index === 1 ? this.selectedStyle : null}>
                <Link
                  to={this.slug + "student"}
                  style={{
                    color: this.state.index === 1 ? "white" : "inherit",
                  }}
                >
                  <h4>学生インタビュー</h4>
                </Link>
              </div>
            </Tabs>
          </div>
        )}

        <Article>
          <StyledDiv
            dangerouslySetInnerHTML={{ __html: this.props.content }}
            className="styled-title"
          />
        </Article>
      </div>
    );
  }
}

const Tabs = styled.div`
  height: 55px;
  display: flex;
  border-bottom: 2px solid #006e4f;
  & div {
    width: 50%;
  }
  & div:hover {
    background: #76ae9f;
    cursor: pointer;
  }
  & h4 {
    text-align: center;
    line-height: 55px;
    font-weight: bold;
  }
`;

const Article = styled.div`
  margin: 30px 10px;
  & h3 {
    font-weight: bold;
    font-size: 1.2rem;
  }
  & p {
    margin: 15px 10px;
    margin-bottom: 40px;
  }
`;

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

// Propsの型を指定
ResearchInterviewPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.node.isRequired,
      frontmatter: PropTypes.object,
    }),
  }),
};

export const pageQuery = graphql`
  query InterviewById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        articleNumber
        overview
        title
        status
        interviewTarget
      }
    }
  }
`;

const StyledDiv = styled.div`
  & h2 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  & img {
    float: left;
    width: 40%;
    margin: 30px 50px 10px;
  }
  @media (max-width: 600px) {
    & img {
      width: 100%;
      margin: 20px auto;
    }
  }
`;
