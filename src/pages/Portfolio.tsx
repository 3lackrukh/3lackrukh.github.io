// src/pages/Portfolio.tsx
import React from 'react';
import StellaOctangula from '../components/TestCube';
import MediaDisplay from '../components/MediaDisplay';

interface Project {
  title: string;
  description: string;
  media: {
    type: 'image' | 'embed';
    url: string;
  };
  githubLink: string;
  demoLink?: string;
  technologies: string[];
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Typedef / Struct Live-Code",
      description: "An educational resource demonstrating advanced C data structuring through live-coded examples. Uses a practical 'bento box' example to illustrate custom data types and memory management for beginner-to-intermediate programmers.",
      media: {
        type: 'embed' as const,
        url: "https://www.canva.com/design/DAGIcLI-VOo/_fuKx6tyYMk5Z3qehs83GQ/view?embed"      },
      githubLink: "https://github.com/3lackrukh/atlas-live_codes/blob/main/typedef_struct/README.md",
      technologies: ["C", "Data Structures", "Memory Management", "Computer Science"]
    },
    {
      title: "Docker Fundamentals",
      description: "A comprehensive introduction to Docker containerization, covering core concepts like containers vs VMs, Dockerfile syntax, and practical implementation. Features a live coding demonstration of creating and deploying a Flask API in a Docker container.",
      media: {
        type: 'embed' as const,
        url: "https://www.canva.com/design/DAGTuc_C-88/KT6cxYbSjkNPKuZ51jjkkg/view?embed"
      },
      githubLink: "https://github.com/3lackrukh/atlas-live_codes/tree/main/docker/project_files/README.md",
      technologies: ["Docker", "Flask", "Python", "API Development", "Containerization", "DevOps"]
    },
    {
      title: "AirBnB Clone",
      description: "A full-stack web application recreating core AirBnB functionalities. Built using Python and MySQL for the backend API, with a custom command interpreter for database manipulation and HTML/CSS/JavaScript frontend.",
      media: {
        type: 'image',
        url: "../src/images/portfolio/airbnbclone.jpg",
      },
      githubLink: "https://github.com/kelciatkinson/atlas-AirBnB_clone_v4/blob/master/README.md",
      technologies: ["Python", "MySQL", "HTML", "CSS", "JavaScript", "RESTful API"]
    },
    {
      title: "YOLOv3 Object Detection",
      description: "A computer vision project implementing the YOLO algorithm, breaking down complex concepts into digestible components. Built with Python, TensorFlow, and OpenCV to showcase real-world applications of deep learning principles.",
      media: {
        type: 'image',
        url: "../src/images/portfolio/ObjectDetection.jpg",
      },
      githubLink: "https://github.com/3lackrukh/object_detection/blob/master/README.md",
      technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Machine Learning"]
    },
    {
      title: "Simple Shell Implementation",
      description: "A custom Unix shell implementation supporting both interactive and non-interactive modes. Features include command execution, PATH handling, built-in commands, and environment variable management. Developed in C with system calls like fork, execve, and wait.",
      media: {
        type: 'image',
        url: "../src/images/portfolio/Shell.jpg",
      },
      githubLink: "https://github.com/3lackrukh/atlas-simple_shell",
      technologies: ["C", "Systems Programming", "Unix", "Process Management", "Shell Scripting"]
    },
    {
      title: "Transfer Learning with CIFAR-10",
      description: "A deep learning project achieving 94.48% validation accuracy on the CIFAR-10 dataset using transfer learning techniques. Implements various optimization strategies including spatial dropout, learning rate scheduling, and data augmentation. Built with TensorFlow/Keras.",
      media: {
        type: 'image',
        url: "../src/images/portfolio/transferlearning.jpg",
      },
      githubLink: "https://github.com/3lackrukh/atlas-machine_learning/tree/main/supervised_learning/transfer_learning",
      technologies: ["Python", "TensorFlow", "Keras", "Deep Learning", "Transfer Learning", "Computer Vision"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background animation */}
      <div className="fixed inset-0 w-full h-full">
        <StellaOctangula />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen py-16">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl
                      mx-8 md:mx-16 
                      max-w-6xl 
                      rounded-3xl p-6 md:p-8
                      transform transition-transform duration-700 ease-out">
          <section className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Projects
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} 
                     className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden
                                transform transition-all duration-500 hover:scale-[1.02]">
                  <MediaDisplay 
                    type={project.media.type}
                    url={project.media.url}
                    title={project.title}
                  />
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/80">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} 
                              className="px-3 py-1 rounded-full text-sm 
                                       bg-white/10 text-white/90
                                       backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-400 transition-colors"
                      >
                        GitHub
                      </a>
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-400 transition-colors"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;