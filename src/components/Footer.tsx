import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-center space-x-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="mailto:your.email@example.com">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;