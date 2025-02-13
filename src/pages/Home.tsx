// ./src/pages/Home.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StellaOctangula from '../components/TestCube';
import headshotImage from '../assets/images/home/Headshot.jpg';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Fixed background animation with overlay */}
      <div className="fixed inset-0">
        <StellaOctangula />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/25 to-gray-900/60" />
      </div>
    
      {/* Banner Section */}
      <div className="relative h-screen ">
        {/* Headshot that stays fixed while scrolling */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed left-8 xl:left-19 top-[16%] w-80 lg:w-96 z-10"
        >
          <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl relative group">
            <img
              src={headshotImage}
              alt="Nathan's profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              I'm Nathan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              A lifelong learner fascinated by human connection, bridging the worlds of human understanding and machine learning.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-white/60 text-sm">Scroll to explore</div>
          <div className="mt-2 w-6 h-10 rounded-full border-2 border-white/20 mx-auto">
            <div className="w-2 h-2 bg-white/60 rounded-full mx-auto mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <div className="relative z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Sticky Headshot Container */}
            <div className="lg:w-96 flex-shrink-0">
              <div className="sticky top-8">
                {/* Placeholder div to maintain space */}
                <div className="aspect-[3/4] w-full"/>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-6 md:p-8">
                <div className="text-white/90 space-y-6">
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="text-xl leading-relaxed">
                      AI and Machine Learning might seem like a detour from my background in Anthropology and non-profit work, but at{' '}
                      <a href="https://www.atlasschool.com" className="text-rose-400 hover:text-rose-300 transition-colors">
                        Atlas School Tulsa
                      </a>{' '}
                      I've felt these paths diffuse naturally into eachother - traces of each experience guiding the way to new possibilities.
                    </p>
                  </div>

                  <p className="text-xl leading-relaxed">
                    It doesn't seem to matter whether its reverse-engineering computer vision systems like{' '}
                    <a href="https://github.com/3lackrukh/object_detection" className="text-rose-400 hover:text-rose-300 transition-colors">
                      YOLOv3
                    </a>{' '}
                    to implement them from principles or creating{' '}
                    <a href="https://github.com/3lackrukh/atlas-live_codes" className="text-rose-400 hover:text-rose-300 transition-colors">
                      accessible programming resources
                    </a>{' '}
                    as a student tutor, collaborating with peers on an{' '}
                    <a href="https://github.com/kelciatkinson/atlas-AirBnB_clone_v4" className="text-rose-400 hover:text-rose-300 transition-colors">
                      AirBnB clone
                    </a>{' '}
                    or a{' '}
                    <a href="https://github.com/3lackrukh/atlas-simple_shell" className="text-rose-400 hover:text-rose-300 transition-colors">
                      custom Unix shell
                    </a>; our collective 'Aha!' moments are slowly carving a path toward more intuitive and inclusive technology.
                  </p>

                  <div className="pt-6">
                    <p className="text-xl leading-relaxed mb-6">
                      Have an idea you want to bat around or collaborate on?
                    </p>
                    <a href="https://www.linkedin.com/in/nathan-rhys/" 
                        className="inline-flex items-center px-6 py-3 text-lg font-medium
                                  bg-gradient-to-r from-rose-600 to-rose-700
                                  hover:from-rose-500 hover:to-rose-600
                                  text-white rounded-lg transition-all duration-300
                                  shadow-lg shadow-rose-500/25">
                      Let's Connect
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;