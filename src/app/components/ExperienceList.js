"use client";
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
    <section className="my-10 px-4">
      <h2 className="text-4xl font-bold mb-6 text-center animate-fadeIn">Experience</h2>
      <div className="space-y-6">
        {experiences.length > 0 ? (
          experiences.map((experience) => (
            <div key={experience._id} className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold">{experience.role} at {experience.company}</h3>
              <p className="text-gray-700">{experience.description}</p>
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
