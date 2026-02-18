import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

const GoldGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#c9a54e"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      {/* Inner sphere */}
      <Sphere args={[1.85, 64, 64]}>
        <MeshDistortMaterial
          color="#1a1a1a"
          emissive="#c9a54e"
          emissiveIntensity={0.08}
          roughness={0.3}
          metalness={0.9}
          distort={0.15}
          speed={1.5}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
};

const FloatingParticles = () => {
  const count = 200;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#c9a54e"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 5]} intensity={0.8} color="#c9a54e" />
        <pointLight position={[-10, -5, -5]} intensity={0.3} color="#ffffff" />
        <GoldGlobe />
        <FloatingParticles />
        <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
