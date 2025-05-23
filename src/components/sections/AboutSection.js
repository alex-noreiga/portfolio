import React, { memo } from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            I am a Senior Software Engineer at SAIC in Huntsville, Alabama, where I develop and
            enhance high-fidelity aviation simulation software using modern C++. With a strong
            background in software development and testing, I specialize in creating efficient,
            scalable solutions for complex technical challenges.
          </p>
          <p className="text-lg mb-6">
            Throughout my career at SAIC and Northrop Grumman, I've focused on building innovative
            tools and frameworks that improve testing processes, enhance system performance, and
            provide deeper insights into system behavior. I have a passion for mentoring junior
            developers and contributing to continuous improvement initiatives.
          </p>
          <p className="text-lg">
            With a Master's degree in Information Systems from the University of Alabama in
            Huntsville and extensive experience in both backend and frontend development, I bring a
            comprehensive skill set to every project I undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);
