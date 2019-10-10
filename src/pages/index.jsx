import React from "react"

import Layout from "../components/layout"
import EyeCatch from "../components/eye-catch"
import SEO from "../components/seo"
import Services from "./services"
import Contract from "./contract"
import Pricing from "./pricing"
import Schedule from "./schedule"
import Place from "./plcace"
import Profile from "./profile"

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
    <Services />
    <Contract />
    <Pricing />
    <Schedule />
    <Place />
    <Profile />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <EyeCatch />
    </div>
  </Layout>
)

export default IndexPage
