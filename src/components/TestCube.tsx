import React, { Suspense, useMemo, useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Effects } from '@react-three/drei';
import * as THREE from 'three';
import { Settings, Camera } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

// Extend Three.js with UnrealBloomPass
extend({ UnrealBloomPass });


interface ShapeProps {
    color: string;
    wireframe: boolean;
    autoRotate: boolean;
    hoverTime: number;
    scale?: number;
    initialRotation?: [number, number, number];
}

const Shape = ({ color, wireframe, autoRotate, hoverTime, scale, initialRotation=[0, 0, 0] }: ShapeProps) => {
  const geometry = useMemo(() => {
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseScale = scale || 0.5;
    
    const vertices = [
        baseScale * phi, baseScale * phi, baseScale * phi,
        -baseScale * phi, -baseScale * phi, baseScale * phi,
        -baseScale * phi, baseScale * phi, -baseScale * phi,
        baseScale * phi, -baseScale * phi, -baseScale * phi,
        -baseScale * phi, baseScale * phi, baseScale * phi,
        baseScale * phi, -baseScale * phi, baseScale * phi,
        baseScale * phi, baseScale * phi, -baseScale * phi,
        -baseScale * phi, -baseScale * phi, -baseScale * phi,
    ];

    const indices = [
      0, 1, 2, 0, 2, 3, 0, 3, 1, 1, 3, 2,
      4, 5, 6, 4, 6, 7, 4, 7, 5, 5, 7, 6
    ];

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    
    return geometry;
  }, [scale]);

  const meshRef = useRef<THREE.Mesh>(null);
  const rotationSpeedRef = useRef(0.5);
  const glowIntensityRef = useRef(0);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = initialRotation[0];
      meshRef.current.rotation.y = initialRotation[1];
      meshRef.current.rotation.z = initialRotation[2];
    }
  }, []);

  useFrame((_, delta) => {
    if (autoRotate && meshRef.current) {
      const targetSpeed = 0.5 + hoverTime * 2;
      rotationSpeedRef.current += (targetSpeed - rotationSpeedRef.current) * 0.1;
      meshRef.current.rotation.y += delta * rotationSpeedRef.current;

      const targetGlow = hoverTime * 3; // Increased glow intensity
      glowIntensityRef.current += (targetGlow - glowIntensityRef.current) * 0.1;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      geometry={geometry}
    >
      <meshStandardMaterial 
        color={color}
        wireframe={wireframe}
        side={THREE.DoubleSide}
        metalness={0.8} // Increased metalness
        roughness={0.2} // Decreased roughness
        emissive={color}
        emissiveIntensity={glowIntensityRef.current}
        transparent
        opacity={0.8} // Added slight transparency
      />
    </mesh>
  );
};

const StellaOctangula: React.FC = () => {
    const { navItems, hoveredPath } = useNavigation();
    const [wireframe, setWireframe] = useState(true);
    const [autoRotate, setAutoRotate] = useState(true);
    
    const [hoverTimes, setHoverTimes] = useState<Record<string, number>>(
      Object.fromEntries(navItems.map(item => [item.path, 0]))
    );
    const hoverStatesRef = useRef<Record<string, number>>(
        Object.fromEntries(navItems.map(item => [item.path, 0]))
    );
    const animationFrameRef = useRef<number>();
  
    useEffect(() => {
        navItems.forEach(item => {
            hoverStatesRef.current[item.path] = hoveredPath === item.path ? 1 : 0;
        });
    }, [hoveredPath, navItems]);

    useEffect(() => {
      const updateHoverTimes = () => {
        setHoverTimes(prevTimes => {
          const newTimes = { ...prevTimes };
          
          navItems.forEach(item => {
            if (hoverStatesRef.current[item.path] > 0) {
              newTimes[item.path] = (prevTimes[item.path] || 0) + 0.032;
            } else {
              newTimes[item.path] = Math.max(0, (prevTimes[item.path] || 0) - 0.128);
            }
          });
          
          return newTimes;
        });
  
        animationFrameRef.current = requestAnimationFrame(updateHoverTimes);
      };
  
      animationFrameRef.current = requestAnimationFrame(updateHoverTimes);
      
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [hoveredPath, navItems]);
  
    return (
      <div className="w-full h-96 bg-gray-900 rounded-lg relative">
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            onClick={() => setWireframe(!wireframe)}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20"
            title="Toggle Wireframe"
          >
            <Settings className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20"
            title="Toggle Auto-rotation"
          >
            <Camera className="w-5 h-5 text-white" />
          </button>
        </div>
        
        <Canvas camera={{ position: [3, 2, 3] }} gl={{ alpha: false }} >
          <color attach="background" args={["#111827"]} />
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} /> {/* Increased light intensity */}
            {navItems.map((item, index) => {
                const initialRotation: [number, number, number] = [
                    (Math.PI / 4) * index,
                    (Math.PI / 3) * (index + 1),
                    (Math.PI / 6) * (index * 2),
                ];
                
                return (
                    <Shape
                      key={item.path}
                      color={item.color}
                      wireframe={wireframe}
                      autoRotate={autoRotate}
                      hoverTime={hoverTimes[item.path]}
                      scale={0.5 + (index * 0.2)}
                      initialRotation={initialRotation}
                    />
                );
            })}
            <OrbitControls 
              autoRotate={autoRotate} 
              autoRotateSpeed={2}
            />
            <Effects>
              <unrealBloomPass threshold={0.1} strength={0.8} radius={1} />
            </Effects>
          </Suspense>
        </Canvas>
      </div>
    );
};

export default StellaOctangula;