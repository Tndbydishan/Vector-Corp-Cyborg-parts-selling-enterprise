import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, BarChart3, MoveRight } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-[#0A0A14] rounded-lg overflow-hidden group transition-all duration-300 border border-[#1A1A24] hover:border-[#00FFEA]/30 hover:shadow-[0_0_30px_rgba(0,255,234,0.1)]"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.4 }}
          className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent z-10"
        />
        
        <motion.img 
          src={product.image} 
          alt={product.name} 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full object-cover"
        />
        
        <motion.div 
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          className="absolute top-3 right-3 z-20"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#FF3E7F] text-white">
            {product.category}
          </span>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-xl font-semibold text-white mb-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-[#00FFEA] font-medium">{product.price}</p>
            <div className="flex items-center text-sm text-gray-400">
              <BarChart3 className="h-4 w-4 mr-1" />
              <span>{product.performanceBoost}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-400 text-sm mb-4">{product.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.map((feature, index) => (
            <motion.span 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 text-xs rounded-md bg-[#111122] text-gray-300"
            >
              {feature}
            </motion.span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center px-3 py-2 rounded bg-[#111827] text-[#00FFEA] border border-[#00FFEA]/20 hover:bg-[#1F2937] hover:border-[#00FFEA]/40 hover:shadow-[0_0_15px_rgba(0,255,234,0.2)] transition-all duration-300 flex-grow mr-2 group"
          >
            <ShoppingCart className="h-4 w-4 mr-2 transform group-hover:scale-110 transition-transform duration-300" />
            Add to Cart
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded bg-[#111827] text-gray-400 hover:text-[#FF3E7F] border border-gray-800 hover:border-[#FF3E7F]/30 hover:shadow-[0_0_15px_rgba(255,62,127,0.1)] transition-all duration-300"
            aria-label="Add to wishlist"
          >
            <Heart className="h-5 w-5" />
          </motion.button>
        </div>
        
        <motion.a 
          href="#" 
          whileHover={{ x: 5 }}
          className="mt-4 text-sm text-gray-400 hover:text-[#00FFEA] transition-colors flex items-center justify-center py-2 border-t border-[#1A1A24] group"
        >
          View Technical Specifications 
          <MoveRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProductCard;