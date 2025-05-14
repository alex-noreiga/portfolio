import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout = ({ children, activeSection }) => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar activeSection={activeSection} />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
