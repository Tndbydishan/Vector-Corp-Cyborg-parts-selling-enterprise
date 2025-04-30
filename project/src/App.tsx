import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import BackgroundAnimation from './components/ui/BackgroundAnimation';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050508] text-gray-100 overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProductShowcase />
          <Benefits />
          <Testimonials />
          <Faq />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;