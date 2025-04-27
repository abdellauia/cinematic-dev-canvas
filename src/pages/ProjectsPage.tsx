
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const allProjects = [
  {
    id: 1,
    title: 'HR Management System',
    description: 'A comprehensive Human Resources Management System featuring leave request management and automated generation of work and salary certificates in PDF format. Built with Laravel backend and React frontend.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop',
    tags: ['Laravel', 'React', 'MySQL', 'Spatie Laravel'],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'AI-powered application that creates marketing copy, blog posts, and social media content based on user prompts.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
    tags: ['TypeScript', 'Next.js', 'OpenAI API', 'TailwindCSS'],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Fitness Tracker App',
    description: 'Mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop',
    tags: ['React Native', 'Firebase', 'Redux', 'D3.js'],
    github: '#',
    demo: '#'
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                My <span className="text-gradient">Projects</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
              <p className="text-lg text-gray-300 text-center max-w-3xl">
                Explore my complete portfolio of projects and applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-panel overflow-hidden group relative"
                >
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    
                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex space-x-3">
                        <a 
                          href={project.github} 
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.demo} 
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                      
                      <a 
                        href={project.demo}
                        className="flex items-center text-secondary hover:text-white transition-colors"
                      >
                        <span className="mr-1">View Project</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
