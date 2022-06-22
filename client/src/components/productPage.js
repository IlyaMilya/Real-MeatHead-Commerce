
import React, {useState, useEffect} from "react";
import ProductList from "./ProductList";
// import Search from "./Search";

function ProductPage() {

  const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/products")
    .then(response => response.json())
    .then(products => setProducts(products))
  },[])

//   function handleForm(newPlant) {
//     const newPlantArray = [...plants, newPlant]
//     setPlants(newPlantArray)
//   }

//   const displayNewPlants = plants.filter((plant) => {
//     return plant.name.toLowerCase().includes(search.toLowerCase())
//   })

//   function handleUpdatedPlants(id) {
//     const updatedArray = plants.filter((plant) => plant.id !== id)
//     setPlants(updatedArray)
//   }

  return (
    <main>
      {/* <Search search={search} onSearch={setSearch}/> */}
      <ProductList products={products}/>
    </main>
  );
}

export default ProductPage;