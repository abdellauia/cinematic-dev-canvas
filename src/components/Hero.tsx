
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Particles from '@/components/Particles';
import Typewriter from '@/components/Typewriter';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 px-4 md:px-0">
      <Particles className="absolute inset-0 z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className={`lg:col-span-8 space-y-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-2xl md:text-3xl text-accent font-medium">
              Hello, I'm
            </h1>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-white">Alex</span>
              <span className="text-gradient"> Johnson</span>
            </h2>
            
            <div className="h-12">
              <Typewriter
                phrases={[
                  'Full-Stack Developer',
                  'UI/UX Designer',
                  'Tech Enthusiast',
                  'Problem Solver'
                ]}
                speed={100}
                className="text-xl md:text-2xl text-gray-300"
              />
            </div>
            
            <p className="text-gray-300 text-lg max-w-2xl">
              I build exceptional and accessible digital experiences for the web. 
              Focused on creating elegant solutions with modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                className="glow-button"
              >
                <span className="relative z-10">View My Work</span>
              </a>
              <a 
                href="#contact" 
                className="border border-white/20 hover:border-white/40 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex space-x-5 pt-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={22} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter size={22} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className={`lg:col-span-4 relative ${isLoaded ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl animate-pulse-slow"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent to-primary opacity-20 blur-2xl animate-pulse-slow animation-delay-2000"></div>
              <div className="relative h-full w-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80')] bg-cover bg-center rounded-full border-4 border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
