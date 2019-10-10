import React from "react"
import Section from "../components/section"

const contents = [
  {
    feature:
      "請負契約はお互いにリスクが高いと思われるため、準委任契約でのお仕事を探しています",
    descriptions: [
      "数時間で終わるような超小規模の案件であれば請負契約も可能です",
    ],
  },
]

const Contract = () => <Section title="契約形態" contents={contents} />

export default Contract
