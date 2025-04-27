
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Particles from '@/components/Particles';
import Typewriter from '@/components/Typewriter';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
              <span className="text-white">Ouhssini</span>
              <span className="text-gradient"> Ahmed</span>
            </h2>
            
            <div className="h-12">
              <Typewriter
                phrases={[
                  'Web Developer',
                  'Laravel Developer',
                  'React Developer',
                  'Frontend Developer'
                ]}
                speed={100}
                className="text-xl md:text-2xl text-gray-300"
              />
            </div>
            
            <p className="text-gray-300 text-lg max-w-2xl">
              Web developer in training, passionate about technologies like Laravel, React, and JavaScript. 
              I love learning and taking on technical challenges while creating functional and high-performance web applications.
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
                href="https://www.github.com/ouhssini" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ouhssini" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:Ahmedouhssini@gmail.com" 
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
              <div className="relative h-full w-full bg-[url('/lovable-uploads/e2aa26ae-4c1e-4935-be8a-599645676604.png')] bg-cover bg-center rounded-full border-4 border-white/10 overflow-hidden">
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
