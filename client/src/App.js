import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import ProductPage from './components/ProductPage';
import ReviewList from './components/ReviewList';
import Signup from './components/Signup'
import Navbar from './components/NavBar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/productpage" element={<ProductPage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/products/:id" element={<ReviewList />} />
      </Routes>
   </>

  )
}

export default App;
