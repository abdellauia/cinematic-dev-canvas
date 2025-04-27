
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import framer-motion for animations
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Style for showing skill bars
    const showSkillBars = () => {
      const skillBars = document.querySelectorAll('.skill-bar-fill');
      skillBars.forEach((bar) => {
        if (bar instanceof HTMLElement) {
          const width = bar.getAttribute('data-width') || '0%';
          bar.style.width = width;
          bar.style.opacity = '1';
        }
      });
    };

    // Initialize observers for animation triggers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showSkillBars();
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
