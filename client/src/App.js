import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import ProductPage from './components/ProductPage';
import Signup from './components/Signup'
import Navbar from './components/NavBar'

function App() {
  return (
    <div>
    <Navbar />
    
   <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/productpage" element={<ProductPage />} />
    <Route exact path="/signup" element={<Signup/>} />

   </Routes>
   </div>
  )
}

export default App;
