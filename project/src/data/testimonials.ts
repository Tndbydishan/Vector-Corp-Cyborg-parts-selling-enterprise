export interface Testimonial {
  name: string;
  image: string;
  quote: string;
  rating: number;
  augmentation: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Alex Mercer",
    image: "https://images.pexels.com/photos/14448895/pexels-photo-14448895.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "After losing my arm in military service, the TitanArm not only restored my functionality but enhanced it beyond what was humanly possible. I can now lift objects that would have required equipment before. The neural interface makes it feel like my own limb - sometimes I forget it's not biological.",
    rating: 5,
    augmentation: "TitanArm™ XR-5"
  },
  {
    name: "Naomi Chen",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "The NeuroLink cognitive enhancer has revolutionized my work as a quantum physicist. I can process complex equations and visualize multi-dimensional models with unprecedented clarity. My research output has tripled in just six months since the integration.",
    rating: 5,
    augmentation: "NeuroLink™ Cognitive Enhancer"
  },
  {
    name: "Marcus Donovan",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "Born with a degenerative eye condition, I was facing complete blindness by 40. The NeuraSight system didn't just save my vision – it gave me capabilities I never imagined possible. Thermal vision has completely changed how I experience the world, and the AR overlay integrates seamlessly with my work systems.",
    rating: 5,
    augmentation: "NeuraSight™ Ocular System"
  },
  {
    name: "Elena Rodriguez",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "As a professional athlete, the VelocityLeg Pro system has extended my career by at least a decade. Not only have I recovered from what would have been a career-ending injury, but my performance metrics are 43% higher than my previous personal bests. The integration was seamless, and the recovery time was half what I expected.",
    rating: 4,
    augmentation: "VelocityLeg™ Pro"
  }
];