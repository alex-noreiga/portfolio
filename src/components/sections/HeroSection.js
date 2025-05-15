import React from 'react';
import { scrollToSection } from '../../utils/scrollUtils';
import Button from '../Button';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Alexandra Noreiga</h1>
          <h2 className="text-2xl text-gray-600 mb-6">Senior Software Engineer</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            A passionate software engineer with expertise in C++, Python, and modern web
            development. Specialized in building high-performance simulation systems and test
            automation frameworks.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="inline-block"
            >
              <Button variant="primary">
                Contact Me
              </Button>
            </a>
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="inline-block"
            >
              <Button variant="outlined">
                View Projects
              </Button>
            </a>
            <a
              href="/resume.pdf"
              download="Alexandra_Noreiga_Resume.pdf"
              className="inline-block"
            >
              <Button variant="primary" size="md" className="bg-green-600 hover:bg-green-700">
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
