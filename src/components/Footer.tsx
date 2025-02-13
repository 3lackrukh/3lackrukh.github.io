import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const iconAnimation = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.1, 
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const IconLink = ({ href, icon: Icon, label }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={iconAnimation}
      className="p-2 rounded-full transition-colors duration-300 
                 hover:bg-white/10 focus:outline-none focus:ring-2 
                 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <Icon className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-300" />
    </motion.a>
  );

  return (
    <footer className="relative z-50 bg-gray-900 text-white py-6 mt-8 border-t border-white/10">
      <div className="container mx-auto flex justify-center space-x-8">
        <IconLink 
          href="https://github.com/3lackrukh"
          icon={Github}
          label="GitHub Profile"
        />
        <IconLink 
          href="https://www.linkedin.com/in/nathan-rhys/"
          icon={Linkedin}
          label="LinkedIn Profile"
        />
        <IconLink 
          href="mailto:nathan.rhys@atlasschool.com"
          icon={Mail}
          label="Email Contact"
        />
      </div>
    </footer>
  );
};

export default Footer;