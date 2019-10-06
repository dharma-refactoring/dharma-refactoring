import React from "react"

import Layout from "../components/layout"
import EyeCatch from "../components/eye-catch"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <p>
        現在は本業の合間に副業でフリーランスエンジニアとして活動しています。
      </p>
      <p>
        スマートフォンアプリやWebシステムを始めとしたシステム開発をお手伝いします。
      </p>
      <p>
        お仕事の依頼やその他ご質問等ありましたら
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSelHIapu0fFtcuzPWgp2eztalMAzCauIabd1jmexdFZKDw1cw/viewform?usp=sf_link">
          こちらフォーム
        </a>
        よりお問い合わせください。
      </p>
    </section>
    <section>
      <h2>
        <a href="#service" name="service" className="anchor">
          サービス内容
        </a>
      </h2>
      <ul>
        <li>
          スマートフォンアプリ開発
          <ul>
            <li>iOS, Android 両方対応できます</li>
            <li>
              ReactNativeなどのクロスプラットフォームのフレームワークも経験あります
            </li>
          </ul>
        </li>
        <li>
          Webシステム開発
          <ul>
            <li>
              ASP.NetやRuby on Railsなど様々なフレームワークの経験があります
            </li>
          </ul>
        </li>
        <li>
          レガシーコード改善
          <ul>
            <li>テストコードを書いてリファクタリングします</li>
            <li>
              目を覆いたくなるようなスパゲティコード、長大な神クラスなどに何度も立ち向かってきました...
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section>
      <h2>
        <a href="#contract" name="contract" className="anchor">
          契約形態
        </a>
      </h2>
      <ul>
        <li>
          請負契約はお互いにリスクが高いと思われるため、準委任契約でのお仕事を探しています
          <ul>
            <li>
              数時間で終わるような超小規模の案件であれば請負契約も可能です
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section>
      <h2>
        <a href="#pricing" name="pricing" className="anchor">
          価格設定
        </a>
      </h2>
      <ul>
        <li>1時間につき1万円以上を基準としています</li>
      </ul>
    </section>
    <section>
      <h2>
        <a href="#schedule" name="schedule" className="anchor">
          稼働時間
        </a>
      </h2>
      <ul>
        <li>
          現在は副業としてフリーランス活動を行っているため、1日2時間程度(夜間)の稼働です
        </li>
      </ul>
    </section>
    <section>
      <a href="#place" name="place" className="anchor">
        作業場所
      </a>
      <ul>
        <li>
          島根県在住で、稼働も夜間になるため基本的にリモートワークとさせて頂きます
        </li>
        <li>
          打ち合わせはGoogleハングアウト等によるTV会議を希望しますが、直接の顔合わせが必要な場合は出張旅費を出して頂ければ伺います
        </li>
      </ul>
    </section>
    <section>
      <h2>
        <a href="#about-me" name="about-me" className="anchor">
          自己紹介
        </a>
      </h2>
      <dl>
        <dt>屋号</dt>
        <dd>だるまRefactoring</dd>
        <dt>名前</dt>
        <dd>青木 美将</dd>
        <dt>年齢</dt>
        <dd>1979年生まれ</dd>
        <dt>言語/技術</dt>
        <dd>
          Swift, Kotlin, C#, Java, ReactNative, React, TypeScript, JavaScript,
          Ruby, etc...
        </dd>
        <dt>主な資格</dt>
        <dd>
          <ul>
            <li>
              情報処理技術者試験
              <ul>
                <li>システムアーキテクト</li>
                <li>データベーススペシャリスト</li>
                <li>第二種情報処理技術者</li>
              </ul>
            </li>
            <li>Ruby Association Certified Ruby Programmer Gold version 2.1</li>
          </ul>
        </dd>
        <dt>業務経歴</dt>
        <dd>
          <ul>
            <li>
              官公庁向けクライアント/サーバシステム開発
              <ul>
                <li>主にテスタ</li>
                <li>結合テスト</li>
              </ul>
            </li>
            <li>
              官公庁向けDBシステム開発
              <ul>
                <li>PG, テスタ</li>
                <li>VB6, Oracle 8i</li>
                <li>実装、単体テスト</li>
              </ul>
            </li>
            <li>
              官公庁向けクライアント/サーバシステムシステム開発
              <ul>
                <li>SE, PG, テスタ</li>
                <li>VB6, VC++, C/C++, HP/UX</li>
                <li>
                  改善提案、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築
                </li>
              </ul>
            </li>
            <li>
              自動車メーカーのHP2件、証券会社のHP1件のヘルプデスク
              <ul>
                <li>ヘルプデスク</li>
                <li>PHP</li>
                <li>顧客からの問い合わせ対応、不具合調査</li>
              </ul>
            </li>
            <li>
              通信会社向け回線管理DBシステム
              <ul>
                <li>PM, SE, PG, テスタ</li>
                <li>VB.Net, SQL Server</li>
                <li>
                  要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守
                </li>
              </ul>
            </li>
            <li>
              繊維製品検査結果管理Webシステム
              <ul>
                <li>PM, SE, PG, テスタ</li>
                <li>VB.Net, ASP.Net, SQL Server</li>
                <li>
                  要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守
                </li>
              </ul>
            </li>
            <li>
              通信会社の販管費管理ツール
              <ul>
                <li>PM, SE, PG, テスタ</li>
                <li>VB.Net, SQL Server</li>
                <li>
                  要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守
                </li>
              </ul>
            </li>
            <li>
              不動産会社向け物件管理Webシステム
              <ul>
                <li>PM, SE, PG, テスタ</li>
                <li>Python, Tornado</li>
                <li>
                  要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築
                </li>
              </ul>
            </li>
            <li>
              通信会社向け回線管理Webシステム
              <ul>
                <li>PM, SE, PG, テスタ</li>
                <li>C#, ASP.Net, SQL Server, jQuery</li>
                <li>
                  要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守
                </li>
              </ul>
            </li>
            <li>
              通信会社向け問い合わせ管理Webシステム
              <ul>
                <li>PM, SE, PG, テスタ</li>
                <li>C#, ASP.Net, SQL Server, Angular JS</li>
                <li>
                  要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守
                </li>
              </ul>
            </li>
            <li>
              鉄道会社向け点検結果記録タブレットアプリ
              <ul>
                <li>PG</li>
                <li>Objective-C, iOS</li>
                <li>実装、単体テスト</li>
              </ul>
            </li>
            <li>
              ライトアップ用スマホアプリ
              <ul>
                <li>SE, PG, テスタ</li>
                <li>
                  Swift, Kotlin, iOS, Android, Ruby, Ruby on Rails, Sinatra,
                  Redis, nginx, Docker
                </li>
                <li>要件定義、設計、実装、単体/結合テスト、保守</li>
              </ul>
            </li>
            <li>
              薬品レビュー結果登録タブレットアプリ
              <ul>
                <li>PG</li>
                <li>Swift, iOS</li>
                <li>実装、単体テスト</li>
              </ul>
            </li>
            <li>
              ホテル用スマートキーアプリ
              <ul>
                <li>PG</li>
                <li>Swift, iOS</li>
                <li>実装、単体テスト</li>
              </ul>
            </li>
            <li>
              展示会用スマホアプリ
              <ul>
                <li>SE, PG, テスタ</li>
                <li>
                  Swift, iOS, Java, Android, C#, ASP.Net MVC, SQL Server,
                  Push通知
                </li>
                <li>
                  要件定義、設計、実装、単体/結合テスト、サーバ環境構築、リリース、保守
                </li>
              </ul>
            </li>
            <li>
              実験動物管理タブレットアプリ
              <ul>
                <li>PG, テスタ</li>
                <li>Swift, iOS, Swagger, Docker</li>
                <li>実装、単体/結合テスト</li>
              </ul>
            </li>
            <li>
              キャンプ場予約Webシステム
              <ul>
                <li>PG, テスタ</li>
                <li>PHP, Cake PHP, MySQL, Docker</li>
                <li>実装、単体/結合テスト</li>
              </ul>
            </li>
            <li>
              証券会社向けFXスマホアプリ
              <ul>
                <li>PG, テスタ</li>
                <li>Swift, iOS, Kotlin, Android</li>
                <li>実装、単体テスト</li>
              </ul>
            </li>
            <li>
              中古車情報スマホアプリ
              <ul>
                <li>PG, テスタ</li>
                <li>
                  Swift, iOS, Kotlin, Android, Firebase, AppsFlyer, SmartBeat,
                  Push通知
                </li>
                <li>実装、単体テスト</li>
              </ul>
            </li>
          </ul>
        </dd>
      </dl>
    </section>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <EyeCatch />
    </div>
  </Layout>
)

export default IndexPage
