import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import EyeCatch from "../components/eye-catch"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>🚧このサイトは現在鋭意作成中です🚧</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <EyeCatch />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
