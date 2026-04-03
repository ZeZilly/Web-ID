"use client";

import { useEffect, useRef, createContext, useContext, useState } from "react";
import Lenis from "lenis";

interface LenisContextValue {
  lenis: Lenis | null;
  scrollProgress: number;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollProgress: 0,
});

export function useLenis() {
  return useContext(LenisContext);
}

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ({ progress }: { progress: number }) => {
      setScrollProgress(progress);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollProgress }}>
      {children}
    </LenisContext.Provider>
  );
}
