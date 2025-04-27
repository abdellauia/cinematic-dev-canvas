
import React, { useEffect } from 'react';
import { Award, Code, Sparkles, Brain, Users, Rocket } from 'lucide-react';

// Skills data
const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript/TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'AWS', level: 70 },
  { name: 'Python', level: 65 },
];

// Features
const features = [
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: 'Creative Solutions',
    description: 'Crafting innovative approaches to solve complex problems elegantly.'
  },
  {
    icon: <Brain className="h-8 w-8 text-accent" />,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and frameworks as they emerge.'
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Team Player',
    description: 'Collaborating effectively with cross-functional teams for shared success.'
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: 'Detail Oriented',
    description: 'Paying careful attention to every detail for pixel-perfect results.'
  },
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    title: 'Performance Focused',
    description: 'Optimizing applications for speed, efficiency, and user satisfaction.'
  },
];

const About = () => {
  // Animation for skill bars when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-skill-bar');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach((bar) => observer.observe(bar));

    return () => {
      skillBars.forEach((bar) => observer.unobserve(bar));
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-black/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 text-center max-w-3xl">
            Discover my journey, skills, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Story Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">My Story</h3>
            <div className="glass-panel p-6 space-y-6">
              <p className="text-gray-300">
                I'm a passionate developer with 5+ years of experience creating engaging digital experiences. 
                My journey began with a curiosity about how websites work, which led me to dive deep into web development.
              </p>
              <p className="text-gray-300">
                Throughout my career, I've had the opportunity to work on diverse projects—from startups to enterprise 
                applications—honing my skills across the full stack and developing an eye for design and user experience.
              </p>
              <p className="text-gray-300">
                What excites me most about development is the perfect blend of creativity and logic required to build 
                something that's both beautiful and functional. I'm constantly learning and experimenting with new technologies 
                to stay at the cutting edge of what's possible on the web.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12">My Skills</h3>
            <div className="glass-panel p-6 space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary to-secondary opacity-0" 
                      style={{ 
                        width: '0%', 
                        transition: 'width 1s ease-in-out, opacity 0.5s ease-in-out',
                      }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="glass-panel p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
