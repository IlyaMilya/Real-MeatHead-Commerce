import Login from './components/Login' ;
import Signup from './components/Signup' ;
import ProductPage from './components/ProductPage';
import { Route, Routes } from 'react-router-dom' ;
import './App.css';

function App() {
  return (
   
    <Routes>
      <Route  exact path= "/" element= {<Login />} />
      <Route exact path="/signup" element = {<Signup />} />
      <Route exact path="/productPage" element= {<ProductPage />} />
      </Routes>
  
  )
}

export default App;
