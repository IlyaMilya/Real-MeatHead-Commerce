import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import ProductPage from './components/ProductPage';
import ReviewList from './components/ReviewList';
import NavBar from './components/NavBar'

function App() {
  return (
  <>
   <NavBar/>
   <Routes>
    <Route exact path="/" element={<ProductPage />} />
    <Route exact path="/login" element={<Login />} />
    <Route path="/products/:id" element={<ReviewList />} />
   </Routes>
  </> 
  )
}

export default App;
