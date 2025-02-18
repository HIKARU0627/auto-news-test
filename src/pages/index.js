import React from "react";
import { Link, graphql, StaticQuery, withPrefix } from "gatsby";
import styled from "styled-components";

import LayoutTop from "@features/Top/LayoutTop";
import TopicsTopRoll from "@features/Top/TopicsTopRoll";
import RankingTopRoll from "@features/Top/RankingTopRoll";
import CourseTopRoll from "@features/Top/CourseTopRoll";
import FarewellTopRoll from "@features/Top/FarewellTopRoll";
import NewsTopTable from "@features/Top/NewsTopTable";
import TopSearchForm from "@features/Top/TopSearchForm";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const IndexPage = ({ data }) => {
  return (
    <LayoutTop>
      <HelmetForOGP title={"NUOCW"} />
      <div
        className="full-width-image-top-with-search margin-top-0 is-hidden-mobile"
        style={{
          backgroundImage: `url(${withPrefix("/img/home.png")})`,
          backgroundPosition: `center 5.25rem`,
          backgroundAttachment: `fixed`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <MessageBoad>
          <MesssageBox>
            <Title className="has-text-weight-bold is-size-5-mobile is-size-4-tablet is-size-3-widescreen has-text-left">
              勇気ある知識人
            </Title>
            <Subtitle className="has-text-weight-bold is-size-7-mobile is-size-6-tablet is-size-5-widescreen has-text-left">
              本Webサイトでは、普段見ることのできない名古屋大学の教育の一端を公開しています。学生の自学自主教材としての活用だけでなく、教員と学生、教員と学外者、そして教員同士の交流・インタラクションを期待しています。
            </Subtitle>
          </MesssageBox>
          {/*
          <RecruitmentBox>
            <Link to="/apply">
              <Title className="has-text-weight-bold is-size-7-mobile is-size-6-tablet is-size-5-widescreen has-text-centered">
                OCWサポートスタッフ募集中！
              </Title>
              <Subtitle className="has-text-weight-bold is-size-7-mobile is-size-6-tablet is-size-5-widescreen has-text-left">
                「名大の授業」の制作にご協力いただける学生の皆さんを募集しています。
              </Subtitle>
            </Link>
          </RecruitmentBox>
        */}
        </MessageBoad>
        <TopSearchForm />
      </div>
      <div
        className="full-width-image-top-touch margin-top-0 is-hidden-tablet"
        style={{
          backgroundImage: `url(${withPrefix("/img/top_mobile_large.png")})`,
          backgroundPosition: `center `,
          backgroundSize: `cover`,
          // backgroundAttachment: `fixed`,
          // coverとfixedが両方あるとiPhoneではうまく行かないらしいのでアプデ待ち
          backgroundRepeat: `no-repeat`,
        }}
      >
        <MesssageBoxTouch>
          <Title className="margin-bottom-0 has-text-weight-bold is-size-5-mobile is-size-3-tablet is-size-2-widescreen has-text-centered">
            「名大の授業」へようこそ！
          </Title>
        </MesssageBoxTouch>
        {/*
        <RecruitBoxTouch>
          <Link to="/apply">
            <Title className="margin-top-0 padding-top-0 has-text-weight-bold is-size--mobile is-size-5-tablet is-size-4-widescreen has-text-centerd">
              OCWサポートスタッフ募集中！
            </Title>
          </Link>
        </RecruitBoxTouch>
        */}
      </div>
      {/* <div className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-size-5-mobile is-size-4-tablet">
              サーバーのメンテナンスに伴い、11月17日(日)は当サイトへアクセスできなくなります。
            </h2>
          </div>
        </div>
      </div> */}
      <section className="section section--gradient">
        <div className="container">
          <div className="content">
            <div className="add-padding-bottom">
              <div className="column is-12">
                <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2 is-h2">
                  TOPICS
                  <NumofContent className="ml-2 has-text-grey">
                    {data.topics.totalCount}件
                  </NumofContent>
                  <StyledLink
                    className="is-size-6 is-hidden-touch theme-color"
                    to="/topics"
                  >
                    もっと見る &gt;
                  </StyledLink>
                </h2>
                <TopicsTopRoll />
                <MoreButton to="/topics" />
              </div>
            </div>
            <div className="add-padding-bottom">
              <div className="column is-12 add-padding-bottom">
                <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2 is-h2">
                  人気講義
                  <StyledLink
                    className="is-size-6 is-hidden-touch theme-color"
                    to="/ranking"
                  >
                    もっと見る &gt;
                  </StyledLink>
                </h2>
                <RankingTopRoll />
                <MoreButton to="/ranking" />
              </div>
            </div>
            <div className="add-padding-bottom">
              <div className="column is-12 add-padding-bottom">
                <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2 is-h2">
                  授業
                  <NumofContent className="ml-2 has-text-grey">
                    {data.courses.totalCount}件
                  </NumofContent>
                  <StyledLink
                    className="is-size-6 is-hidden-touch theme-color"
                    to="/courses"
                  >
                    もっと見る &gt;
                  </StyledLink>
                </h2>
                <CourseTopRoll />
                <MoreButton to="/courses" />
              </div>
            </div>
            <div className="add-padding-bottom">
              <div className="column is-12 add-padding-bottom">
                <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2 is-h2">
                  最終講義
                  <NumofContent className="ml-2 has-text-grey">
                    {data.farewell.totalCount}件
                  </NumofContent>
                  <StyledLink
                    className="is-size-6 is-hidden-touch theme-color"
                    to="/farewell"
                  >
                    もっと見る &gt;
                  </StyledLink>
                </h2>
                <FarewellTopRoll />
                <MoreButton to="/farewell" />
              </div>
            </div>
            <div className="add-padding-bottom">
              <div className="column is-12 add-padding-bottom">
                <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2 is-h2">
                  更新情報
                  <StyledLink
                    className="is-size-6 is-hidden-touch theme-color"
                    to="/news"
                  >
                    もっと見る &gt;
                  </StyledLink>
                </h2>
                <NewsTopTable />
                <MoreButton to="/news" />
              </div>
            </div>
            {/*
            <div className="add-padding-bottom">
              <div className="column is-8 add-padding-bottom is-offset-2">
                <a
                  className="twitter-timeline"
                  data-lang="ja"
                  data-tweet-limit="2"
                  data-chrome="nofooter"
                  href="https://twitter.com/nuocw?ref_src=twsrc%5Etfw"
                >
                  Tweets by nuocw
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                ></script>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
    </LayoutTop>
  );
};

const MessageBoad = styled.div`
  height: 100%;
  width: 50%;
  display: grid;
  align-content: space-evenly;
  padding-left: 10%;
`;

const MesssageBox = styled.div`
  display: flex;
  line-height: 1;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2rem;
`;

const MesssageBoxTouch = styled.div`
  width: 80%;
  display: flex;
  line-height: 1;
  justify-content: space-around;
  align-items: right;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0.5rem;
`;

// const RecruitBoxTouch = styled.div`
//   width: 70%;
//   display: flex;
//   line-height: 1;
//   justify-content: space-around;
//   align-items: right;
//   text-align: center;
//   flex-direction: column;
//   background-color: #ffffff;
//   padding: 0.5rem;
// `;

// const EmptyBox = styled.div`
//   width: 40%;
//   display: flex;
// `;

// const RecruitmentBox = styled.div`
//   display: flex;
//   line-height: 1;
//   justify-content: space-around;
//   align-items: left;
//   flex-direction: column;
//   background-color: #ffffff;
//   padding: 1rem;
// `;

// const EmptyBox2 = styled.div`
//   width: 55%;
//   display: flex;
// `;

const Title = styled.h1`
  color: #006e4f;
  line-height: 1.5;
`;

const Subtitle = styled.h3`
  color: #006e4f;
  line-height: 2;
`;

const StyledLink = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0.3rem;
`;

const NumofContent = styled.span`
  font-size: 0.6em;
`;

const MoreButton = (props) => {
  return (
    <Link
      className="is-hidden-desktop button is-light is-fullwidth"
      to={props.to}
    >
      もっと見る
    </Link>
  );
};

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query IndexQuery {
//         topics: allMarkdownRemark(
//           filter: { frontmatter: { jspagetype: { eq: "topics" } } }
//         ) {
//           # content for topics
//           totalCount
//         }
//         courses: allMarkdownRemark(
//           filter: { frontmatter: { templateKey: { eq: "courses" } } }
//         ) {
//           # content for courses
//           totalCount
//         }
//         farewell: allMarkdownRemark(
//           filter: { frontmatter: { templateKey: { eq: "farewell" } } }
//         ) {
//           # content for farewell
//           totalCount
//         }
//       }
//     `}
//     render={data => <IndexPage data={data} />}
//   />
// );

const Indexquery = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        topics: allMarkdownRemark(
          filter: { frontmatter: { jspagetype: { eq: "topics" } } }
        ) {
          # content for topics
          totalCount
        }
        courses: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "courses" } } }
        ) {
          # content for courses
          totalCount
        }
        farewell: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "farewell" } } }
        ) {
          # content for farewell
          totalCount
        }
      }
    `}
    render={(data) => <IndexPage data={data} />}
  />
);

export default Indexquery;
