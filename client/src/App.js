import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import ProductPage from './components/ProductPage';

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<ProductPage />} />
    <Route exact path="/login" element={<Login />} />

   </Routes>
  )
}

export default App;
