'use client';

import { useEffect, useState } from 'react';

const TechnologyList = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch('/api/technologies');
        const data = await response.json();
        setTechnologies(data.technologies);
      } catch (error) {
        console.error('Failed to fetch technologies:', error);
      }
    };

    fetchTechnologies();
  }, []);

  return (
    <section className="my-10">
      <h2 className="text-3xl font-semibold mb-5 text-center animate-fadeIn">Technologies</h2>
      <div className="bg-white shadow-md rounded-lg p-5 transition-transform duration-300 hover:scale-105">
        {technologies.length > 0 ? (
          <ul className="list-disc pl-5">
            {technologies.map((technology) => (
              <li key={technology._id} className="text-gray-600">{technology.name}</li>
            ))}
          </ul>
        ) : (
          <p>No technologies to display.</p>
        )}
      </div>
    </section>
  );
};

export default TechnologyList;
