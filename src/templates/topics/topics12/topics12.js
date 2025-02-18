import React from "react";
import { Link, withPrefix } from "gatsby";
import styled from "styled-components";

import Layout from "@common/Layout/Layout";
import HelmetForOGP from "@common/Helmet/HelmetForOGP";

const Topics12 = () => {
  // const { count } = props;
  return (
    <Layout>
      <HelmetForOGP
        title={"文系ゼミ紹介"}
        category={"Topics"}
        image={`https://ocw.nagoya-u.jp${withPrefix(
          "/img/topics/topics12/top/TOPICS12_kanban_20220414.png"
        )}`}
      />
      <article className="columns">
        <div className="container column is-9-desktop">
          {/* containerがないと左寄せになる */}
          <section>
            <Kanban
              src={withPrefix(
                "/img/topics/topics12/top/TOPICS12_kanban_20220414.png"
              )}
            />
            <Answer className="has-text-weight-semibold">
              みなさんは、文系のゼミで何が行われているか知っていますか？
              <br />
              理系の研究というとイメージできるけれど、文系の学部って、いったい何を研究しているのだろうか......。
              <br />
              その謎を明らかにすべく、私たちは２つの文系ゼミに取材に行ってきました！
              <br />
              今回取り上げるのは、法学部の西井ゼミと経済学部の土井ゼミ。今まで明かされてこなかった「文系の研究」の実態が本日明らかになります！！
            </Answer>
          </section>

          <section className="columns is-centered is-desktop">
            <div className="column has-text-left">
              <TitleNishii className="has-text-weight-bold">
                西井ゼミ ( 法学部 )
              </TitleNishii>
              <Answer className="has-text-weight-semibold">
                知的財産法を研究する法学部の西井ゼミに伺いました。
                <br />
                知的財産法には、「著作権法」や「特許法」が含まれます。音楽の無料ダウンロードって違法？そもそも何でお金を払わなきゃならないの？発明ってなに？ゼミではそんなことを議論しています。
                <br />
                気になる今回のテーマは．．．特許法！！
                和気あいあいとした雰囲気の中にも，真剣に議論に取り組むゼミ生の姿が垣間見られました。判例や学説について熱くディスカッションする西井ゼミにあなたを招待します。
              </Answer>

              <div className="is-hidden-touch">
                <Link to="/topics/topics12/topics12_nishii_sem">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Nishii_sem_PC.png"
                    )}
                  />
                </Link>
                <Link to="/topics/topics12/topics12_nishii_stu">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Nishii_stu_PC.png"
                    )}
                  />
                </Link>
              </div>

              <div className="is-hidden-desktop">
                <Link to="/topics/topics12/topics12_nishii_sem">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Nishii_sem_SP.png"
                    )}
                  />
                </Link>
                <Link to="/topics/topics12/topics12_nishii_stu">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Nishii_stu_SP.png"
                    )}
                  />
                </Link>
              </div>
              <br />
              <br />
            </div>
          </section>

          <section className="columns is-centered is-desktop is-11-desktop">
            <div className="column has-text-left">
              <TitleDoi className="has-text-weight-bold">
                土井ゼミ ( 経済学部 )
              </TitleDoi>
              <Answer className="has-text-weight-semibold">
                国際経済学を専門とする土井先生のゼミにお邪魔しました。
                <br />
                国際経済学と聞くと何だか難しそうな印象を受けますが、今回のテーマは私達の暮らしにとっても身近な携帯電話について。
                <br />
                いわゆる大手携帯キャリアと格安スマホ会社が今後の携帯電話市場においてどのような戦略をとっていくべきか、学生からの発表を起点に白熱した議論が繰り広げられる土井ゼミの様子を徹底取材しました。
              </Answer>

              <div className="is-hidden-touch is-11-desktop">
                <Link to="/topics/topics12/topics12_doi_sem">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Doi_sem_PC.png"
                    )}
                  />
                </Link>
                <Link to="/topics/topics12/topics12_doi_stu">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Doi_stu_PC.png"
                    )}
                  />
                </Link>
                <Link to="/topics/topics12/topics12_doi_pro">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Doi_pro_PC.png"
                    )}
                  />
                </Link>
              </div>

              <div className="is-hidden-desktop">
                <Link to="/topics/topics12/topics12_doi_sem">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Doi_sem_SP.png"
                    )}
                  />
                </Link>
                <Link to="/topics/topics12/topics12_doi_stu">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Doi_stu_SP.png"
                    )}
                  />
                </Link>
                <Link to="/topics/topics12/topics12_doi_pro">
                  <Kanban
                    src={withPrefix(
                      "/img/topics/topics12/banners/Doi_pro_SP.png"
                    )}
                  />
                </Link>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default Topics12;

/*タイトル装飾 ここから*/
const TitleNishii = styled.div`
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 5px;
  background-color: #ffcb9b;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -3px;
    border-left: solid 8px #ff9933;
  }
`;

const TitleDoi = styled.div`
  color: white;
  font-size: 27px;
  padding: 10px;
  position: relative;
  margin-left: 5px;
  background-color: #33a88e;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    bottom: 0px;
    left: -3px;
    border-left: solid 8px #265d21;
  }
`;
/*タイトル装飾 ここまで*/

const Kanban = styled.img`
  width: 100%;
`;

const Answer = styled.div`
  position: relative;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
