'use client';
import { useEffect, useState } from 'react';

const SkillList = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch('/api/skills');
      const data = await res.json();
      setSkills(data.skills); // Assuming the API returns a "skills" array
    };
    fetchSkills();
  }, []);

  return (
    <section className="bg-white p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={skill.id} className="text-gray-700">
            {skill.name}
            {index < skills.length - 1 && ','} {/* Add comma except for the last item */}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillList;
