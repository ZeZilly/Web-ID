"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

const LANGUAGE_NODES = [
  { code: "NO", position: [1.5, 0.8, 0.5] as [number, number, number] },
  { code: "EN", position: [-1.2, 0.5, 1.0] as [number, number, number] },
  { code: "SV", position: [0.8, -0.6, 1.2] as [number, number, number] },
  { code: "TR", position: [-0.5, -1.0, 0.8] as [number, number, number] },
];

interface LanguageNodeProps {
  code: string;
  position: [number, number, number];
  color: string;
}

function LanguageNode({ code, position, color }: LanguageNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        {/* Outer glow ring */}
        <mesh>
          <ringGeometry args={[0.15, 0.18, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>

        {/* Inner sphere */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Language label */}
        <Text
          position={[0, -0.3, 0]}
          fontSize={0.12}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {code}
        </Text>
      </group>
    </Float>
  );
}

interface ConnectionLinesProps {
  nodes: typeof LANGUAGE_NODES;
  color: string;
}

function ConnectionLines({ nodes, color }: ConnectionLinesProps) {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];

    // Create connections between all nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        points.push(new THREE.Vector3(...nodes[i].position));
        points.push(new THREE.Vector3(...nodes[j].position));
      }
    }

    // Add connections to center
    nodes.forEach((node) => {
      points.push(new THREE.Vector3(0, 0, 0));
      points.push(new THREE.Vector3(...node.position));
    });

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [nodes]);

  useFrame((state) => {
    if (linesRef.current) {
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.3} />
    </lineSegments>
  );
}

function GlobeCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = -state.clock.elapsedTime * 0.03;
      wireframeRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group>
      {/* Inner core sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#0A2540"
          transparent
          opacity={0.8}
          wireframe
        />
      </mesh>

      {/* Outer wireframe sphere */}
      <lineSegments ref={wireframeRef}>
        <icosahedronGeometry args={[0.8, 2]} />
        <lineBasicMaterial color="#00E5FF" transparent opacity={0.15} />
      </lineSegments>

      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

interface NeuralGlobeProps {
  scrollProgress?: number;
}

export default function NeuralGlobe({ scrollProgress = 0 }: NeuralGlobeProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Subtle rotation based on scroll
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.5;
      groupRef.current.position.y = -scrollProgress * 2;
    }
  });

  return (
    <group ref={groupRef}>
      <GlobeCore />
      <ConnectionLines nodes={LANGUAGE_NODES} color="#00E5FF" />
      {LANGUAGE_NODES.map((node) => (
        <LanguageNode
          key={node.code}
          code={node.code}
          position={node.position}
          color="#00E5FF"
        />
      ))}

      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00E5FF" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#F8F9FA" />
    </group>
  );
}
