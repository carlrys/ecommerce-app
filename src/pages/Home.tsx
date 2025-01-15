import React from 'react';
import NavBar from '../components/NavBar';
import ProductGrid from '../components/ProductGrid';
import Feature from '../components/Feature';
import ProductsCarousel from '../components/ProductsCarousel';
import Categories from '../components/Services';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Feature />
      <ProductsCarousel />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;



