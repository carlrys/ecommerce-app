import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductList  from './pages/ProductList';
import Cart from './pages/Cart';

const App: React.FC = () => {
  return(
    <Router>
      <div className="container mt-4">
      <h1 className="text-center">My Ecommerce App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />}/>
        <Route path="/card" element={<Cart />}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App;
