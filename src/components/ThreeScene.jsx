import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei';
import { gsap } from 'gsap';
import './ThreeScene.css';

// Fallback model if no custom model is provided
const FallbackModel = ({ scale = 2 }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = Math.sin(t / 2) / 8;
    mesh.current.position.y = Math.sin(t / 1.5) / 10;
  });
  
  return (
    <mesh ref={mesh} scale={scale}>
      <capsuleGeometry args={[1, 2, 8, 16]} />
      <meshStandardMaterial 
        color="#222222"
        roughness={0.5}
        metalness={0.8}
      />
    </mesh>
  );
};

// Animated 3D pants model component
const Model = () => {
  const groupRef = useRef();
  
  useEffect(() => {
    // Animation when component mounts
    gsap.from(groupRef.current.rotation, {
      y: Math.PI * 2,
      duration: 2,
      ease: 'power3.out'
    });
    
    gsap.from(groupRef.current.position, {
      y: -2,
      duration: 1.5,
      ease: 'elastic.out(1, 0.3)'
    });
  }, []);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t / 3) * 0.2;
    groupRef.current.position.y = Math.sin(t / 2) * 0.1;
  });
  
  return (
    <group ref={groupRef} dispose={null}>
      <FallbackModel />
    </group>
  );
};

// Main Three.js scene component
const ThreeScene = () => {
  return (
    <div className="three-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1}
          castShadow 
        />
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <Model />
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;