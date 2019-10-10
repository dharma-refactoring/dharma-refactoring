import React from "react"
import Section from "../components/section"

const contents = [
  {
    feature:
      "島根県在住で、稼働も夜間になるため基本的にリモートワークとさせて頂きます",
    descriptions: [
      "打ち合わせはGoogleハングアウト等によるTV会議を希望しますが、直接の顔合わせが必要な場合は出張旅費を出して頂ければ伺います",
    ],
  },
]

const Place = () => <Section title="作業場所" contents={contents} />

export default Place
