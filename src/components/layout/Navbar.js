import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const NAV_SECTIONS = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications', 'Contact'];

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-blue-600">Alexandra Noreiga</div>

          {/* Desktop Navigation */}
          <DesktopNav activeSection={activeSection} sections={NAV_SECTIONS} />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav
          isMenuOpen={isMenuOpen}
          activeSection={activeSection}
          sections={NAV_SECTIONS}
          onToggleMenu={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
