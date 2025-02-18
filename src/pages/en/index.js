import React from "react";
import { Link, graphql, StaticQuery, withPrefix } from "gatsby";
import styled from "styled-components";

import LayoutEnTop from "@features/Top/LayoutEnTop";
// import TopicsTopRoll from "../../components/TopicsTopRoll";
// import RankingTopRoll from "../../components/RankingTopRoll";
import CourseTopRollEn from "@features/Top/CourseTopRollEn";
// import FarewellTopRoll from "../../components/FarewellTopRoll";
import NewsTopTableEn from "@features/Top/NewsTopTableEn";
import TopSearchFormEn from "@features/Top/TopSearchFormEn";
import HelmetForOGPEn from "@common/Helmet/HelmetForOGPEn";

const IndexPage = ({ data }) => {
  return (
    <LayoutEnTop>
      <HelmetForOGPEn title={"NUOCW"} />
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
              Courageous Intellectuals
            </Title>
            <Subtitle className="has-text-weight-bold is-size-7-mobile is-size-6-tablet is-size-5-widescreen has-text-left">
              On the NU OCW (Nagoya University OpenCourseWare) website anyone
              from anywhere in the world can see Nagoya University class
              information and materials for free.
            </Subtitle>
            {/* <Subtitle className="has-text-weight-bold is-size-7-mobile is-size-6-tablet is-size-5-widescreen has-text-left">
              <Link className="is-hidden-touch" to="./about">
                Learn more
              </Link>
            </Subtitle> */}
          </MesssageBox>
        </MessageBoad>
        {/* <EmptyBox></EmptyBox> */}
        {/* <RecruitmentBox>
          <Link to="/apply">
            <Title className="has-text-weight-bold is-size-7-mobile is-size-6-tablet is-size-5-widescreen has-text-centered">
              OCWサポートスタッフ募集中！
            </Title>
            <Subtitle className="has-text-weight-bold is-size-8-mobile is-size-7-tablet is-size-6-widescreen has-text-left">
              「名大の授業」の制作にご協力いただける学生の皆さんを募集しています。
            </Subtitle>
          </Link>
        </RecruitmentBox> */}
        {/* <EmptyBox2></EmptyBox2> */}

        <TopSearchFormEn />
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
          <Title className="margin-bottom-0 has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen has-text-centered">
            Welcome to NUOCW
          </Title>
        </MesssageBoxTouch>
        {/* <RecruitBoxTouch>
          <Link to="/apply">
            <Title className="margin-top-0 padding-top-0 has-text-weight-bold is-size--mobile is-size-5-tablet is-size-4-widescreen has-text-centerd">
              Join our team...
            </Title>
          </Link>
        </RecruitBoxTouch> */}
      </div>
      {/* <div className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-size-5-mobile is-size-4-tablet">
              Due to server maintenance, this site will be inaccessible on
              11/17(Sun.)
            </h2>
          </div>
        </div>
      </div> */}
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="content">
              {/* <div className="add-padding-bottom">
                <div className="column is-12">
                  <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-h2">
                    TOPICS{" "}
                    <NumofContent>（{data.topics.totalCount}）</NumofContent>
                    <StyledLink className="btn is-hidden-touch" to="/topics">
                      More
                    </StyledLink>
                  </h2>
                  <TopicsTopRoll />
                  <MoreButton to="/topics" />
                </div>
              </div> */}
              {/* <div className="add-padding-bottom">
                <div className="column is-12 add-padding-bottom">
                  <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-h2">
                    人気講義
                    <StyledLink className="btn is-hidden-touch" to="/ranking">
                      More
                    </StyledLink>
                  </h2>
                  <RankingTopRoll />
                  <MoreButton to="/ranking" />
                </div>
              </div> */}
              <div className="add-padding-bottom">
                <div className="column is-12 add-padding-bottom">
                  <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2 is-h2">
                    Courses
                    <NumofContent className="ml-2 has-text-grey">
                      {data.courses_en.totalCount} posts
                    </NumofContent>
                    <StyledLink
                      className="is-size-6 is-hidden-touch theme-color"
                      to="/en/courses"
                    >
                      More &gt;
                    </StyledLink>
                  </h2>
                  <CourseTopRollEn />
                  <MoreButton to="/en/courses" />
                </div>
              </div>
              {/* <div className="add-padding-bottom">
                <div className="column is-12 add-padding-bottom">
                  <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-h2">
                    最終講義
                    <NumofContent>（{data.farewell.totalCount}）</NumofContent>
                    <StyledLink className="btn is-hidden-touch" to="/farewell">
                      More
                    </StyledLink>
                  </h2>
                  <FarewellTopRoll />
                  <MoreButton to="/farewell" />
                </div>
              </div> */}
              <div className="add-padding-bottom">
                <div className="column is-12 add-padding-bottom">
                  <h2 className="has-text-weight-semibold is-size-3-mobile is-size-2 is-size-1-widescreen is-h2">
                    News
                    <StyledLink
                      className="is-size-6 is-hidden-touch theme-color"
                      to="/en/news"
                    >
                      More &gt;
                    </StyledLink>
                  </h2>
                  <NewsTopTableEn />
                  <MoreButton to="/en/news" />
                </div>
              </div>
              {/*
              <div className="add-padding-bottom">
                <div className="column is-8 add-padding-bottom is-offset-2">
                  <a
                    className="twitter-timeline"
                    data-lang="en"
                    data-tweet-limit="2"
                    data-chrome="nofooter"
                    href="https://twitter.com/NagoyaUniv_OCW?ref_src=twsrc%5Etfw"
                  >
                    Tweets by NagoyaUniv_OCW
                  </a>
                  <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8"
                  ></script>
                </div>
              </div>
            */}
            </div>
          </div>
        </div>
      </section>
    </LayoutEnTop>
  );
};

const MessageBoad = styled.div`
  height: 100%;
  width: 50%;
  display: grid;
  align-content: space-around;
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

/*
const RecruitBoxTouch = styled.div`
  width: 70%;
  display: flex;
  line-height: 1;
  justify-content: space-around;
  align-items: right;
  text-align: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0.5rem;
`;
*/

// const EmptyBox = styled.div`
//   width: 40%;
//   display: flex;
// `;

/*
const RecruitmentBox = styled.div`
  width: 25%;
  display: flex;
  line-height: 1;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem;
`;
*/

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

/*
const Subtitle_underline = styled(Subtitle)`
  border-bottom: 1px solid #aaa;
`;
*/

const StyledLink = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0.3rem;
`;

const MoreButton = (props) => {
  return (
    <Link
      className="is-hidden-desktop button is-light is-fullwidth"
      to={props.to}
    >
      More
    </Link>
  );
};

const NumofContent = styled.span`
  font-size: 0.6em;
`;

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

const IndexqueryEn = () => (
  <StaticQuery
    query={graphql`
      query IndexQueryEn {
        courses_en: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "courses-en" } } }
        ) {
          # content for courses-en
          totalCount
        }
      }
    `}
    render={(data) => <IndexPage data={data} />}
  />
);

export default IndexqueryEn;
