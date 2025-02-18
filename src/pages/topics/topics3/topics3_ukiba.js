import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const topics3_ukiba = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"浮葉先生インタビュー"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics3/topics3_kanban.png"
        )}`}
      />
      <div className="container column is-11-desktop">
        <section>
          <div className="container column is-11-desktop">
            <div className="content columns is-vcentered">
              <TitleTopics3 className="has-text-weight-bold">
                浮葉先生インタビュー
              </TitleTopics3>
            </div>

            <div className="content column is-full">
              「留学生と日本〜異文化を通しての日本理解〜」を担当された浮葉先生に以下のことをお聞きしました。
              <br />
              ①　授業の中で印象に残っていること・良かったことについて
              <br />
              ②　授業で楽しかったこと、大変だったことなどについて
              <br />
              ③　実留学生と日本人の交流という「体験」によって学べることについて
              <br />
            </div>

            <div className="content">
              <Q className="has-text-weight-semibold">
                授業の中で印象に残っていること・良かったことは何ですか?
              </Q>

              <div className="container column ">
                <p className="column">
                  留学生と日本人の学生たちがだんだん仲良くなっていくことですね。授業時間以外にも日本人と留学生は会っています。
                  発表の準備などで集まらざるを得ないようにカリキュラムを組んでいますから(笑)その他にも、飲みに行ったりして交流しているようです。
                </p>
              </div>

              <div className=" columns is-vcentered">
                <div className="column is-4 image">
                  <img
                    src={withPrefix(
                      "/img/topics/topics3/thumbnails/ukiba1.png"
                    )}
                    alt="t3_ukiba"
                  />
                </div>
                <div className="is-8">
                  <Q className="has-text-weight-semibold">
                    普段の学生生活だけでは、なかなか留学生と仲良くなる機会はないですよね。
                  </Q>

                  <div className="container column ">
                    <p className="column">
                      ええ、名古屋大学には留学生はたくさんいますが、キャンパス内を見ているとそこまで日本人と留学生は交流していない。
                      ですが、この授業で留学生と仲良くなって、休みの時にその留学生の故郷に遊びに行くことなどができたら楽しいですよね。
                    </p>
                  </div>
                  <Q className="has-text-weight-semibold">はい。</Q>

                  <div className="container column ">
                    <p className="column">
                      そのほかにも、学生達も勉強になったと言っています。
                      この授業では、日本文化を留学生に説明することがいかに難しいか、自分たちが日本文化についていかに知らないかということを体験できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content">
              <Q className="has-text-weight-semibold">
                授業で楽しかったこと、大変だったことなどはありますか?
              </Q>
              <div className="container column ">
                <p className="column">
                  授業に参加する留学生は日本に来たばかりの人が多いので、日本人と話すだけで楽しそうですね。
                  日本人も初めは緊張していますが、回を重ねるごとに留学生と話すことに慣れてくる。
                  それを見るのが楽しいです。また、年によって様々な意見や発表の方法が出るため、それも面白い。
                </p>
              </div>

              <Q className="has-text-weight-semibold">
                授業では学生主体なんですね。
              </Q>
              <div className="container column ">
                <p className="column">
                  私は生徒のやっていることに下手に口出しをしないようにしています。わざと学生に失敗させる。
                  出来なかったことこそが大事だと思います。授業の後にはフィードバック(授業の振り返り)をして、出来なかったことをいかに出来るようにするかをみんなで考えるようにしています。
                </p>
              </div>
            </div>

            <div className="content columns is-vcentered">
              <div className="column is-8">
                <Q className="has-text-weight-semibold">
                  留学生と日本人の交流という「体験」によって学べることは何ですか?
                </Q>
                <div className="container column ">
                  <p className="column">
                    この授業では、違う価値観を持った人と話すことができ、いろんな意見と出会うことができます。
                    これからの人生では必ず違う考え方に出会うことが起こります。違う考え方とぶつかったときに、どうするか。
                    それをシュミレーションし体験することによって、解決策を考え、学ぶことができます。
                  </p>
                </div>

                <Q className="has-text-weight-semibold">深いですね。</Q>
                <div className="container column ">
                  <p className="column">
                    留学に行って帰ってきた人の話を授業で聞く、ということも行っています。
                    この授業を受けた後に留学に行く人も多いですね。ぜひ学生のみなさんには大学のうちに留学に挑戦してほしいと思います。
                    名古屋大学には海外に姉妹校も多く、今は留学に行こうと思えば行ける時代。留学に行った人を見ていると、大きく変わりたくましくなって帰ってきます。
                    留学生センターでは、留学の相談以外にも、留学生とコーヒーを飲みながら話すなどのイベントも行っています。ぜひ活用してください。
                  </p>
                </div>
              </div>
              <div className="column is-4 image">
                <img
                  src={withPrefix("/img/topics/topics3/thumbnails/ukiba2.png")}
                  alt="t3_ukiba2"
                />
              </div>
            </div>
            <p className="has-text-right">(インタビュー日：2010年10月15日)</p>
          </div>
        </section>

        <section className="section columns is-centered-widescreen">
          <div className="container column is-10-widescreen ">
            <div className="content columns is-vcentered is-multiline">
              <Arrow>他のインタビューを見る </Arrow>
              <ul className="column is-12-desktop is-12-touch margin-top-0 has-text-weight-bold">
                <StyledLink to="/topics/topics3/">◆TOPICS3トップへ</StyledLink>
                <br />
                <br />
                ◆先生へのインタビュー
                <div className="container column is-11-desktop is-11-touch">
                  <li>
                    <StyledLink to="/topics/topics3/topics3_senyo">
                      千代先生へのインタビュー
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics3/topics3_sato">
                      佐藤先生へのインタビュー
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/topics/topics2/topics2_arita">
                      有田先生へのインタビュー(TOPICS No.2)
                    </StyledLink>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default topics3_ukiba;

/*タイトル装飾 ここから*/
const TitleTopics3 = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  border-left: solid 5px #006e4f;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #006e4f;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #006e4f;
  }
`;
/*タイトル装飾 ここまで*/

/*左に横線見出しデザイン　はじめ*/
const Q = styled.div`
  position: relative;
  margin-left: 30px;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -30px;
    width: 25px;
    border-top: solid 1px black;
  }
`;
/*左に横線見出しデザイン　終わり*/

/*矢印型見出し　はじめ*/
const Arrow = styled.div`
  position: relative;
  padding-left: 30px;
  font-size: 25px;
  &:before {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 0;
    width: 0;
    height: 0;
    border: none;
    border-left: solid 20px transparent;
    border-bottom: solid 20px #006e4f;
  }
  &:after {
    position: absolute;
    content: "";
    bottom: -3px;
    left: 10px;
    width: 100%;
    border-bottom: solid 5px #006e4f;
  }
`;
/*矢印型見出し　終わり*/

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: black;
  }
`;
