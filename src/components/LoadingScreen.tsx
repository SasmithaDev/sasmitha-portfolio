import React from 'react';
import GalaxyLoader from './GalaxyLoader';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center z-50">
      <div className="text-center">
        <GalaxyLoader size="lg" className="mb-8" />
        <p className="text-blue-400 text-lg animate-pulse">Sasmitha.Dev</p>
      </div>
    </div>
  );
};

export default LoadingScreen;