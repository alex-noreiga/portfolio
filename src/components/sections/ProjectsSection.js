import React, { useState } from 'react';
import { ChevronRight, ExternalLink, Github, Calendar, Tag, CheckCircle } from 'lucide-react';
import Modal from '../ui/modal/Modal';

const ProjectTag = ({ text }) => (
  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
    {text}
  </span>
);

const ProjectCard = ({ project, onClick }) => {
  const { title, technologies, description, highlights, color } = project;

  // Handle Tailwind's JIT compiler by pre-defining the color combinations
  const colorClasses = {
    blue: {
      border: 'border-blue-600',
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      hover: 'hover:text-blue-800',
      hoverBg: 'hover:bg-blue-700',
    },
    purple: {
      border: 'border-purple-600',
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      hover: 'hover:text-purple-800',
      hoverBg: 'hover:bg-purple-700',
    },
    green: {
      border: 'border-green-600',
      bg: 'bg-green-600',
      text: 'text-green-600',
      hover: 'hover:text-green-800',
      hoverBg: 'hover:bg-green-700',
    },
    orange: {
      border: 'border-orange-600',
      bg: 'bg-orange-600',
      text: 'text-orange-600',
      hover: 'hover:text-orange-800',
      hoverBg: 'hover:bg-orange-700',
    },
    cyan: {
      border: 'border-cyan-600',
      bg: 'bg-cyan-600',
      text: 'text-cyan-600',
      hover: 'hover:text-cyan-800',
      hoverBg: 'hover:bg-cyan-700',
    },
  };

  const colorClass = colorClasses[color] || colorClasses.blue;

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 ${colorClass.border} transition-transform hover:transform hover:scale-[1.02] hover:shadow-xl`}
    >
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${colorClass.text}`}>{title}</h3>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <ProjectTag key={i} text={tech} />
          ))}
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="list-disc ml-5 text-gray-700 text-sm mb-4">
          {highlights.slice(0, 2).map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
          {highlights.length > 2 && (
            <li className="text-gray-500 italic">{highlights.length - 2} more highlights...</li>
          )}
        </ul>
        <div className="flex justify-end">
          <button
            onClick={onClick}
            className={`${colorClass.text} ${colorClass.hover} flex items-center text-sm font-medium`}
          >
            View Details
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail = ({ project }) => {
  const {
    title,
    technologies,
    description,
    highlights,
    longDescription,
    timeline,
    demoUrl,
    repoUrl,
    images,
    role,
    keyLearnings,
    color,
  } = project;

  // Same color mapping as in ProjectCard
  const colorClasses = {
    blue: {
      border: 'border-blue-600',
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      hover: 'hover:text-blue-800',
      hoverBg: 'hover:bg-blue-700',
    },
    purple: {
      border: 'border-purple-600',
      bg: 'bg-purple-600',
      text: 'text-purple-600',
      hover: 'hover:text-purple-800',
      hoverBg: 'hover:bg-purple-700',
    },
    green: {
      border: 'border-green-600',
      bg: 'bg-green-600',
      text: 'text-green-600',
      hover: 'hover:text-green-800',
      hoverBg: 'hover:bg-green-700',
    },
    orange: {
      border: 'border-orange-600',
      bg: 'bg-orange-600',
      text: 'text-orange-600',
      hover: 'hover:text-orange-800',
      hoverBg: 'hover:bg-orange-700',
    },
    cyan: {
      border: 'border-cyan-600',
      bg: 'bg-cyan-600',
      text: 'text-cyan-600',
      hover: 'hover:text-cyan-800',
      hoverBg: 'hover:bg-cyan-700',
    },
  };

  const colorClass = colorClasses[color] || colorClasses.blue;

  return (
    <div className="space-y-6">
      {/* Project header with links */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center mb-2">
            <Calendar size={18} className="mr-2 text-gray-500" />
            <span className="text-gray-600">{timeline || 'Ongoing'}</span>
          </div>
          <div className="flex items-center">
            <Tag size={18} className="mr-2 text-gray-500" />
            <span className="text-gray-600">{role || 'Full-Stack Developer'}</span>
          </div>
        </div>
        <div className="flex gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-4 py-2 rounded-md ${colorClass.bg} text-white ${colorClass.hoverBg} transition-colors`}
            >
              <Github size={18} className="mr-2" />
              Repository
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-4 py-2 rounded-md border ${colorClass.border} ${colorClass.text} hover:bg-gray-50 transition-colors`}
            >
              <ExternalLink size={18} className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <ProjectTag key={i} text={tech} />
          ))}
        </div>
      </div>

      {/* Project description */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Overview</h3>
        <p className="text-gray-700">{longDescription || description}</p>
      </div>

      {/* Features & Highlights */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Key Features</h3>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={20} className={`mr-2 mt-0.5 ${colorClass.text}`} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Learnings */}
      {keyLearnings && (
        <div>
          <h3 className="text-lg font-semibold mb-3">What I Learned</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {keyLearnings.map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Project Images */}
      {images && images.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Screenshots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden border">
                <img
                  src={image.url}
                  alt={image.alt || `${title} screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'EdgeUp',
      technologies: ['Next.js', 'Express.js', 'MongoDB', 'React', 'Node.js'],
      description:
        'A full-stack web application for tracking USFS/ISI Learn to Skate progress, with role-based dashboards for Coaches, Parents, and Skaters.',
      longDescription:
        'EdgeUp is a comprehensive tracking application for figure skating coaches and students that supports the Learn to Skate USA curriculum. It provides a visually intuitive interface for coaches to document student progress and for students and parents to view their advancement through skills and levels.',
      highlights: [
        'Built RESTful APIs with Express.js and integrated MongoDB for dynamic skater progress tracking',
        'Implemented secure authentication and role-based access control',
        'Orchestrated UI/UX development in Next.js with React',
        'Created a responsive and accessible design using Tailwind CSS',
        'Implemented real-time notifications for progress updates',
      ],
      color: 'blue',
      timeline: 'January 2023 - Present',
      role: 'Full-Stack Developer & Project Lead',
      repoUrl: 'https://github.com/alex-noreiga/edgeup',
      demoUrl: 'https://edgeup-demo.vercel.app',
      keyLearnings: [
        'Designing a secure role-based access control system',
        'Building a real-time notification system with WebSockets',
        'Implementing responsive data visualizations for progress tracking',
      ],
      images: [
        { url: '/assets/projects/edgeup-dashboard.png', alt: 'EdgeUp Coach Dashboard' },
        { url: '/assets/projects/edgeup-progress.png', alt: 'Skater Progress View' },
      ],
    },
    {
      title: 'Starcrossed',
      technologies: ['JavaScript', 'Node.js', 'HTML/CSS', 'MongoDB'],
      description:
        'A responsive web application generating detailed astrological birth charts based on user-inputted time, date, and location data.',
      longDescription:
        'Starcrossed combines traditional astrological calculation methods with modern design to create accurate, detailed birth charts. Users can create accounts to save multiple charts, compare compatibility between charts, and access personalized interpretations.',
      highlights: [
        'Created responsive frontend with interactive chart visualization',
        'Built backend services with Node.js and MongoDB for data calculation and storage',
        'Implemented automated CI/CD pipelines via TravisCI',
        'Designed an intuitive UI for complex astrological data',
        'Integrated with geocoding APIs for accurate location-based calculations',
      ],
      color: 'purple',
      timeline: 'August 2022 - December 2022',
      role: 'Frontend Lead & UX Designer',
      repoUrl: 'https://github.com/alex-noreiga/starcrossed',
      demoUrl: 'https://starcrossed-demo.netlify.app',
      keyLearnings: [
        'Creating interactive SVG visualizations with JavaScript',
        'Optimizing performance for complex calculations in the browser',
        'Implementing secure user authentication and data privacy',
      ],
      images: [
        { url: '/assets/projects/starcrossed-chart.png', alt: 'Starcrossed Birth Chart' },
        { url: '/assets/projects/starcrossed-profile.png', alt: 'User Profile Page' },
      ],
    },
    {
      title: 'ARCADIA',
      technologies: ['Python', 'PyGame', 'Turtle'],
      description:
        'A classic arcade game simulator using PyGame, featuring modular architecture and reusable game logic for Pong, Snake, and Frogger.',
      longDescription:
        'ARCADIA is a nostalgic tribute to classic arcade games, reimagined with modern code architecture. The application features multiple games with consistent controls and interfaces, packaged in a retro-styled launcher. Each game is built with a modular design that allows for easy expansion and customization.',
      highlights: [
        'Developed multiple classic arcade games with consistent interfaces',
        'Implemented object-oriented design patterns for scalability',
        'Created adaptable UI that works across various screen resolutions',
        'Built a comprehensive scoring and achievement system',
        'Designed a retro-styled UI with custom pixel art assets',
      ],
      color: 'green',
      timeline: 'March 2022 - June 2022',
      role: 'Lead Developer',
      repoUrl: 'https://github.com/alex-noreiga/arcadia',
      demoUrl: null,
      keyLearnings: [
        'Implementing game physics and collision detection',
        'Managing state across different game modes and levels',
        'Creating responsive controls that work well on different devices',
      ],
      images: [
        { url: '/assets/projects/arcadia-launcher.png', alt: 'ARCADIA Game Launcher' },
        { url: '/assets/projects/arcadia-snake.png', alt: 'Snake Game' },
      ],
    },
  ];

  const handleOpenModal = project => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleOpenModal(project)} />
          ))}
        </div>

        {/* Project Detail Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProject?.title || ''}
          size="lg"
        >
          {selectedProject && <ProjectDetail project={selectedProject} />}
        </Modal>
      </div>
    </section>
  );
};

export default ProjectsSection;
