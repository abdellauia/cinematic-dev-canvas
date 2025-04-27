import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Census Surveyor',
    company: 'High Commission for Planning, Morocco',
    location: 'Morocco',
    period: '15 Aug 2024 - 30 Sep 2024',
    description: 'Participated in national census data collection and analysis.',
  },
  {
    id: 2,
    role: 'IT Service Manager',
    company: 'Domaine Bahoch Mohamed',
    location: 'Morocco',
    period: '01 Aug 2023 - 31 Aug 2024',
    description: 'Managed IT services and infrastructure for the organization.',
  },
  {
    id: 3,
    role: 'Intern in Computer Installation and Repair',
    company: 'Sadki Info Errachidia',
    location: 'Errachidia, Morocco',
    period: '01 Sep 2021 - 01 Dec 2021',
    description: 'Gained hands-on experience in computer hardware installation and repair.',
  },
];

const Experience = () => {
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
      transition: { 
        duration: 0.5,
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-black/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 text-center max-w-3xl">
            My professional journey and career milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                variants={itemVariants}
                className={`relative flex flex-col sm:flex-row gap-8 items-start ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] sm:left-1/2 transform sm:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20"></div>
                
                {/* Content card */}
                <div className="sm:w-[calc(50%-20px)] glass-panel p-6 transition-all hover:-translate-y-1 hover:border-primary/40 duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-gradient mb-3">{exp.company}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
