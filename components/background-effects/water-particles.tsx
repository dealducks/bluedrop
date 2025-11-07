"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface WaterParticlesProps {
  density?: "low" | "medium" | "high";
  color?: "blue" | "white" | "mixed";
  className?: string;
}

interface Particle {
  id: number;
  size: number;
  x: number;
  xDrift: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function WaterParticles({
  density = "medium",
  color = "blue",
  className = "",
}: WaterParticlesProps) {
  const [viewportHeight, setViewportHeight] = useState(1000);
  const [particles, setParticles] = useState<Particle[]>([]);

  const particleCount = {
    low: 15,
    medium: 25,
    high: 40,
  }[density];

  useEffect(() => {
    // Set actual viewport height on client
    setViewportHeight(window.innerHeight);

    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 4, // 4-12px
      x: Math.random() * 100, // 0-100%
      xDrift: Math.random() * 40 - 20, // Pre-calculate drift
      duration: Math.random() * 10 + 15, // 15-25s
      delay: Math.random() * 5, // 0-5s delay
      opacity: Math.random() * 0.3 + 0.2, // 0.2-0.5
    }));
    setParticles(generatedParticles);
  }, [particleCount]);

  const getParticleColor = (index: number) => {
    if (color === "mixed") {
      return index % 2 === 0
        ? "bg-primary/30"
        : "bg-accent/20";
    }
    return color === "blue" ? "bg-primary/30" : "bg-white/40";
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${getParticleColor(index)}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            bottom: "-10%",
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -viewportHeight - 100],
            x: [0, particle.xDrift], // Slight horizontal drift
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
