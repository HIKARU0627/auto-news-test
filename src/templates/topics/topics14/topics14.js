import React from "react";
import { Link, withPrefix } from "gatsby";

import Layout from "@common/Layout/Layout";
import { Kanban, TopPage, LectureImage, Explanation } from "./topics14-style";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics14 = () => {
  return (
    <Layout>
      <HelmetForOGP
        title={"体育の授業特集"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics14/top/TOPICS14_kanban.png"
        )}`}
      />
      <div className="container is-9-desktop">
        <Kanban
          src={withPrefix("/img/topics/topics14/top/TOPICS14_kanban.png")}
        />
        <TopPage className="container" style={{ maxWidth: "1000px" }}>
          {/* containerがないと左寄せになる */}

          <Explanation>
            みなさんは大学での体育の授業についてどのようなイメージをお持ちですか？
            <br />
            名古屋大学では、どの学部の方も必修科目として、授業をとる（受ける）ことになると思います（講義の授業だけで十分な場合もあります）。
            名古屋大学はメジャーなものから、あまり馴染みのないものまで、多岐にわたって開講しています。
            今回のTOPICSでは、その中でもマイナーな種目である、アルティメット、アダプテット、太極拳の3つの授業について取材をしてきましたので、紹介します！
          </Explanation>

          {/* 太極拳へのリンク */}
          <Link to="/topics/topics14/topics14_taikyokuken">
            <LectureImage>
              <picture>
                <source
                  media="(min-width: 641px)"
                  srcSet={withPrefix(
                    "/img/topics/topics14/top/TOPICS14_PC_thum_Taikyokuken.png"
                  )}
                ></source>
                <img
                  src={withPrefix(
                    "/img/topics/topics14/top/TOPICS14_Mobile_thum_Taikyokuken.png"
                  )}
                ></img>
              </picture>
            </LectureImage>
          </Link>

          {/* アルティメットへのリンク */}
          <Link to="/topics/topics14/topics14_ultimate">
            <LectureImage>
              <picture>
                <source
                  media="(min-width: 641px)"
                  srcSet={withPrefix(
                    "/img/topics/topics14/top/TOPICS14_PC_thum_Ultimate.png"
                  )}
                ></source>
                <img
                  src={withPrefix(
                    "/img/topics/topics14/top/TOPICS14_Mobile_thum_Ultimate.png"
                  )}
                ></img>
              </picture>
            </LectureImage>
          </Link>

          {/* アダプテッドへのリンク */}
          <Link to="/topics/topics14/topics14_addapted">
            <LectureImage>
              <picture>
                <source
                  media="(min-width: 641px)"
                  srcSet={withPrefix(
                    "/img/topics/topics14/top/TOPICS14_PC_thum_Addapted.png"
                  )}
                ></source>
                <img
                  src={withPrefix(
                    "/img/topics/topics14/top/TOPICS14_Mobile_thum_Addapted.png"
                  )}
                ></img>
              </picture>
            </LectureImage>
          </Link>
        </TopPage>
      </div>
    </Layout>
  );
};

export default Topics14;
