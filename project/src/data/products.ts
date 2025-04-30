export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  performanceBoost: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "NeuraSight™ Ocular System",
    category: "Sensory",
    price: "$29,999",
    description: "Advanced bionic eyes with 4K resolution, night vision, and 20x optical zoom. Includes AR overlay and neural targeting assistance.",
    image: "https://images.pexels.com/photos/8438663/pexels-photo-8438663.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    performanceBoost: "+300% Visual Acuity",
    features: ["Thermal Vision", "Data HUD", "Zoom Capabilities", "Neural Interface"]
  },
  {
    id: 2,
    name: "TitanArm™ XR-5",
    category: "Limbs",
    price: "$45,999",
    description: "Military-grade cybernetic arm with titanium-carbon alloy construction. Capable of lifting 2 tons with precision grip control.",
    image: "https://images.pexels.com/photos/8439111/pexels-photo-8439111.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    performanceBoost: "+500% Strength",
    features: ["Hydraulic Assist", "Fine Motor Control", "Bulletproof", "Sensory Feedback"]
  },
  {
    id: 3,
    name: "NeuroLink™ Cognitive Enhancer",
    category: "Neural",
    price: "$78,500",
    description: "Direct neural interface chip that enhances memory recall, processing speeds, and multitasking abilities beyond human limitations.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    performanceBoost: "+200% Cognitive Function",
    features: ["Instant Learning", "Brain-Computer Interface", "Memory Enhancement", "Emotional Regulation"]
  },
  {
    id: 4,
    name: "AeroLung™ Respiratory System",
    category: "Internal",
    price: "$67,250",
    description: "Advanced synthetic lungs with integrated air filtration and oxygen enhancement technology. Function in toxic environments.",
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    performanceBoost: "+400% Oxygen Efficiency",
    features: ["Toxin Filtration", "High Altitude Support", "Underwater Breathing", "Health Monitoring"]
  },
  {
    id: 5,
    name: "SonicCore™ Auditory System",
    category: "Sensory",
    price: "$23,999",
    description: "Cybernetic ear enhancement with frequency range beyond human capability, directional audio isolation, and sound amplification.",
    image: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    performanceBoost: "+250% Hearing Range",
    features: ["Ultra/Infrasonic Detection", "Audio Filtering", "Recording Capability", "Translation Module"]
  },
  {
    id: 6,
    name: "VelocityLeg™ Pro",
    category: "Limbs",
    price: "$52,500",
    description: "High-performance cybernetic legs with adaptive terrain navigation, shock absorption, and thrust-assisted jumping capability.",
    image: "https://images.pexels.com/photos/8439064/pexels-photo-8439064.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1",
    performanceBoost: "+350% Speed & Agility",
    features: ["Adaptive Suspension", "60mph Sprint", "10m Vertical Jump", "Silent Operation"]
  }
];