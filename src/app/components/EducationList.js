'use client';
import { useEffect, useState } from 'react';

const EducationList = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const res = await fetch('/api/education');
      const data = await res.json();
      console.log(data);
      
      setEducation(data.education);
    };
    fetchEducation();
  }, []);

  return (
    <section className="bg-white p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul>
        {education.map((edu) => (
          <li key={edu.id} className="mb-4">
            <strong>{edu.institution}</strong> 
            <p>{edu.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EducationList;
