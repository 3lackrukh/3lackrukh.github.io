import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      <div className="mb-8">
        <a 
          href="/your-resume.pdf" 
          download 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Download PDF Resume
        </a>
      </div>
      {/* Embedded resume preview */}
      <iframe 
        src="/your-resume.pdf" 
        className="w-full h-screen border rounded-lg"
        title="Resume Preview"
      />
    </div>
  );
};

export default Resume;