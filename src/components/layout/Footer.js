import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Alexandra Noreiga</p>
            <p className="text-sm">Senior Software Engineer</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/alexandranoreiga"
              className="hover:text-blue-300 transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/alex-noreiga"
              className="hover:text-blue-300 transition duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:alexandra.noreiga@gmail.com"
              className="hover:text-blue-300 transition duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Alexandra Noreiga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
