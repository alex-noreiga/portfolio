import React, { memo } from 'react';

const EducationCard = memo(({ degree, institution, location, period }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <div className="absolute top-6 right-6 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {period}
      </div>
      <h3 className="text-xl font-bold text-blue-600 mb-1">{degree}</h3>
      <h4 className="text-lg text-gray-600 mb-2">{institution}</h4>
      <p className="text-gray-700">{location}</p>
    </div>
  );
});

const EducationSection = () => {
  const educationItems = [
    {
      degree: 'Master of Science in Information Systems',
      institution: 'University of Alabama in Huntsville',
      location: 'Huntsville, AL',
      period: 'August 2022 - May 2025',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Alabama in Huntsville',
      location: 'Huntsville, AL',
      period: 'August 2016 - May 2020',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <EducationCard
                key={index}
                degree={item.degree}
                institution={item.institution}
                location={item.location}
                period={item.period}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(EducationSection);
