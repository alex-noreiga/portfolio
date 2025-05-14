import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const PortfolioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-blue-600">Alexandra Noreiga</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${activeSection === item.toLowerCase() ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white py-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 ${activeSection === item.toLowerCase() ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Alexandra Noreiga</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Senior Software Engineer</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
              A passionate software engineer with expertise in C++, Python, and modern web development.
              Specialized in building high-performance simulation systems and test automation frameworks.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              I am a Senior Software Engineer at SAIC in Huntsville, Alabama, where I develop and enhance high-fidelity 
              aviation simulation software using modern C++. With a strong background in software development and testing, 
              I specialize in creating efficient, scalable solutions for complex technical challenges.
            </p>
            <p className="text-lg mb-6">
              Throughout my career at SAIC and Northrop Grumman, I've focused on building innovative tools and frameworks 
              that improve testing processes, enhance system performance, and provide deeper insights into system behavior. 
              I have a passion for mentoring junior developers and contributing to continuous improvement initiatives.
            </p>
            <p className="text-lg">
              With a Master's degree in Information Systems from the University of Alabama in Huntsville and extensive 
              experience in both backend and frontend development, I bring a comprehensive skill set to every project 
              I undertake.
            </p>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Senior Software Engineer */}
            <div className="mb-12 bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                May 2024 - Present
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Senior Software Engineer</h3>
              <h4 className="text-lg text-gray-600 mb-4">SAIC, Huntsville, AL</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Develop and enhance high-fidelity aviation simulation software using modern C++, with a focus on realistic aircraft behavior modeling and system performance optimization</li>
                <li>Lead the design and implementation of a Python-based test orchestration framework that streamlines validation across simulation subsystems, featuring automated logging, error detection, and modular test execution</li>
                <li>Spearhead initiatives to refactor legacy C++ modules, improving modularity and documentation while introducing comprehensive unit test coverage with Google Test</li>
                <li>Collaborate in an Agile environment with cross-functional teams to implement and maintain core simulation components, resulting in measurable improvements to runtime performance</li>
                <li>Mentor junior developers on testing strategies and best practices, effectively bridging the gap between legacy QA processes and modern CI/CD-compatible solutions</li>
                <li>Prototype and evaluate tools for enhanced simulation telemetry capture and analysis, providing deeper insights into system behavior under edge-case scenarios</li>
              </ul>
            </div>
            
            {/* Software Engineer */}
            <div className="mb-12 bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                April 2022 - May 2024
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Software Engineer</h3>
              <h4 className="text-lg text-gray-600 mb-4">Northrop Grumman, Huntsville, AL</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Architected and implemented a distributed testing framework with Python microservices using Django and Flask, eliminating over 80% of manual testing and analysis processes</li>
                <li>Developed an AI-powered image verification tool for visual software requirements, significantly improving analysis processing time and software quality assurance</li>
                <li>Created a suite of analysis tools that reduced test case failure investigation time by 75% and application analysis time by over 90%</li>
                <li>Led technical demonstrations and presentations to chief engineers and program management, showcasing solution capabilities and performance improvements</li>
                <li>Mentored junior engineers and interns on implementing new software components and adopting emerging technologies</li>
              </ul>
            </div>
            
            {/* Associate Software Engineer */}
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                August 2020 - April 2022
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Associate Software Engineer</h3>
              <h4 className="text-lg text-gray-600 mb-4">Northrop Grumman, Boulder, CO</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Led development efforts for automated cybersecurity analysis tools, improving threat detection capabilities and response times</li>
                <li>Designed and implemented analysis tools to evaluate algorithm performance and automate complex analytical processes</li>
                <li>Conducted comprehensive hardware analysis studies and created action plans that measurably improved operational efficiency</li>
                <li>Facilitated cross-team collaboration to resolve critical software issues, serving as a technical liaison between development groups</li>
                <li>Presented weekly performance analysis reports to customers and program management, effectively communicating technical outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* EdgeUp Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">EdgeUp</h3>
                <p className="text-sm text-gray-500 mb-4">Next.js, Express.js, MongoDB, React, Node.js</p>
                <p className="text-gray-700 mb-4">A full-stack web application for tracking USFS/ISI Learn to Skate progress, with role-based dashboards for Coaches, Parents, and Skaters.</p>
                <ul className="list-disc ml-5 text-gray-700 text-sm mb-4">
                  <li>Built RESTful APIs with Express.js and integrated MongoDB for dynamic skater progress tracking</li>
                  <li>Implemented secure authentication and role-based access control</li>
                  <li>Orchestrated UI/UX development in Next.js with React</li>
                </ul>
                <div className="flex justify-end">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
                    View Details
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Starcrossed Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-600">Starcrossed</h3>
                <p className="text-sm text-gray-500 mb-4">JavaScript, Node.js, HTML/CSS, MongoDB</p>
                <p className="text-gray-700 mb-4">A responsive web application generating detailed astrological birth charts based on user-inputted time, date, and location data.</p>
                <ul className="list-disc ml-5 text-gray-700 text-sm mb-4">
                  <li>Created responsive frontend with interactive chart visualization</li>
                  <li>Built backend services with Node.js and MongoDB for data calculation and storage</li>
                  <li>Implemented automated CI/CD pipelines via TravisCI</li>
                </ul>
                <div className="flex justify-end">
                  <button className="text-purple-600 hover:text-purple-800 flex items-center text-sm">
                    View Details
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* ARCADIA Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-600">ARCADIA</h3>
                <p className="text-sm text-gray-500 mb-4">Python, PyGame, Turtle</p>
                <p className="text-gray-700 mb-4">A classic arcade game simulator using PyGame, featuring modular architecture and reusable game logic for Pong, Snake, and Frogger.</p>
                <ul className="list-disc ml-5 text-gray-700 text-sm mb-4">
                  <li>Developed multiple classic arcade games with consistent interfaces</li>
                  <li>Implemented object-oriented design patterns for scalability</li>
                  <li>Created adaptable UI that works across various screen resolutions</li>
                </ul>
                <div className="flex justify-end">
                  <button className="text-green-600 hover:text-green-800 flex items-center text-sm">
                    View Details
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Languages */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Python', 'Java', 'Bash', 'SQL', 'JavaScript'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Frameworks & Libraries */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Frameworks/Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['Django', 'Flask', 'Selenium', 'Google Test', 'React'].map((skill) => (
                    <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Developer Tools */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Jenkins', 'Docker', 'AWS', 'Azure', 'Atlassian Suite', 'Visual Studio', 'VS Code'].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership & Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership & Recognition</h2>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Engineer of the Year (2023), recognized by five corporate directors at Northrop Grumman for technical excellence and cross-team collaboration</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Nominated for Distinguished New Engineer Award by the Society of Women Engineers (2023)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Received 11 performance recognitions from Northrop Grumman sector directors and program leadership (2020–2024)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Mentored junior developers and interns across three engineering teams, focusing on scalable architecture, debugging, and testing methodologies</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Regularly presented at internal technical knowledge-sharing sessions, contributing to organizational learning and process improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* MS in Information Systems */}
              <div className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  August 2022 - May 2025
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-1">Master of Science in Information Systems</h3>
                <h4 className="text-lg text-gray-600 mb-2">University of Alabama in Huntsville</h4>
                <p className="text-gray-700">Huntsville, AL</p>
              </div>
              
              {/* BS in Computer Science */}
              <div className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  August 2016 - May 2020
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-1">Bachelor of Science in Computer Science</h3>
                <h4 className="text-lg text-gray-600 mb-2">University of Alabama in Huntsville</h4>
                <p className="text-gray-700">Huntsville, AL</p>
              </div>
              
              {/* Certificate in Project Management */}
              <div className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  August 2020 - May 2021
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-1">Certificate in Project Management</h3>
                <h4 className="text-lg text-gray-600 mb-2">University of California - Irvine</h4>
                <p className="text-gray-700">Irvine, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-lg">256-683-0146</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-lg">alexandra.noreiga@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Linkedin size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="text-lg">linkedin.com/in/alexandranoreiga</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Github size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">GitHub</p>
                      <p className="text-lg">github.com/alex-noreiga</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold">Alexandra Noreiga</p>
              <p className="text-sm">Senior Software Engineer</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Alexandra Noreiga. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;