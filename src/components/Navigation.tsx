// src/components/Navigation.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigation } from '../contexts/NavigationContext';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const { navItems, setHoveredPath } = useNavigation();
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl font-bold text-white hover:text-gray-200 
                       transition-colors duration-300"
          >
            Your Name
          </Link>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-white/90 hover:text-white
                          transition-colors duration-300"
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: item.color }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;