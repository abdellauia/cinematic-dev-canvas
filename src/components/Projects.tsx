
import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for online store management with real-time analytics, inventory tracking, and order processing.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
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
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="glass-panel overflow-hidden group relative"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image with overlay */}
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {/* Tags */}
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
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-300 line-clamp-3">{project.description}</p>
        
        {/* Links */}
        <div className="pt-2 flex items-center justify-between">
          <div className="flex space-x-3">
            <a 
              href={project.github} 
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="View GitHub repository"
            >
              <Github size={18} />
            </a>
            <a 
              href={project.demo} 
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="View live demo"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          
          <a 
            href={project.demo}
            className="flex items-center text-secondary hover:text-white transition-colors group-hover:translate-x-1 duration-300"
          >
            <span className="mr-1">View Project</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500 group-hover:duration-200"></div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 text-center max-w-3xl">
            A showcase of my best work, personal projects, and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center glow-button"
          >
            <span className="relative z-10 flex items-center">
              View All Projects 
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
