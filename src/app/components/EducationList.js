'use client';

import { useEffect, useState } from 'react';

const EducationList = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('/api/education');
        const data = await response.json();
        setEducation(data.education);
      } catch (error) {
        console.error('Failed to fetch education:', error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <section className="my-10">
      <h2 className="text-3xl font-semibold mb-5 text-center animate-fadeIn">Education</h2>
      <div className="space-y-4">
        {education.length > 0 ? (
          education.map((edu) => (
            <div key={edu._id} className="bg-white shadow-md rounded-lg p-5 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold">{edu.degree} in {edu.fieldOfStudy}</h3>
              <p><strong>Institution:</strong> {edu.institution}</p>
              <p><strong>Duration:</strong> {edu.duration}</p>
              <p><strong>Description:</strong> {edu.description}</p>
            </div>
          ))
        ) : (
          <p>No education details to display.</p>
        )}
      </div>
    </section>
  );
};

export default EducationList;
