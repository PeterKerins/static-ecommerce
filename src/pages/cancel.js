import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Cancel" />
      <h1>Order Cancelled</h1>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
