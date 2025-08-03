import React, { useRef, useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  baseX: number;
  baseY: number;
  opacity: number;
  size: number;
  symbol: string;
  rotation: number;
  speed: number;
  driftAngle: number;
  driftSpeed: number;
}

const ParticleBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Tech symbols for particles
  const techSymbols = ['</', '/>', '{}', '[]', '()', '=>', '&&', '||', '++', '--', '==', '!=', '>=', '<=', '?:', 'fn', 'if', 'for'];

  // Initialize tech particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      baseX: Math.random() * window.innerWidth,
      baseY: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.6 + 0.4,
      size: Math.random() * 20 + 16,
      symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)],
      rotation: Math.random() * 360,
      speed: Math.random() * 0.5 + 0.5,
      driftAngle: Math.random() * Math.PI * 2,
      driftSpeed: Math.random() * 0.05 + 0.02, // Very slow drift speed
    }));
    setParticles(initialParticles);
  }, []);

  // Mouse tracking and particle interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update particle targets based on mouse position
      setParticles(prev => prev.map(particle => {
        const distance = Math.sqrt(
          Math.pow(particle.x - e.clientX, 2) + Math.pow(particle.y - e.clientY, 2)
        );
        
        const influence = Math.max(0, 200 - distance) / 200;
        const angle = Math.atan2(particle.y - e.clientY, particle.x - e.clientX);
        
        const pushDistance = influence * 40; // Much reduced push distance
        
        return {
          ...particle,
          targetX: particle.baseX + Math.cos(angle) * pushDistance,
          targetY: particle.baseY + Math.sin(angle) * pushDistance,
          opacity: Math.max(0.4, Math.min(1, particle.opacity + influence * 0.1)), // Minimal opacity change
          rotation: particle.rotation + influence * 2, // Much slower rotation
        };
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles - continuous drift + mouse interaction
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        // Update drift angle for continuous movement - very slow
        const newDriftAngle = particle.driftAngle + particle.driftSpeed * 0.001; // Much slower drift
        
        // Calculate new base position with very subtle drift
        const newBaseX = particle.baseX + Math.cos(newDriftAngle) * 8; // Much reduced drift distance
        const newBaseY = particle.baseY + Math.sin(newDriftAngle) * 5; // Much reduced drift distance
        
        // Keep particles within bounds
        const boundedBaseX = Math.max(0, Math.min(window.innerWidth, newBaseX));
        const boundedBaseY = Math.max(0, Math.min(window.innerHeight, newBaseY));
        
        return {
          ...particle,
          x: particle.x + (particle.targetX - particle.x) * 0.01, // Much slower movement
          y: particle.y + (particle.targetY - particle.y) * 0.01, // Much slower movement
          baseX: boundedBaseX,
          baseY: boundedBaseY,
          driftAngle: newDriftAngle,
          // Update target to follow the new base position when not influenced by mouse
          targetX: Math.abs(particle.targetX - particle.baseX) < 50 ? boundedBaseX : particle.targetX,
          targetY: Math.abs(particle.targetY - particle.baseY) < 50 ? boundedBaseY : particle.targetY,
        };
      }));
    };

    const interval = setInterval(animateParticles, 100); // Much slower update interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute transition-all duration-1000 ease-out font-mono font-bold select-none" // Much slower transition
          style={{
            left: particle.x,
            top: particle.y,
            fontSize: particle.size,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
            zIndex: 1,
          }}
        >
          {/* Light mode particles - Clean blue tech symbols */}
          <div className="dark:hidden text-blue-500/30 drop-shadow-sm hover:text-blue-600/40 transition-colors duration-1000"> 
            {particle.symbol}
          </div>
          
          {/* Dark mode particles - Glowing neon tech symbols */}
          <div 
            className="hidden dark:block text-cyan-400/40 transition-all duration-1000"
            style={{
              textShadow: `
                0 0 6px rgba(34, 211, 238, 0.3),
                0 0 12px rgba(34, 211, 238, 0.1),
                0 0 18px rgba(34, 211, 238, 0.05)
              `, // Much reduced glow intensity
              filter: `brightness(${1 + particle.opacity * 0.1})`,
            }}
          >
            {particle.symbol}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParticleBackground;
