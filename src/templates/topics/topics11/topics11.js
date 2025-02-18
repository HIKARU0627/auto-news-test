import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics11 = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"情報学部特集"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics11/top/TOPICS11_kanban_20220414.png"
        )}`}
      />
      <article className="columns">
        <div className="container column is-9-desktop">
          {/* containerがないと左寄せになる */}
          <section>
            <Kanban
              src={withPrefix(
                "/img/topics/topics11/top/TOPICS11_kanban_20220414.png"
              )}
            />
            <Answer className="has-text-weight-semibold">
              今回の TOPICS
              では名古屋大学に新規に開設された「情報学部」の特集を行いました。
              <br />
              今回は
              情報学研究科（情報学部）の二つの専攻、『社会情報学専攻』『知能システム学専攻』について、それぞれを代表する先生方（順に久木田先生、武田先生）に取材をしてきました。
              <br />
              情報学部とは何なのか、三つの学科の違いはどこにあるのか……。長年続いた謎が本日明らかにされます！
              <br />
              <br />
            </Answer>
          </section>
          <div className="mx-2 is-mobile">
            <section className="columns is-centered is-desktop">
              <div className="column has-text-left">
                <TitleKukita className="has-text-weight-bold">
                  戸田山・久木田研究室（社会情報学専攻）
                </TitleKukita>
                <Answer className="has-text-weight-semibold">
                  「ロボットに倫理的判断をさせることが私たち人間にどのような影響を与えるのか」と考えたことはありますか？
                  名古屋大学 大学院情報学研究科 社会情報学専攻
                  科学哲学研究室（戸田山・久木田研究室）では「技術哲学・技術倫理」の研究が行われています。
                  人工知能の進歩が目覚ましい現代だからこそ問われる「倫理」や「道徳」、これらを研究している科学哲学研究室とはどんなところなのか、取材しました！
                </Answer>

                <div className="is-hidden-touch">
                  <Link to="/topics/topics11/topics11_kukita">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/kukita_PC.png"
                      )}
                    />
                  </Link>
                  <Link to="/topics/topics11/topics11_kukita_stu">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/kukita_stu_PC.png"
                      )}
                    />
                  </Link>
                </div>

                <div className="is-hidden-desktop">
                  <Link to="/topics/topics11/topics11_kukita">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/Kukita_SP.png"
                      )}
                    />
                  </Link>
                  <Link to="/topics/topics11/topics11_kukita_stu">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/Kukita_stu_SP.png"
                      )}
                    />
                  </Link>
                </div>
              </div>
            </section>

            <section className="columns is-centered is-desktop is-11-desktop">
              <div className="column has-text-left">
                <TitleTakeda className="has-text-weight-bold">
                  武田研究室（知能システム学専攻）
                </TitleTakeda>
                <Answer className="has-text-weight-semibold">
                  「『自動運転』や『AIスピーカ』，『バーチャルリアリティ（VR）』を研究したい！」という方も多いのではないでしょうか？
                  名古屋大学 大学院情報学研究科 知能システム学専攻
                  武田研究室ではこれらを実現するための「信号処理技術」の研究が行われています．
                  その画期的な研究でメディアにもしばしば取り上げられている武田研究室とはどんなところなのか、取材しました！
                  <br />※
                  武田研究室は大学院情報学研究科に所属する研究室ですが，学部は「工学部
                  電気電子情報工学科」に属しています。
                </Answer>

                <div className="is-hidden-touch is-11-desktop">
                  <Link to="/topics/topics11/topics11_takeda">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/takeda_PC.png"
                      )}
                    />
                  </Link>
                  <Link to="/topics/topics11/topics11_ishiguro">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/ishiguro_PC.png"
                      )}
                    />
                  </Link>
                  <Link to="/topics/topics11/topics11_takeuchi">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/takeuchi_PC.png"
                      )}
                    />
                  </Link>
                </div>

                <div className="is-hidden-desktop">
                  <Link to="/topics/topics11/topics11_takeda">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/Takeda_SP.png"
                      )}
                    />
                  </Link>
                  <Link to="/topics/topics11/topics11_ishiguro">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/Ishiguro_SP.png"
                      )}
                    />
                  </Link>
                  <Link to="/topics/topics11/topics11_takeuchi">
                    <Kanban
                      src={withPrefix(
                        "/img/topics/topics11/newsite_pic/Takeuchi_SP.png"
                      )}
                    />
                  </Link>
                </div>
                <br />
                <br />
              </div>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Topics11;

/*タイトル装飾 ここから*/
const TitleKukita = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  border-left: solid 5px #e18862;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #e18862;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #e18862;
  }
`;

const TitleTakeda = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 17px;
  border-left: solid 5px #867aaa;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-left: solid 12px #867aaa;
  }
  &:after {
    content: "";
    width: 100%;
    width: calc(100% + 22px);
    position: absolute;
    bottom: 0px;
    left: -22px;
    border-bottom: solid 5px #867aaa;
  }
`;
/*タイトル装飾 ここまで*/

const Kanban = styled.img`
  width: 100%;
`;

const Answer = styled.div`
  position: relative;
  padding: 10px;
`;
