import { Star, Telescope } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

const AstronomyAbout = () => {
  const skills: Skill[] = [
    { name: 'Stellar React', level: 90 },
    { name: 'Cosmic TypeScript', level: 85 },
    { name: 'Nebula Node.js', level: 88 },
    { name: 'Galactic AWS', level: 82 },
    { name: 'Astral TailwindCSS', level: 92 },
    { name: 'Lunar MongoDB', level: 86 }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Telescope className="w-6 h-6 text-purple-400" />
          <h2 className="text-3xl font-bold text-white">Exploring The Code Universe</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25"></div>
            <img
              src="./src/assets/new.avif"
              alt="Night sky with code"
              className="relative rounded-lg shadow-xl"
            />
            <div className="absolute top-2 right-2">
              <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Navigating the vast expanse of the digital cosmos, I'm a Full Stack Developer who explores the 
              boundaries of web technology. Like a cosmic cartographer, I map out elegant solutions that bridge 
              the frontend and backend universes, creating harmonious web experiences that resonate across the 
              digital spectrum.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="px-4 py-2 bg-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-full 
                             flex items-center gap-2 group hover:bg-blue-800/40 transition-colors"
                  >
                    <Star className="w-4 h-4 text-purple-400" />
                    <span className="text-blue-200 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstronomyAbout;