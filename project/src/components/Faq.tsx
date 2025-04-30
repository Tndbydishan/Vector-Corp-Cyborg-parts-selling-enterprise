import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long is the recovery period after augmentation surgery?",
    answer: "Recovery periods vary by augmentation type, but our proprietary neural integration technology reduces recovery time by up to 60% compared to traditional prosthetics. Most clients return to daily activities within 1-3 weeks, with full functionality achieved within 4-6 weeks."
  },
  {
    question: "Are these augmentations detectable by standard security scans?",
    answer: "All NeuraTech augmentations are compliant with international security regulations. While they contain metal components, they are designed to pass through standard security measures with proper documentation, which we provide to all clients."
  },
  {
    question: "What maintenance is required for cybernetic enhancements?",
    answer: "Our advanced augmentations require minimal maintenance - typically an annual diagnostic check and software update. Internal components are self-regulating and self-maintaining, with a 15-year warranty on all mechanical parts."
  },
  {
    question: "Can I upgrade my augmentations as new technologies emerge?",
    answer: "Yes, all NeuraTech enhancements are designed with modular architecture, allowing for component upgrades without complete replacement. Our Lifetime Evolution Program offers discounted upgrades to existing clients."
  },
  {
    question: "Are there any side effects to neural integration?",
    answer: "Most clients experience no side effects. A small percentage (< 3%) report heightened sensory awareness in the first few weeks, which typically normalizes as the neural pathways adapt. Our medical team provides comprehensive support throughout the adaptation period."
  },
  {
    question: "How do you ensure privacy for the data collected by augmentations?",
    answer: "All data collected by your augmentations is encrypted with military-grade protocols and stored locally within your enhancements. You maintain complete control over your data, with opt-in options for anonymous contribution to our research database."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-24 bg-[#080812]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-[#00FFEA]">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions about our cybernetic enhancements and the augmentation process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-[#1A1A24] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#00FFEA]/30"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-[#0A0A14] text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#00FFEA]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-[#0D0D18] text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Don't see your question answered? Our augmentation specialists are ready to help.
          </p>
          <button className="px-8 py-3 bg-[#0A0A14] hover:bg-[#111122] text-[#00FFEA] border border-[#00FFEA] rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,234,0.5)]">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;