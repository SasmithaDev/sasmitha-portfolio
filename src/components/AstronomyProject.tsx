import { Rocket, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const AstronomyProjects = () => {
  const [, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'E-commerce solution crafted with React',
      image: 'src/assets/project3.png',
      link: 'https://www.orgainland.com/',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Cosmic Dashboard',
      description: 'Real-time space mission control interface for monitoring stellar operations',
      image: '/api/placeholder/800/600',
      link: '#',
      technologies: ['Three.js', 'WebGL', 'React']
    }
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Create star particles
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.02
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative py-20 px-4 overflow-hidden" id="projects">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-12">
          <Rocket className="w-6 h-6 text-purple-400 animate-pulse" />
          <h2 className="text-3xl font-bold text-white">Celestial Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 
                            group-hover:opacity-75 transition-opacity"></div>
              
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 
                           group-hover:scale-110 rounded-t-lg"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 to-transparent 
                              flex flex-col justify-end p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 
                                 transition-colors">{project.title}</h3>
                    
                    <p className="text-gray-300 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded-full bg-purple-900/50 text-purple-300 
                                   border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 
                               transition-colors group/link"
                    >
                      <span>Explore Project</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 
                                             group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40"></div>
    </section>
  );
};

export default AstronomyProjects;