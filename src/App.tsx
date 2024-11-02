import { Github, Linkedin, Mail, ChevronDown, Briefcase } from 'lucide-react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import LoadingScreen from './components/LoadingScreen';
import { useLoading } from './context/LoadingContext';
import './index.css';
import './App.css';
import GalaxyBackground from './components/GalaxyBackground';
import AstronomyAbout from './components/AstronomyAbout';

export default function App() {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />
      
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      <div 
          className="absolute inset-0" 
          style={{
            marginTop: window.innerWidth <= 768 ? '-200px' : '0px'
          }}
        >
          <GalaxyBackground />
        </div>

    
        <div className="max-w-4xl mx-auto text-center relative z-10">
        <div 
          className="relative backdrop-blur-none bg-black/20 bg-transparent p-8 rounded-lg" 
          style={{ marginTop: '400px' }}
        >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent animate-gradient">
              Sasmitha Weerakkody
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Full Stack Developer
            </p>
            <p className="text-lg text-blue-400 mb-8 font-semibold">
              "Sasmitha Dev"
            </p>
            
            <div className="flex gap-4 justify-center mb-12">
              <a 
                href="https://github.com/SasmithaDev" 
                className="hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sasmithadev" 
                className="hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:sasmith.dev@yahoo.com" 
                className="hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <ChevronDown className="w-6 h-6 absolute bottom-8 animate-bounce text-white/70 z-10" />
      </header>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <AstronomyAbout />
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-900/50" id="projects">
        
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4" id="experience">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                role: 'Full Stack Developer',
                company: 'Tech Innovations Ltd',
                period: '2023 - Present',
                description: 'Leading full-stack development projects and mentoring junior developers'
              },
              {
                role: 'Web Developer',
                company: 'Digital Solutions Inc',
                period: '2023 - 2023',
                description: 'Developed and maintained various web applications using modern technologies'
              }
            ].map((job, index) => (
              <div key={index} className="border-l-2 border-blue-400 pl-6 relative">
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-2" />
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="text-blue-400 mb-2">{job.company} | {job.period}</p>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-20 px-4 bg-gray-900/50" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-300 mb-12">
            I'm always open to discussing new projects and opportunities.
          </p>
          <ContactForm />
          <div className="mt-12 text-sm text-gray-400">
            © {new Date().getFullYear()} Sasmitha Weerakkody. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}