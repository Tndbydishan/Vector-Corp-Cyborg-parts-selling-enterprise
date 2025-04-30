import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MeshPhysicalMaterial } from 'three';

const RobotModel: React.FC = () => {
  const robotRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!robotRef.current) return;
    robotRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  // Premium material presets
  const createPremiumMaterial = (options: Partial<MeshPhysicalMaterial>) => (
    <meshPhysicalMaterial
      metalness={0.9}
      roughness={0.1}
      clearcoat={1}
      clearcoatRoughness={0.1}
      reflectivity={1}
      envMapIntensity={1}
      {...options}
    />
  );

  return (
    <mesh ref={robotRef}>
      {/* Premium Head with Medical-Grade Finish */}
      <group position={[0, 2.2, 0]}>
        <mesh>
          <sphereGeometry args={[0.4, 64, 64]} />
          {createPremiumMaterial({ color: "#FFFFFF", clearcoat: 1.5 })}
        </mesh>
        {/* Advanced Faceplate */}
        <mesh position={[0, 0, 0.2]}>
          <boxGeometry args={[0.6, 0.3, 0.2]} />
          {createPremiumMaterial({ 
            color: "#F8F8F8",
            metalness: 1,
            clearcoat: 2
          })}
        </mesh>
        {/* High-Tech Eye System */}
        {[-0.15, 0.15].map((x) => (
          <group key={x} position={[x, 0, 0.3]}>
            <mesh>
              <sphereGeometry args={[0.08, 48, 48]} />
              <meshStandardMaterial
                color="#00FFEA"
                emissive="#00FFEA"
                emissiveIntensity={3}
                toneMapped={false}
              />
            </mesh>
            {/* Iris Detail */}
            <mesh position={[0, 0, 0.01]}>
              <ringGeometry args={[0.03, 0.06, 48]} />
              <meshStandardMaterial
                color="#FFFFFF"
                emissive="#FFFFFF"
                emissiveIntensity={1}
              />
            </mesh>
            {/* Outer Ring */}
            <mesh position={[0, 0, 0]}>
              <ringGeometry args={[0.07, 0.08, 48]} />
              {createPremiumMaterial({ color: "#FFFFFF", metalness: 1 })}
            </mesh>
          </group>
        ))}
        {/* Neural Interface Ports */}
        {[-0.2, 0, 0.2].map((x) => (
          <mesh key={x} position={[x, 0.2, 0.35]}>
            <cylinderGeometry args={[0.02, 0.02, 0.05, 16]} />
            {createPremiumMaterial({ 
              color: "#E0E0E0",
              metalness: 1,
              clearcoat: 2
            })}
          </mesh>
        ))}
      </group>

      {/* Advanced Neck System */}
      <group position={[0, 1.8, 0]}>
        <mesh>
          <cylinderGeometry args={[0.2, 0.15, 0.3, 32]} />
          {createPremiumMaterial({ 
            color: "#F0F0F0",
            clearcoat: 1.5
          })}
        </mesh>
        {/* Hydraulic Pistons */}
        {[-0.15, 0.15].map((x) => (
          <group key={x} position={[x, 0, 0]}>
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, 0.25, 16]} />
              {createPremiumMaterial({ 
                color: "#CCCCCC",
                metalness: 1
              })}
            </mesh>
          </group>
        ))}
      </group>

      {/* Premium Torso */}
      <group position={[0, 0.8, 0]}>
        <mesh>
          <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
          {createPremiumMaterial({ 
            color: "#FFFFFF",
            clearcoat: 2
          })}
        </mesh>
        {/* Core Housing */}
        <group position={[0, 0, 0.5]}>
          <mesh>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
            {createPremiumMaterial({ 
              color: "#F0F0F0",
              clearcoat: 2
            })}
          </mesh>
          {/* Energy Core */}
          <mesh position={[0, 0, 0.01]}>
            <cylinderGeometry args={[0.15, 0.15, 0.12, 32]} />
            <meshStandardMaterial
              color="#00FFEA"
              emissive="#00FFEA"
              emissiveIntensity={3}
              toneMapped={false}
            />
          </mesh>
        </group>
        {/* Armor Plates */}
        {[-0.4, 0, 0.4].map((x) => (
          <mesh key={x} position={[x, 0.2, 0.4]}>
            <boxGeometry args={[0.3, 0.6, 0.1]} />
            {createPremiumMaterial({ 
              color: "#FFFFFF",
              clearcoat: 1.5
            })}
          </mesh>
        ))}
      </group>

      {/* Enhanced Arms */}
      {[-1, 1].map((x) => (
        <group key={x} position={[x, 1.2, 0]} scale={x < 0 ? 1 : -1}>
          {/* Shoulder Joint */}
          <mesh>
            <sphereGeometry args={[0.2, 48, 48]} />
            {createPremiumMaterial({ 
              color: "#F8F8F8",
              clearcoat: 2
            })}
          </mesh>
          {/* Upper Arm */}
          <group position={[0, -0.4, 0]}>
            <mesh rotation={[0, 0, -0.3]}>
              <cylinderGeometry args={[0.15, 0.12, 0.8, 32]} />
              {createPremiumMaterial({ 
                color: "#FFFFFF",
                clearcoat: 1.5
              })}
            </mesh>
            {/* Hydraulic System */}
            {[0.2, 0, -0.2].map((y) => (
              <mesh key={y} position={[0.1, y, 0]} rotation={[0, 0, -0.3]}>
                <cylinderGeometry args={[0.02, 0.02, 0.3, 16]} />
                {createPremiumMaterial({ 
                  color: "#CCCCCC",
                  metalness: 1
                })}
              </mesh>
            ))}
          </group>
          {/* Advanced Hand */}
          <group position={[-0.1, -1.5, 0]}>
            <mesh>
              <boxGeometry args={[0.2, 0.3, 0.15]} />
              {createPremiumMaterial({ 
                color: "#F0F0F0",
                clearcoat: 1.5
              })}
            </mesh>
            {/* Articulated Fingers */}
            {[...Array(5)].map((_, i) => (
              <group key={i} position={[0, -0.25, (i - 2) * 0.035]}>
                {[0, -0.08, -0.16].map((y, j) => (
                  <mesh key={j} position={[0, y, 0]} rotation={[j * 0.2, 0, 0]}>
                    <boxGeometry args={[0.03, 0.08, 0.03]} />
                    {createPremiumMaterial({ 
                      color: "#E8E8E8",
                      clearcoat: 1
                    })}
                  </mesh>
                ))}
              </group>
            ))}
          </group>
        </group>
      ))}

      {/* Premium Legs */}
      {[-0.3, 0.3].map((x) => (
        <group key={x} position={[x, 0, 0]}>
          {/* Hip Joint */}
          <mesh>
            <sphereGeometry args={[0.2, 48, 48]} />
            {createPremiumMaterial({ 
              color: "#F8F8F8",
              clearcoat: 2
            })}
          </mesh>
          {/* Upper Leg */}
          <group position={[0, -0.5, 0]}>
            <mesh>
              <cylinderGeometry args={[0.2, 0.15, 0.8, 32]} />
              {createPremiumMaterial({ 
                color: "#FFFFFF",
                clearcoat: 1.5
              })}
            </mesh>
            {/* Leg Armor */}
            <mesh position={[0, 0, 0.15]}>
              <boxGeometry args={[0.3, 0.7, 0.1]} />
              {createPremiumMaterial({ 
                color: "#F0F0F0",
                clearcoat: 2
              })}
            </mesh>
          </group>
          {/* Lower Leg */}
          <group position={[0, -1.4, 0]}>
            <mesh>
              <cylinderGeometry args={[0.15, 0.12, 0.8, 32]} />
              {createPremiumMaterial({ 
                color: "#FFFFFF",
                clearcoat: 1.5
              })}
            </mesh>
          </group>
          {/* Advanced Foot */}
          <group position={[0, -1.9, 0.1]}>
            <mesh>
              <boxGeometry args={[0.25, 0.2, 0.4]} />
              {createPremiumMaterial({ 
                color: "#F8F8F8",
                clearcoat: 2
              })}
            </mesh>
            {/* Articulated Toe */}
            <mesh position={[0, -0.1, 0.2]} rotation={[-0.2, 0, 0]}>
              <boxGeometry args={[0.24, 0.1, 0.2]} />
              {createPremiumMaterial({ 
                color: "#F0F0F0",
                clearcoat: 1.5
              })}
            </mesh>
          </group>
        </group>
      ))}

      {/* Premium Lighting System */}
      <pointLight position={[0, 2, 2]} color="#FFFFFF" intensity={1.5} distance={6} />
      <pointLight position={[0, 0, 2]} color="#00FFEA" intensity={0.8} distance={4} />
      <pointLight position={[-2, 1, 1]} color="#FFFFFF" intensity={0.5} distance={5} />
      <pointLight position={[2, 1, 1]} color="#FFFFFF" intensity={0.5} distance={5} />
      <pointLight position={[0, -2, 2]} color="#FFFFFF" intensity={0.4} distance={6} />
      <ambientLight intensity={0.2} />
    </mesh>
  );
};

export default RobotModel;