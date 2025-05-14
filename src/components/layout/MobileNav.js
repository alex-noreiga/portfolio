import React from 'react';
import { scrollToSection } from '../../utils/scrollUtils';

const MobileNav = ({ isMenuOpen, activeSection, sections, onToggleMenu }) => {
  const handleNavClick = sectionId => {
    scrollToSection(sectionId);
    onToggleMenu();
  };

  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden mt-4 bg-white py-2">
      {sections.map(item => (
        <button
          key={item}
          onClick={() => handleNavClick(item.toLowerCase())}
          className={`block w-full text-left px-4 py-2 ${
            activeSection === item.toLowerCase()
              ? 'text-blue-600 bg-blue-50 font-medium'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default MobileNav;
