import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A14]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-white"
            aria-label="NeuraTech"
          >
            <Cpu className="h-8 w-8 text-[#00FFEA]" />
            <span className="tracking-tight">Vector<span className="text-[#00FFEA]">Corp</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Products", "Technology", "Benefits", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#00FFEA] transition-colors relative overflow-hidden group font-medium"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FFEA] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-[#0A0A14] hover:bg-[#111122] text-[#00FFEA] border border-[#00FFEA] px-5 py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,234,0.5)] font-medium">
              Contact
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-[#050508] z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}
      >
        <nav className="flex flex-col items-center space-y-6 mt-10">
          {["Products", "Technology", "Benefits", "Testimonials", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-xl text-gray-300 hover:text-[#00FFEA] transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="mt-6 bg-[#0A0A14] hover:bg-[#111122] text-[#00FFEA] border border-[#00FFEA] px-6 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,234,0.5)] font-medium w-4/5">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;