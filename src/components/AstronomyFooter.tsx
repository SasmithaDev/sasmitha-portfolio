import { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, GithubIcon, LinkedinIcon } from 'lucide-react';
import * as THREE from 'three';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const AstronomyFooter = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentYear] = useState(new Date().getFullYear());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Create animated particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);
    const velocityArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
      
      velocityArray[i] = (Math.random() - 0.5) * 0.01;
      velocityArray[i + 1] = (Math.random() - 0.5) * 0.01;
      velocityArray[i + 2] = (Math.random() - 0.5) * 0.01;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x88ccff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocityArray[i];
        positions[i + 1] += velocityArray[i + 1];
        positions[i + 2] += velocityArray[i + 2];

        // Reset particles that go too far
        if (Math.abs(positions[i]) > 5) positions[i] *= -0.9;
        if (Math.abs(positions[i + 1]) > 5) positions[i + 1] *= -0.9;
        if (Math.abs(positions[i + 2]) > 5) positions[i + 2] *= -0.9;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      particleSystem.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

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
    <footer className="relative py-20 px-4 overflow-hidden" id="contact">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
          <h2 className="text-3xl font-bold text-white">Connect Across the Cosmos</h2>
        </div>
        
        <p className="text-gray-300 mb-12">
          Ready to explore new digital frontiers together? Let's make something stellar.
        </p>

        <div className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25"></div>
            <form onSubmit={handleSubmit} className="relative bg-slate-900/80 backdrop-blur-lg p-8 rounded-lg space-y-6">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800/50 rounded-lg border border-purple-500/20 
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                           text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800/50 rounded-lg border border-purple-500/20 
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                           text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800/50 rounded-lg border border-purple-500/20 
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                           text-white placeholder-gray-400 h-32 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white 
                         font-medium transition-colors duration-200 flex items-center justify-center gap-2 
                         disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-12 text-sm text-gray-400">
            © {currentYear} Sasmitha Weerakkody. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AstronomyFooter;