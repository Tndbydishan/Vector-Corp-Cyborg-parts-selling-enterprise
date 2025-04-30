import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ui/ProductCard';

const ProductShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Neural', 'Limbs', 'Sensory', 'Internal'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  return (
    <section id="products" className="py-24 bg-[#080812] relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')] bg-no-repeat bg-cover opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium <span className="text-[#00FFEA]">Cybernetic</span> Enhancements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our cutting-edge implants and augmentations are engineered with military-grade precision and durability, now available for civilian applications.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#00FFEA] text-black font-medium shadow-[0_0_15px_rgba(0,255,234,0.5)]'
                  : 'bg-[#0A0A14] text-gray-300 hover:bg-[#111122]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;