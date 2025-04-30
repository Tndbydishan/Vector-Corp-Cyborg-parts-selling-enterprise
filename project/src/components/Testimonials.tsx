import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-24 bg-[#050508] relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')] bg-fixed bg-no-repeat bg-cover opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-[#00FFEA]">Success</span> Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from those who have transcended their biological limitations with our cutting-edge augmentations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-4 -right-4 top-1/2 -translate-y-1/2 flex justify-between items-center z-20">
            <button 
              onClick={prevTestimonial}
              className="bg-[#0A0A14]/80 hover:bg-[#0A0A14] p-2 rounded-full backdrop-blur-sm text-gray-400 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-[#0A0A14]/80 hover:bg-[#0A0A14] p-2 rounded-full backdrop-blur-sm text-gray-400 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full p-8 bg-gradient-to-br from-[#0A0A14] to-[#12121E] border border-[#1A1A24]"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#00FFEA]/30 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#00FFEA] fill-[#00FFEA]' : 'text-gray-600'}`}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-gray-300 italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.augmentation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  activeIndex === index ? 'bg-[#00FFEA] w-6' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;