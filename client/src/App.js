import './App.css';
import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import ProductPage from './components/ProductPage';
import ReviewList from './components/ReviewList';
import Signup from './components/Signup'
import Navbar from './components/NavBar'

function App() {

  const [user, setUser] = useState(false) 



  const authorization = () => {
    const request = async () => {
      const req = await fetch('/auth')
      const res = await req.json()
      setUser(res)
      console.log(user)
    }
  }

  useEffect(()=>{ 
  authorization()

  },[])



  

  
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
