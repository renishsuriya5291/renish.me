"use client";
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
    <section className="my-10 px-4">
      <h2 className="text-4xl font-bold mb-6 text-center animate-fadeIn">Skills</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
        {skills.length > 0 ? (
          <ul className="list-disc pl-5">
            {skills.map((skill) => (
              <li key={skill._id} className="text-gray-700">{skill.name}</li>
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
