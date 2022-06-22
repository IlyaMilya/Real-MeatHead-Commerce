import React, {useState, useEffect} from "react";
import ProductList from "./ProductList";

function ProductPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
    .then(response => response.json())
    .then(products => setProducts(products))
  },[])

  return (
    <>
      <ProductList products={products}/>
    </>
  );
}

export default ProductPage;