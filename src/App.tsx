import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductsPage from './pages/ProductsPage';

const App: React.FC = () => {
  return(
      <Router>
          <div>
            <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />}/>
              <Route path="/card" element={<Cart />}/>
            </Routes>
          </div>
      </Router>
  )
}

export default App;
