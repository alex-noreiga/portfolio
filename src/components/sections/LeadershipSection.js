import React from 'react';

const RecognitionItem = ({ text }) => (
  <li className="flex items-start">
    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <span className="text-gray-700">{text}</span>
  </li>
);

const LeadershipSection = () => {
  const recognitionItems = [
    'Engineer of the Year (2023), recognized by five corporate directors at Northrop Grumman for technical excellence and cross-team collaboration',
    'Nominated for Distinguished New Engineer Award by the Society of Women Engineers (2023)',
    'Received 11 performance recognitions from Northrop Grumman sector directors and program leadership (2020–2024)',
    'Mentored junior developers and interns across three engineering teams, focusing on scalable architecture, debugging, and testing methodologies',
    'Regularly presented at internal technical knowledge-sharing sessions, contributing to organizational learning and process improvement',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Leadership & Recognition</h2>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <ul className="space-y-4">
            {recognitionItems.map((item, index) => (
              <RecognitionItem key={index} text={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
