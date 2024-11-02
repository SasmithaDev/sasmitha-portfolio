// Particle.tsx
import React from 'react';

interface ParticleProps {
  angle: number;
  radius: number;
  size: number;
}

const Particle: React.FC<ParticleProps> = ({ angle, radius, size }) => {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div
      style={{
        position: 'absolute',
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#fff',
        borderRadius: '50%',
        opacity: 0.7,
      }}
    />
  );
};

export default Particle;
