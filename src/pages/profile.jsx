import React from "react"

const Profile = () => (
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
      <dt>プログラミング時に重視していること</dt>
      <dd>
        <ul>
          <li>オブジェクト指向</li>
          <li>読みやすく意図が伝わりやすいコード</li>
          <li>DRY、KISS、YAGNIなどの各種原則</li>
        </ul>
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
                Swift, iOS, Java, Android, C#, ASP.Net MVC, SQL Server, Push通知
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
)

export default Profile
