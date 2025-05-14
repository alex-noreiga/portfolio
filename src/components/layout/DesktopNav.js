import React from 'react';
import { scrollToSection } from '../../utils/scrollUtils';

const NavLink = ({ item, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}
    >
      {item}
    </button>
  );
};

const DesktopNav = ({ activeSection, sections }) => {
  return (
    <div className="hidden md:flex space-x-8">
      {sections.map(item => (
        <NavLink
          key={item}
          item={item}
          isActive={activeSection === item.toLowerCase()}
          onClick={() => scrollToSection(item.toLowerCase())}
        />
      ))}
    </div>
  );
};

export default DesktopNav;
