'use client';
import { useEffect, useState } from 'react';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const res = await fetch('/api/experience');
      const data = await res.json();
      console.log(data);
      
      setExperiences(data.experience);
    };
    fetchExperiences();
  }, []);

  return (
    <section className="bg-white p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <ul>
      {experiences.map((experience) => (
          <li key={experience.id} className="mb-4">
            <strong>{experience.role}</strong>
            <p className="text-gray-700 mt-2">{experience.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceList;
