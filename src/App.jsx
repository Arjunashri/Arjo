import React from 'react';
import './index.css';
import HeroSection from './components/HeroSection';
import TrendingProducts from './components/TrendingProducts';
import ClientReview from './components/ClientReview';
import Updates from './components/Updates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Headers from './components/Headers';

function App() {
  return (
    <>
      <Headers />
      <HeroSection />
      <TrendingProducts />
      <ClientReview />
      <Updates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
