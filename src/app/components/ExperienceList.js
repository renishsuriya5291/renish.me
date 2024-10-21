'use client';

import { useEffect, useState } from 'react';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('/api/experience');
        const data = await response.json();
        setExperiences(data.experience);
      } catch (error) {
        console.error('Failed to fetch experiences:', error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <section className="my-10">
      <h2 className="text-3xl font-semibold mb-5 text-center animate-fadeIn">Experience</h2>
      <div className="space-y-4">
        {experiences.length > 0 ? (
          experiences.map((experience) => (
            <div key={experience._id} className="bg-white shadow-md rounded-lg p-5 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold">{experience.role} at {experience.company}</h3>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))
        ) : (
          <p>No experience to display.</p>
        )}
      </div>
    </section>
  );
};

export default ExperienceList;
