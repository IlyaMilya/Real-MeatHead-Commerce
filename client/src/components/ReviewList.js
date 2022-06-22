import React, {useState, useEffect} from 'react'
import Review from './Review'
import {useParams} from "react-router-dom"

function ReviewList({test}) {

  let {id} = useParams();
    //console.log(test, "test reviewlist")
    // const [products, setProducts] = useState([]);
    //   const [search, setSearch] = useState("");
    //console.log(`REVIEWLISTIS RENDERIIIIING ${products}, ${id}`)
      // useEffect(() => {
      //   fetch(`/products/${id}`)
      //   .then(response => response.json())
      //   .then(products => {
      //     console.log(products)
      //     setProducts(products)
      //   })
      //   .catch(error => console.log(error))
      // })

      // fetch(`/products/${id}`)
      //   .then(response => response.json())
      //   .then(products => {
      //     console.log(products)
      //     setProducts(products)
      //   })
      //   .catch(error => console.log(error))





  return (
    <>
    <Review product_id={id}/>
    </>
  )
}

export default ReviewList;