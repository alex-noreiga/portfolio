import React from 'react';

const SkillCategory = ({ title, skills, colorClass }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 text-blue-600">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className={`${colorClass} px-3 py-1 rounded-full text-sm`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Python', 'Java', 'Bash', 'SQL', 'JavaScript'],
      colorClass: 'bg-blue-100 text-blue-800',
    },
    {
      title: 'Frameworks/Libraries',
      skills: ['Django', 'Flask', 'Selenium', 'Google Test', 'React'],
      colorClass: 'bg-purple-100 text-purple-800',
    },
    {
      title: 'Developer Tools',
      skills: [
        'Git',
        'Jenkins',
        'Docker',
        'AWS',
        'Azure',
        'Atlassian Suite',
        'Visual Studio',
        'VS Code',
      ],
      colorClass: 'bg-green-100 text-green-800',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
                colorClass={category.colorClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
