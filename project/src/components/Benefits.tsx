import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Zap, BarChart3, Heart, Brain, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Enhanced Performance",
    description: "Experience up to 300% increase in strength, speed, and endurance compared to unaugmented capabilities."
  },
  {
    icon: ShieldCheck,
    title: "Military-Grade Durability",
    description: "Constructed with carbon-titanium alloy, our implants can withstand extreme conditions and impacts."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor performance metrics with our proprietary NeuraSense™ technology that interfaces directly with your nervous system."
  },
  {
    icon: Brain,
    title: "Cognitive Enhancement",
    description: "Our neural implants boost processing speed, memory retention, and multitasking capabilities by up to 200%."
  },
  {
    icon: Clock,
    title: "Extended Lifespan",
    description: "Internal organ replacements and enhancements can extend life expectancy by up to 50 years beyond natural limits."
  },
  {
    icon: Heart,
    title: "Seamless Integration",
    description: "Our proprietary neural interface ensures natural control and sensation with no uncanny valley effect."
  }
];

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const section = sectionRef.current;
    const items = itemRefs.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (section) {
      observer.observe(section);
    }
    
    items.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (section) observer.unobserve(section);
      items.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#080812] to-[#050508] opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-[#00FFEA]">Vector-Corp</span> Augmentations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our cybernetic enhancements don't just replace human parts - they surpass them in every measurable way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className="bg-[#0A0A14] p-6 rounded-lg border border-[#1A1A24] hover:border-[#00FFEA]/50 transition-all duration-300 group opacity-0 transform translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 inline-block rounded-lg bg-[#111122] text-[#00FFEA] group-hover:shadow-[0_0_15px_rgba(0,255,234,0.3)] transition-all duration-300">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-[#0A0A14] rounded-xl p-8 border border-[#1A1A24] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF3E7F]/20 to-transparent opacity-30"></div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Evolve Beyond Human Limitations?</h3>
              <p className="text-gray-400 mb-6">
                Schedule a consultation with our augmentation specialists to find the perfect enhancements for your lifestyle and goals.
              </p>
              <button className="px-8 py-3 bg-[#111827] text-[#00FFEA] border border-[#00FFEA]/20 hover:bg-[#1F2937] hover:border-[#00FFEA]/40 hover:shadow-[0_0_20px_rgba(0,255,234,0.2)] transition-all duration-300 rounded-md font-medium group">
                Book Consultation
              </button>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00FFEA]/30 to-[#FF3E7F]/30 animate-pulse"></div>
                <img 
                  src="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=1" 
                  alt="Cyborg arm" 
                  className="rounded-full object-cover w-full h-full relative z-10 p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;