"use client";

import dynamic from "next/dynamic";
import { useLenis } from "./lenis-provider";

// Dynamically import 3D scene to prevent SSR issues
const Scene3D = dynamic(() => import("@/components/three/scene-3d"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 flex items-center justify-center">
      <div className="h-32 w-32 rounded-full border border-aurora/20 animate-pulse" />
    </div>
  ),
});

interface ScrollContainerProps {
  children: React.ReactNode;
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
  const { scrollProgress } = useLenis();

  return (
    <>
      <Scene3D scrollProgress={scrollProgress} />
      {children}
    </>
  );
}
