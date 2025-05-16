import React, { memo } from 'react';

const CertificationCard = memo(({ name, issuer, location, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <div className="absolute top-6 right-6 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
        {date}
      </div>
      <h3 className="text-xl font-bold text-green-600 mb-1">{name}</h3>
      <h4 className="text-lg text-gray-600 mb-2">{issuer}</h4>
      <p className="text-gray-700">{location}</p>
    </div>
  );
});

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'Certificate in Project Management',
      issuer: 'University of California - Irvine',
      location: 'Irvine, CA',
      date: 'May 2021',
    },
    // You can add more certifications here
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                name={cert.name}
                issuer={cert.issuer}
                location={cert.location}
                date={cert.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CertificationsSection);
