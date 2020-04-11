import React, { useState } from "react"

const Product = ({ skus, product }) => {
  const stripe = window.Stripe("pk_test_Uy62KYHauLlGjCia3GegHLHc00SnBz1Xr0")
  const [sku, setSku] = useState(skus[0].node.id)

  const placeOrder = sku => {
    stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <article>
      <img src="https://picsum.photos/340/400" alt="T-Shirt" />
      <h3>{product.name}</h3>
      <select
        defaultValue={sku}
        name=""
        id=""
        onChange={e => setSku(e.target.value)}
      >
        {skus.map(edge => (
          <option value={edge.node.id} key={edge.node.id}>
            {edge.node.attributes.name}
          </option>
        ))}
      </select>
      <button onClick={() => placeOrder(sku)}>Buy Me</button>
    </article>
  )
}

export default Product
