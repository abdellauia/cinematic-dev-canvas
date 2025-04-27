
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    degree: "Full Stack Web Development Training",
    institution: "3W Academy Bootcamp",
    year: "2024",
    location: "Morocco",
    description: "Intensive bootcamp focused on modern web development technologies and practices."
  },
  {
    id: 2,
    degree: "Professional Qualification in Digital Development Option: Digital Developer",
    institution: "ISTA NTIC SYBA Errachidia",
    year: "2021 - 2023",
    location: "Errachidia, Morocco",
    description: "Specialized in digital development with focus on web and software development."
  }
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 text-center max-w-3xl">
            My academic journey and qualifications
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="glass-panel p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gradient font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-1">{edu.year}</p>
                  <p className="text-gray-400 mb-3">{edu.location}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
