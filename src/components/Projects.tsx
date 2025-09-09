import React from 'react';
import { ExternalLink, Github, Car, BookOpen, Plus } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SmoothWheelz",
      description: "A comprehensive car sales platform built with modern web technologies. Features include vehicle listings, advanced search filters, detailed car specifications, and user-friendly interface for both buyers and sellers.",
      image: "/WhatsApp Image 2025-06-28 at 12.45.54_3f09a3f3.jpg",
      technologies: ["React", "JavaScript", "CSS", "Node.js"],
      liveUrl: "http://smoothwheelz.com/",
      githubUrl: "https://github.com/onyislo/smoothwheelz",
      icon: <Car className="h-6 w-6" />,
      color: "blue"
    },
    {
      id: 2,
      title: "MIC3 Solution Group LMS",
      description: "A robust Learning Management System designed to facilitate online education. Includes course management, student enrollment, progress tracking, assignments, quizzes, and comprehensive analytics dashboard.",
      image: "/WhatsApp Image 2025-08-19 at 08.52.55_121795ab.jpg",
      technologies: ["Angular", "Python", "CSS", "Database"],
      liveUrl: "https://mic3solutiongroup.com/",
      githubUrl: "#",
      icon: <BookOpen className="h-6 w-6" />,
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', text: 'text-blue-600' },
      green: { bg: 'bg-green-500', hover: 'hover:bg-green-600', text: 'text-green-600' },
      purple: { bg: 'bg-purple-500', hover: 'hover:bg-purple-600', text: 'text-purple-600' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've built. These represent just a few of the many websites and applications I've developed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Site
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`p-2 ${getColorClasses(project.color).bg} text-white rounded-lg mr-3`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center ${getColorClasses(project.color).text} hover:underline font-medium`}
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Showcase */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
            <Plus className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            These featured projects represent just a fraction of my portfolio. I have built many more websites 
            and applications across various industries and technologies. Each project has been crafted with 
            attention to detail, modern best practices, and user experience in mind. You can view more of my projects on my 
            GitHub profile at <a href="https://github.com/onyislo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/onyislo</a>.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">E-commerce Sites</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">Business Websites</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">Web Applications</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">Landing Pages</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">Custom Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;