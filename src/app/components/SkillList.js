'use client';

import { useEffect, useState } from 'react';

const SkillList = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        const data = await response.json();
        setSkills(data.skills);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section className="my-10">
      <h2 className="text-3xl font-semibold mb-5 text-center animate-fadeIn">Skills</h2>
      <div className="bg-white shadow-md rounded-lg p-5 transition-transform duration-300 hover:scale-105">
        {skills.length > 0 ? (
          <ul className="list-disc pl-5">
            {skills.map((skill) => (
              <li key={skill._id} className="text-gray-600">{skill.name}</li>
            ))}
          </ul>
        ) : (
          <p>No skills to display.</p>
        )}
      </div>
    </section>
  );
};

export default SkillList;
