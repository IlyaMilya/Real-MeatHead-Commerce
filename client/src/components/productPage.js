import React, {useState, useEffect} from "react";
import ProductList from "./ProductList";


function ProductPage({userdata}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
    .then(response => response.json())
    .then(products => setProducts(() => products))
    .catch(error => console.log(error))
  },[])

  return (

    <main>
      <ProductList products={products} userdata= {userdata}/>
    </main>

  );
}

export default ProductPage;