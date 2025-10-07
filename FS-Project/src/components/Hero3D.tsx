import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Center } from "@react-three/drei";
import { Suspense } from "react";

// 3D Camera Model Component
const Camera3D = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={[2, 0, 0]}>
        {/* Camera Body */}
        <boxGeometry args={[2, 1.2, 1]} />
        <meshStandardMaterial color="#333" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Lens */}
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.6, 0.6, 0.4, 16]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Lens Glass */}
      <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
        <meshStandardMaterial color="#222" metalness={1} roughness={0} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
};

// Floating Lens Component
const FloatingLens = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 16]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="h-[60vh] w-full relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
          <spotLight position={[0, 10, 0]} intensity={0.8} color="#ffd700" />

          {/* 3D Elements */}
          <Camera3D />
          <FloatingLens position={[-3, 1.5, -1]} />
          <FloatingLens position={[-2, -2, 1]} />
          <FloatingLens position={[4, -1, -2]} />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero3D;