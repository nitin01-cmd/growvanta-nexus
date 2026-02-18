import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Minimal premium Digital Growth Core: matte sphere with thin gold rings and delicate bars
const Core = ({ color = "#d4af37" }: { color?: string }) => {
  const ref = useRef<THREE.Group | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      // extremely slow rotation
      ref.current.rotation.y = t * 0.05;
      // subtle vertical float
      ref.current.position.y = Math.sin(t * 0.25) * 0.02;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhysicalMaterial
          color="#0b0d10"
          metalness={0.95}
          roughness={0.18}
          clearcoat={0.6}
          clearcoatRoughness={0.02}
          reflectivity={0.5}
          sheen={0.3}
        />
      </mesh>

      {/* thin gold accent rings */}
      <mesh rotation={[0.4, 0.6, 0]}>
        <torusGeometry args={[1.55, 0.01, 6, 128]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.08} metalness={1} roughness={0.2} />
      </mesh>

      <mesh rotation={[-0.3, -0.4, 0]}>
        <torusGeometry args={[1.35, 0.008, 6, 128]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.06} metalness={1} roughness={0.25} />
      </mesh>

      {/* delicate analytics bars (minimal, thin) */}
      <group position={[0, -0.14, 0]}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[(i - 1) * 0.12, 0.18 + i * 0.04, 0.9]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.04, 0.2 + i * 0.06, 0.04]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.03} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

const LightPulse = ({ intensity = 0.6 }: { intensity?: number }) => {
  const ref = useRef<THREE.PointLight | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) ref.current.intensity = intensity + Math.sin(t * 1.2) * 0.06;
  });

  return <pointLight ref={ref} position={[0, 2.5, 3]} color="#d4af37" />;
};

const ThinLines = ({ color = "#d4af37" }: { color?: string }) => {
  return (
    <group>
      {/* faded gold glows using thin rings */}
      <mesh rotation={[0.2, 0.1, 0]}>
        <torusGeometry args={[2.2, 0.004, 6, 128]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.02} transparent opacity={0.08} />
      </mesh>
      <mesh rotation={[-0.25, -0.2, 0]}>
        <torusGeometry args={[1.9, 0.003, 6, 128]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.02} transparent opacity={0.06} />
      </mesh>
    </group>
  );
};

const Scene = () => {
  const groupRef = useRef<THREE.Group | null>(null);

  useFrame(() => {
    const t = performance.now() / 1000;
    if (groupRef.current) {
      // very subtle overall motion
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.01;
      groupRef.current.rotation.y = Math.cos(t * 0.04) * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <Core />
      <ThinLines />
      <LightPulse intensity={0.7} />
    </group>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0.2, 5.5], fov: 36 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 6, 4]} intensity={0.9} color="#ffdca8" />

        {/* subtle floor to catch soft shadow */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#06060a" metalness={0.0} roughness={0.8} />
        </mesh>

        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroScene;

