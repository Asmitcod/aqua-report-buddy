import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedDroplet = ({ contamination }: { contamination: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  // Color based on contamination level
  const getColor = (level: number) => {
    if (level < 30) return "#10B981"; // Green - Safe
    if (level < 60) return "#F59E0B"; // Yellow - Moderate
    if (level < 80) return "#EF4444"; // Red - High
    return "#991B1B"; // Dark Red - Critical
  };

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color={getColor(contamination)}
        transparent
        opacity={0.8}
        roughness={0.2}
        metalness={0.1}
      />
    </Sphere>
  );
};

interface ContaminationDropletProps {
  contamination: number;
  change: number;
}

const ContaminationDroplet = ({ contamination, change }: ContaminationDropletProps) => {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <AnimatedDroplet contamination={contamination} />
      </Canvas>
      
      {/* Contamination score overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center bg-white/90 rounded-full p-4 shadow-lg">
          <div className="text-2xl font-bold text-gray-800">{contamination}%</div>
          <div className="text-xs text-gray-600">Contamination</div>
        </div>
      </div>

      {/* Change indicator */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          change > 0 
            ? 'bg-red-100 text-red-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          <span className="mr-1">
            {change > 0 ? '↑' : '↓'}
          </span>
          {Math.abs(change)}% from last week
        </div>
      </div>
    </div>
  );
};

export default ContaminationDroplet;