import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ComingSoon from "../components/comingsoon"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ComingSoon></ComingSoon>
  </Layout>
)

export default IndexPage
