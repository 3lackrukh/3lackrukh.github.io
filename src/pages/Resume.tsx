import React from 'react';
import StellaOctangula from '../components/TestCube';
import resumePDF from '../assets/documents/resume.pdf';

const Resume: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background animation */}
      <div className="fixed inset-0 w-full h-full">
        <StellaOctangula />
      </div>

      {/* Overlay gradient to soften the background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/70 to-gray-900" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen p-8 md:p-12">
        {/* Floating download button */}
        <div className="fixed top-8 right-8 z-20">
          <a 
            href={resumePDF} 
            download 
            className="inline-flex items-center px-6 py-3 text-lg font-medium
                      bg-gradient-to-r from-blue-600 to-blue-700
                      hover:from-blue-500 hover:to-blue-600
                      text-white rounded-lg transition-all duration-300
                      shadow-lg shadow-blue-500/25
                      backdrop-blur-sm"
          >
            Download PDF
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

        {/* PDF Container with less nesting and cleaner look */}
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[8.5/11] w-full
                        transform transition-transform duration-500 hover:scale-[1.02]">
            <iframe 
              src={resumePDF}
              className="w-full h-full rounded-lg shadow-2xl"
              title="Resume Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;