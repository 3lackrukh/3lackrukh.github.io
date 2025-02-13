import React from 'react';
import StellaOctangula from '../components/TestCube';
import resumePDF from '../assets/documents/Resume.pdf';

const Resume = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background animation */}
      <div className="fixed inset-0 w-full h-full">
        <StellaOctangula />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen py-16">
        <div className="mt-32 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl
                      mx-8 md:mx-16 
                      max-w-6xl 
                      rounded-3xl p-6 md:p-8
                      transform transition-transform duration-700 ease-out">
          <section className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Computers eat these . . .
            </h1>
            
            <div className="mb-8">
              <a 
                href={resumePDF}
                download
                className="inline-flex items-center px-6 py-3 text-lg font-medium
                          bg-gradient-to-r from-blue-600 to-blue-700
                          hover:from-blue-500 hover:to-blue-600
                          text-white rounded-lg transition-all duration-300
                          shadow-lg shadow-blue-500/25"
              >
                Download Resume
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
            
            {/* Embedded resume preview */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <iframe 
                src={resumePDF}
                className="w-full h-[800px] border-0"
                title="Resume Preview"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;