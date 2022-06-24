import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import ProductPage from './components/ProductPage';
import ReviewList from './components/ReviewList';
import Signup from './components/Signup'
import Navbar from './components/NavBar'
import ReviewEdit from './components/ReviewEdit';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ReviewList />} />
        <Route path="/reviews/:id" element={<ReviewEdit />} />
      </Routes>
   </>

  )
}

export default App;
