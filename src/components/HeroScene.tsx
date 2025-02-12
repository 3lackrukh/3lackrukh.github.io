// src/components/HeroScene.tsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[9, 0.5, 3]} />
      <meshStandardMaterial color="#4338ca" />
    </mesh>
  );
};

const HeroScene: React.FC = () => {
  return (
    <div className="relative h-[80vh]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box />
          <OrbitControls enableZoom={false} />
          <axesHelper args={[5]} />
        </Suspense>
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Your Name</h1>
          <p className="text-xl">ML Engineer & Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default HeroScene;