import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Briefcase, User2 } from 'lucide-react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Sasmitha Weerakkody
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg text-blue-400 mb-8 font-semibold">
            "Vortex Dev"
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/SasmithaDev" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sasmithadev" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sasmith.dev@yahoo.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <ChevronDown className="w-6 h-6 absolute bottom-8 animate-bounce" />
      </header>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User2 className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Known as Vortex Dev in the tech community, I'm a passionate Full Stack Developer who thrives on creating 
                innovative web solutions. With expertise in both frontend and backend technologies, I bring ideas to life 
                through clean, efficient code and intuitive user experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'AWS', 'Tailwind CSS', 'MongoDB'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-900/50" id="projects">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with React and Node.js',
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Task Management App',
                description: 'Real-time task management with WebSocket integration',
                image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
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