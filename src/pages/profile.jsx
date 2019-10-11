import React from "react"
import ListItem from "../components/list-item"

const contents = [
  {
    term: "屋号",
    description: "だるまRefactoring",
    listItems: [],
  },
  {
    term: "名前",
    description: "青木 美将",
    listItems: [],
  },
  {
    term: "年齢",
    description: "1979年生まれ",
    listItems: [],
  },
  {
    term: "言語/技術",
    description:
      "Swift, Kotlin, C#, Java, ReactNative, React, TypeScript, JavaScript, " +
      "Ruby, ASP.Net, Ruby on Rails, etc...",
    listItems: [],
  },
  {
    term: "プログラミング時に重視していること",
    description: "",
    listItems: [
      { feature: "オブジェクト指向", descriptions: [] },
      { feature: "読みやすく意図が伝わりやすいコード", descriptions: [] },
      { feature: "DRY、KISS、YAGNIなどの各種原則", descriptions: [] },
    ],
  },
  {
    term: "主な資格",
    description: "",
    listItems: [
      {
        feature: "情報処理技術者試験",
        descriptions: [
          "システムアーキテクト",
          "データベーススペシャリスト",
          "第二種情報処理技術者",
        ],
      },
      {
        feature: "Ruby Association Certified Ruby Programmer Gold version 2.1",
        descriptions: [],
      },
    ],
  },
  {
    term: "業務経歴",
    description: "",
    listItems: [
      {
        feature: "官公庁向けクライアント/サーバシステム開発",
        descriptions: ["主にテスタ", "結合テスト"],
      },
      {
        feature: "官公庁向けDBシステム開発",
        descriptions: ["PG, テスタ", "VB6, Oracle 8i", "実装、単体テスト"],
      },
      {
        feature: "官公庁向けクライアント/サーバシステムシステム開発",
        descriptions: [
          "SE, PG, テスタ",
          "VB6, VC++, C/C++, HP/UX",
          "改善提案、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築",
        ],
      },
      {
        feature: "自動車メーカーのHP2件、証券会社のHP1件のヘルプデスク",
        descriptions: [
          "ヘルプデスク",
          "PHP",
          "顧客からの問い合わせ対応、不具合調査",
        ],
      },
      {
        feature: "通信会社向け回線管理DBシステム",
        descriptions: [
          "PM, SE, PG, テスタ",
          "VB.Net, SQL Server",
          "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守",
        ],
      },
      {
        feature: "繊維製品検査結果管理Webシステム",
        descriptions: [
          "PM, SE, PG, テスタ",
          "VB.Net, ASP.Net, SQL Server",
          "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守",
        ],
      },
      {
        feature: "通信会社の販管費管理ツール",
        descriptions: [
          "PM, SE, PG, テスタ",
          "VB.Net, SQL Server",
          "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守",
        ],
      },
      {
        feature: "不動産会社向け物件管理Webシステム",
        descriptions: [
          "PM, SE, PG, テスタ",
          "Python, Tornado",
          "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築",
        ],
      },
      {
        feature: "通信会社向け回線管理Webシステム",
        descriptions: [
          "PM, SE, PG, テスタ",
          "C#, ASP.Net, SQL Server, jQuery",
          "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守",
        ],
      },
      {
        feature: "通信会社向け問い合わせ管理Webシステム",
        descriptions: [
          "PM, SE, PG, テスタ",
          "C#, ASP.Net, SQL Server, Angular JS",
          "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守",
        ],
      },
      {
        feature: "鉄道会社向け点検結果記録タブレットアプリ",
        descriptions: ["PG", "Objective-C, iOS", "実装、単体テスト"],
      },
      {
        feature: "ライトアップ用スマホアプリ",
        descriptions: [
          "SE, PG, テスタ",
          "Swift, Kotlin, iOS, Android, Ruby, Ruby on Rails, Sinatra, Redis, nginx, Docker",
          "要件定義、設計、実装、単体/結合テスト、保守",
        ],
      },
      {
        feature: "薬品レビュー結果登録タブレットアプリ",
        descriptions: ["PG", "Swift, iOS", "実装、単体テスト"],
      },
      {
        feature: "ホテル用スマートキーアプリ",
        descriptions: ["PG", "Swift, iOS", "実装、単体テスト"],
      },
      {
        feature: "展示会用スマホアプリ",
        descriptions: [
          "SE, PG, テスタ",
          "Swift, iOS, Java, Android, C#, ASP.Net MVC, SQL Server, Push通知",
          "要件定義、設計、実装、単体/結合テスト、サーバ環境構築、リリース、保守",
        ],
      },
      {
        feature: "実験動物管理タブレットアプリ",
        descriptions: [
          "PG, テスタ",
          "Swift, iOS, Swagger, Docker",
          "実装、単体/結合テスト",
        ],
      },
      {
        feature: "キャンプ場予約Webシステム",
        descriptions: [
          "PG, テスタ",
          "PHP, Cake PHP, MySQL, Docker",
          "実装、単体/結合テスト",
        ],
      },
      {
        feature: "証券会社向けFXスマホアプリ",
        descriptions: [
          "PG, テスタ",
          "Swift, iOS, Kotlin, Android",
          "実装、単体テスト",
        ],
      },
      {
        feature: "中古車情報スマホアプリ",
        descriptions: [
          "PG, テスタ",
          "Swift, iOS, Kotlin, Android, Firebase, AppsFlyer, SmartBeat, Push通知",
          "実装、単体テスト",
        ],
      },
    ],
  },
]

const Profile = () => (
  <section>
    <h2>プロフィール</h2>
    <dl>
      {contents.map((c, i) => (
        <Definition key={i} {...c} />
      ))}
    </dl>
  </section>
)

const Definition = props => (
  <React.Fragment>
    <dt>{props.term}</dt>
    <dd>
      <span>{props.description}</span>
      {props.listItems.length > 0 ? (
        <ul>
          {props.listItems.map((li, i) => (
            <ListItem key={i} {...li} />
          ))}
        </ul>
      ) : null}
    </dd>
  </React.Fragment>
)

export default Profile
