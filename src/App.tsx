import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductList  from './pages/ProductList';
import Cart from './pages/Cart';
import Login from './pages/Login';

const App: React.FC = () => {
  return(
      <Router>
          <div>
            <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />}/>
              <Route path="/card" element={<Cart />}/>
            </Routes>
          </div>
      </Router>
  )
}

export default App;
