import React from "react"
import Section from "../components/section"

const contents = [
  {
    feature: "スマートフォンアプリ開発",
    descriptions: [
      "iOS, Android 両方対応できます",
      "ReactNativeなどのクロスプラットフォームのフレームワークも経験あります",
    ],
  },
  {
    feature: "Webシステム開発",
    descriptions: [
      "ASP.NetやRuby on Railsなど様々なフレームワークの経験があります",
    ],
  },
  {
    feature: "レガシーコード改善",
    descriptions: [
      "テストコードを書いてリファクタリングします",
      "目を覆いたくなるようなスパゲティコード、長大な神クラスなどに何度も立ち向かってきました...",
    ],
  },
]

const Services = () => <Section title="サービス内容" contents={contents} />

export default Services
