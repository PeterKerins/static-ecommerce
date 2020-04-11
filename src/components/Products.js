import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Product from "./product"

const PRODUCTS_QUERY = graphql`
  query AllProducts {
    allStripeSku {
      edges {
        node {
          product {
            name
            id
          }
          id
          attributes {
            name
          }
          price
        }
      }
    }
    allStripeProduct {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`
const Products = () => {
  const { allStripeSku, allStripeProduct } = useStaticQuery(PRODUCTS_QUERY)
  console.log(allStripeProduct)
  return (
    <div>
      <h1>Cool Store</h1>
      {allStripeProduct.edges.map(product => {
        const skus = allStripeSku.edges.filter(
          sku => sku.node.product.id === product.node.id
        )
        return (
          <Product skus={skus} product={product.node} key={product.node.id} />
        )
      })}
    </div>
  )
}
export default Products
