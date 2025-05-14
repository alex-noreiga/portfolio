import React from 'react';

const ExperienceCard = ({ title, company, location, period, responsibilities }) => {
  return (
    <div className="mb-12 bg-white rounded-lg shadow-md p-6 relative">
      <div className="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {period}
      </div>
      <h3 className="text-2xl font-bold text-blue-600 mb-2">{title}</h3>
      <h4 className="text-lg text-gray-600 mb-4">
        {company}, {location}
      </h4>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'SAIC',
      location: 'Huntsville, AL',
      period: 'May 2024 - Present',
      responsibilities: [
        'Develop and enhance high-fidelity aviation simulation software using modern C++, with a focus on realistic aircraft behavior modeling and system performance optimization',
        'Lead the design and implementation of a Python-based test orchestration framework that streamlines validation across simulation subsystems, featuring automated logging, error detection, and modular test execution',
        'Spearhead initiatives to refactor legacy C++ modules, improving modularity and documentation while introducing comprehensive unit test coverage with Google Test',
        'Collaborate in an Agile environment with cross-functional teams to implement and maintain core simulation components, resulting in measurable improvements to runtime performance',
        'Mentor junior developers on testing strategies and best practices, effectively bridging the gap between legacy QA processes and modern CI/CD-compatible solutions',
        'Prototype and evaluate tools for enhanced simulation telemetry capture and analysis, providing deeper insights into system behavior under edge-case scenarios',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Northrop Grumman',
      location: 'Huntsville, AL',
      period: 'April 2022 - May 2024',
      responsibilities: [
        'Architected and implemented a distributed testing framework with Python microservices using Django and Flask, eliminating over 80% of manual testing and analysis processes',
        'Developed an AI-powered image verification tool for visual software requirements, significantly improving analysis processing time and software quality assurance',
        'Created a suite of analysis tools that reduced test case failure investigation time by 75% and application analysis time by over 90%',
        'Led technical demonstrations and presentations to chief engineers and program management, showcasing solution capabilities and performance improvements',
        'Mentored junior engineers and interns on implementing new software components and adopting emerging technologies',
      ],
    },
    {
      title: 'Associate Software Engineer',
      company: 'Northrop Grumman',
      location: 'Boulder, CO',
      period: 'August 2020 - April 2022',
      responsibilities: [
        'Led development efforts for automated cybersecurity analysis tools, improving threat detection capabilities and response times',
        'Designed and implemented analysis tools to evaluate algorithm performance and automate complex analytical processes',
        'Conducted comprehensive hardware analysis studies and created action plans that measurably improved operational efficiency',
        'Facilitated cross-team collaboration to resolve critical software issues, serving as a technical liaison between development groups',
        'Presented weekly performance analysis reports to customers and program management, effectively communicating technical outcomes',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
