import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Products from "../components/products"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>New Store</h1>
      <div>
        <Products />
      </div>
    </Layout>
  )
}

export default IndexPage
