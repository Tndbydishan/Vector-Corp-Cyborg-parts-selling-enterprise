import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RobotModel from './3d/RobotModel';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030305]">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-[#00FFEA] rounded-full filter blur-[100px] opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block mb-2 text-[#00FFEA]">&lt;Evolve/&gt;</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFEA] to-[#FF3E7F]">
                Beyond Human Limits
              </span>
            </motion.h1>

            <motion.p 
              className="text-gray-400 text-lg mb-8 max-w-lg font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Military-grade cybernetic augmentations, now available for civilian enhancement.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#111827] text-[#00FFEA] font-medium rounded-md border border-[#00FFEA]/20 hover:bg-[#1F2937] hover:border-[#00FFEA]/40 hover:shadow-[0_0_20px_rgba(0,255,234,0.2)] transition-all duration-300 flex items-center group"
              >
                Initialize System
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="relative h-[600px] flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00FFEA]/10 to-[#FF3E7F]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative w-full h-full">
              <Canvas
                camera={{ position: [0, 2, 10], fov: 40 }}
                style={{ background: 'transparent' }}
              >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <RobotModel />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                  minPolarAngle={Math.PI / 2.5}
                  maxPolarAngle={Math.PI / 2}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;