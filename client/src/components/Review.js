import React, { useState, useEffect } from 'react'

function Review({product_id}) {
    console.log("REVIEW IS RERENDERING")
    const [products, setProducts] = useState({reviews: [{description: 'placeholder'}]});
    // const [products, setProducts] = useState({reviews: []});
    useEffect(() => {
    fetch(`/products/${product_id}`)
    .then(response => response.json())
    .then(products => {
      console.log(products)
      setProducts(products)
    })
    .catch(error => console.log(error))
},[])

  return (
    <div>
        <h1>sledkjflsdkjf</h1>
        <p>{products.reviews[0].description}</p>
    </div>
  )
}

export default Review;