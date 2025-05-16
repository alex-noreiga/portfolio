import React, { Suspense, lazy } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import Layout from './layout/Layout';
import HeroSection from './sections/HeroSection';

// Lazy load other sections
const AboutSection = lazy(() => import('./sections/AboutSection'));
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const SkillsSection = lazy(() => import('./sections/SkillsSection'));
const LeadershipSection = lazy(() => import('./sections/LeadershipSection'));
const EducationSection = lazy(() => import('./sections/EducationSection'));
const CertificationsSection = lazy(() => import('./sections/CertificationsSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

const PortfolioWebsite = () => {
  const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <Layout activeSection={activeSection}>
      <HeroSection />
      <Suspense
        fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}
      >
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LeadershipSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </Suspense>
    </Layout>
  );
};

export default PortfolioWebsite;
