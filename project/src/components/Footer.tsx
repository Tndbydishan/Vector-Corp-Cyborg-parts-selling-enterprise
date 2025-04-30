import React from 'react';
import { Cpu, Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030305] pt-16 pb-8 border-t border-[#1A1A24]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Cpu className="h-6 w-6 text-[#00FFEA]" />
              <span>Vector<span className="text-[#00FFEA]">Corp</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Pioneering the future of human enhancement through cutting-edge cybernetic augmentations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#00FFEA] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00FFEA] transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00FFEA] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00FFEA] transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {['Neural Implants', 'Prosthetic Limbs', 'Sensory Enhancements', 'Internal Organs', 'Military Solutions', 'Custom Designs'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#00FFEA] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Research', 'Careers', 'Ethics Policy', 'Terms of Service', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#00FFEA] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#00FFEA] mr-3 mt-0.5" />
                <span className="text-gray-400">
                  Vector-Corporations Tower, 1234 Future Blvd<br />Neo Tokyo, NT 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#00FFEA] mr-3" />
                <span className="text-gray-400">+1 (800) VECTOR-CORP</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#00FFEA] mr-3" />
                <span className="text-gray-400">info@vector-corp.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1A1A24] pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vector-Corp Cybernetics. All rights reserved.</p>
          <p className="mt-2">
            "Enhancing Humanity" is a registered trademark of Vector-Corp Cybernetics Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;