"use client";

import { Suspense, lazy, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

// Lazy load the 3D component for performance
const NeuralGlobe = lazy(() => import("./neural-globe"));

interface Scene3DProps {
  scrollProgress?: number;
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 8, 8]} />
      <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.2} />
    </mesh>
  );
}

export default function Scene3D({ scrollProgress = 0 }: Scene3DProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-32 rounded-full border border-aurora/20 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <NeuralGlobe scrollProgress={scrollProgress} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
