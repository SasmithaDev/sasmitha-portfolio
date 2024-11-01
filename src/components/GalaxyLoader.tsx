import React from 'react';

interface GalaxyLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GalaxyLoader: React.FC<GalaxyLoaderProps> = ({ 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Galaxy Ring 1 */}
      <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-[spin_3s_linear_infinite]">
        <div className="absolute w-3 h-3 bg-blue-400 rounded-full -top-1.5 left-1/2 -translate-x-1.5 blur-[2px]" />
      </div>
      
      {/* Galaxy Ring 2 */}
      <div className="absolute inset-2 rounded-full border-2 border-emerald-400/30 animate-[spin_4s_linear_infinite_reverse]">
        <div className="absolute w-2 h-2 bg-emerald-400 rounded-full -top-1 left-1/2 -translate-x-1 blur-[2px]" />
      </div>
      
      {/* Galaxy Ring 3 */}
      <div className="absolute inset-4 rounded-full border-2 border-purple-400/30 animate-[spin_5s_linear_infinite]">
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full -top-1 left-1/2 -translate-x-1 blur-[2px]" />
      </div>
      
      {/* Center Core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-white rounded-full animate-pulse blur-[4px]" />
        <div className="absolute inset-0 w-2 h-2 bg-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Particle Effects */}
      <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse blur-[1px]"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 30}deg) translateX(${Math.random() * 100}%)`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GalaxyLoader;