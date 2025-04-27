
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-space font-bold text-gradient mb-4">MOHAMED BAHOCH</h3>
            <p className="text-gray-300 max-w-xs">
              Full Stack Developer passionate about creating exceptional digital experiences
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-300">Email: bahochmohamed3@gmail.com</p>
              <p className="text-gray-300">Location: Errachidia, Morocco</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/MohamedBahoch" className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/mohamed-bahoch" className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:bahochmohamed3@gmail.com" className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Mohamed Bahoch. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed & Built with 💜
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
