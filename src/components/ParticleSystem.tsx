// ParticleSystem.tsx
import React, { useEffect, useState } from 'react';
import Particle from './Particle';

interface ParticleSystemProps {
  radius: number;
  speed: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ radius, speed }) => {
  const particles = Array.from({ length: 10 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const animate = () => {
      setRotation((prevRotation) => prevRotation + speed); // Adjust rotation based on speed prop
      requestAnimationFrame(animate);
    };
    animate();
  }, [speed]);

  return (
    <div className="particle-system" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      {particles.map((_, index) => {
        const angle = (index / particles.length) * 2 * Math.PI + rotation;
        const size = Math.random() * 2 + 1; // Randomize particle size
        return <Particle key={index} angle={angle} radius={radius} size={size} />;
      })}
    </div>
  );
};

export default ParticleSystem;
