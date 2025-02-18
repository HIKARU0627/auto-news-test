import React from "react";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import { BreadcrumbBar } from "@common/BreadCrumbBar";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Apply = (props) => {
  const { pageContext } = props;
  const {
    breadcrumb: { crumbs },
  } =
    pageContext && pageContext.breadcrumb.crumbs.length
      ? pageContext
      : { breadcrumb: { crumbs: undefined } };
  return (
    <Layout>
      <HelmetForOGP title={"スタッフ募集"} />
      <div className="container is-fullhd is-centered">
        <div className="content is-hidden-touch">
          <img src="/img/apply/apply_header_re.png" alt="" />
        </div>

        <div className="content is-hidden-desktop">
          <img src="/img/apply/apply_mobile_re_wide.png" alt="" />
        </div>
      </div>

      <section className="section">
        <BreadcrumbBar crumbs={crumbs} />
        <div className="container">
          <h2 className="has-text-weight-semibold is-size-5-mobile is-size-4-tablet is-size-3-widescreen is-h2">
            労働環境 {/* ※現在全ての班の募集を停止しております */}
          </h2>
          <div className="column">
            <p>
              時給:1,170円
              <br />
              <br />
              業務内容:「名大の授業」webページ作成・運用(上記内容)
              <br />
              <br />
              勤務場所:人文学共用館4階
              <br />
              <br />
              勤務時間:職種ごとに異なります
              <br />
              <br />
              <WorkingHour>
                <li>
                  <FixedWidthSpan>グラフィックデザイン</FixedWidthSpan>
                  毎週木曜日 18:00~20:00
                </li>
                <li>
                  <FixedWidthSpan>サーバーサイドエンジニア</FixedWidthSpan>
                  毎週月曜日,金曜日18:15~20:15
                </li>
                <li>
                  <FixedWidthSpan>クライアントサイドエンジニア</FixedWidthSpan>
                  毎週月曜日,金曜日18:15~20:15
                </li>
              </WorkingHour>
              <br />
              <br />
              応募条件:名大生であること（ 新入生や未経験の方も歓迎します ）
              <br />
            </p>
          </div>

          <article className="message is-info">
            <div className="message-body">
              <p className="subtitle">
                みなさんのアイデアと技術を求めています！
              </p>
              <p>
                名古屋大学の授業をインターネット上で紹介するサイト、「名大の授業」は、
                現役の名大生である名古屋大学OCWサポートスタッフによりつくられています。現在、「名大の授業」の制作にご協力いただける学生のみなさんを募集しています。
              </p>
            </div>
          </article>

          <h2 className="has-text-weight-semibold is-size-5-mobile is-size-4-tablet is-size-3-widescreen is-h2">
            OCWサポートスタッフについて
          </h2>
          <div className="column">
            <p>
              2024年5月現在で、学部1年生から博士後期課程にわたる約20名の学生がサポートスタッフとして活動しています。ウェブ技術に詳しい学生だけでなく、法律に詳しい学生、映像やデザインに興味のある学生、英語によく慣れている学生など、多種多様な学生が集まっています。
              <br />
              <br />
              「名大の授業」は名古屋大学の公式プロジェクトです。名古屋大学の教員や、事務職員、技術職員の方とやりとりをしながら仕事を進めて行きます。例えば、教員の方に自分の授業についてのインタビューを行って、授業についての思い入れを伺うといったことがあります。このように、普段の講義を受講したり、研究指導を受けたりするのとは、また一味違った大学の一面を知ることができます。この仕事の面白い点だと思います。
              <br />
              <br />
              また、この「名大の授業」を作るためには、実際のデータ入力だけではなく、公開教材の権利処理、作業を円滑に進めるためのシステム開発、英語への翻訳、全体としてのプロジェクトマネージメントなど、多くの側面があります。実社会では、プロジェクトの中で一人一人が自分の役割を果たすことが求められます。OCWサポートスタッフとしての経験は、将来的に民間企業で働いたり、研究をしたりする時の基礎的な力になるのではないかと思っています。
              <br />
              <br />
              あなたもOCWサポートスタッフとして「名大の授業」の制作に加わってみませんか？みなさまのご応募お待ちしています。
              <br />
              <br />
            </p>
          </div>

          <h2 className="has-text-weight-semibold is-size-5-mobile is-size-4-tablet is-size-3-widescreen is-h2">
            募集職種
          </h2>
          <div className="column">
            <div className="content box box-link-hover-shadow">
              <div className="columns is-vcentered is-desktop ">
                <div className="column">
                  <NotActiveH4>
                    グラフィックデザイン（現在募集しておりません）
                  </NotActiveH4>
                  <NotActive>
                    <p>
                      IllustratorやPhotoshop等を用い、Webページのデザインや画像・動画の作成を行います。
                      ページ内のアイコンの作成からホームページ全体のデザインまで幅広くやっています。
                      Illustrator等の経験のない方も歓迎します。(作業の研修を行います)
                    </p>
                  </NotActive>
                </div>
              </div>
            </div>

            <div className="content box box-link-hover-shadow">
              <div className="columns is-vcentered is-desktop ">
                <div className="column">
                  <NotActiveH4>
                    クライアントサイドエンジニア（現在募集しておりません）
                  </NotActiveH4>
                  <NotActive>
                    <p>
                      HTML・CSS・JavaScriptなどを用いたWebページの開発・保守を行います。
                      プログラミング経験のある方歓迎です！
                      もちろん経験のない方でも、研修を実施していますので興味のある方は大歓迎です！
                    </p>
                  </NotActive>
                </div>
              </div>
            </div>

            <div className="content box box-link-hover-shadow">
              <div className="columns is-vcentered is-desktop ">
                <div className="column">
                  <NotActiveH4>
                    サーバーサイドエンジニア（現在募集しておりません）
                  </NotActiveH4>
                  <NotActive>
                    <p>
                      Django等の業務で使用するWebアプリケーションの開発・運用・保守、サーバの保守管理などを幅広く行います。
                      プログラミング経験のある方や情報機器操作、ネットワーク、セキュリティに関する興味がある方は歓迎です。
                      満たさない場合も研修を実施します。
                    </p>
                  </NotActive>
                </div>
              </div>
            </div>

            <div className="content box box-link-hover-shadow">
              <div className="columns is-vcentered is-desktop ">
                <div className="column">
                  <NotActiveH4>
                    著作権作業（現在募集しておりません）
                  </NotActiveH4>
                  <NotActive>
                    <p>
                      教材等を公開する際に、そこに含まれている画像や図が著作権侵害に当たらないかをチェックする仕事です。
                      基本的にはインターネット上で出典を調べて、それを明記するという作業になります。
                      著作権的にグレーなもの（google
                      mapのスクリーンショット、地下鉄の路線図など）については、過去の事例を参照しつつ、学生同士で問題解決に取り組んでいます。
                      知財に関する知識を得つつ、実際にそれを扱うことのできる仕事です。著作権に興味のある方ならだれでも歓迎です。特に法学部の学生を歓迎しています。
                    </p>
                  </NotActive>
                </div>
              </div>
            </div>

            <div className="content box box-link-hover-shadow">
              <div className="columns is-vcentered is-desktop ">
                <div className="column">
                  <NotActiveH4>
                    コンテンツ作成（現在募集しておりません）
                  </NotActiveH4>
                  <NotActive>
                    <p>
                      単なる「講義」に収まらない、学生の幅広い取り組みを特集し記事にまとめています。
                      企画内容の決定から実際の撮影・取材、記事の執筆まで、全て学生同士で進めています。
                      <br />
                      様々な学部の研究室に実際に足を運び、色々な先生・学生さんのお話が聴けることが魅力です。
                      将来メディアに就職したいという方や、取材・撮影などに興味のある方歓迎です。きっと他ではできない体験が待っています！
                    </p>
                  </NotActive>
                </div>
              </div>
            </div>
            <br />
          </div>
          <h2 className="has-text-weight-semibold is-size-5-mobile is-size-4-tablet is-size-3-widescreen is-h2">
            応募連絡先
          </h2>
          <div className="column">
            <p>
              <font color="gray">
                メールアドレス: nuocw-inquiry[at]media.nagoya-u.ac.jp
                <br />
                ※ご送信の際は [at]を@に置き換えてください.
                <br />
                ※ご応募の際は希望する職種を明記して下さい.
              </font>
              <br />
              ※現在募集を停止しております.
            </p>
            <br />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;

const NotActive = styled.div`
  color: darkgray;
`;

// h4タグに直接スタイルを適用できなかったので、color以外に、sassのh4の共通のスタイルの定義を追加
const NotActiveH4 = styled.div`
  font-size: 1.25em;
  margin-bottom: 0.8em;
  font-weight: 600;
  color: darkgray;
  line-height: 1.125;
`;

const WorkingHour = styled.ul`
  list-style-type: disc;
  margin-left: 24px;
  text-align: left;
`;

const FixedWidthSpan = styled.span`
  width: 17em;
  display: inline-block;
`;
