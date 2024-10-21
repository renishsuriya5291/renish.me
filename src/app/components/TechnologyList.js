"use client";
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
    <section className="my-10 px-4">
      <h2 className="text-4xl font-bold mb-6 text-center animate-fadeIn">Technologies</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
        {technologies.length > 0 ? (
          <ul className="list-disc pl-5">
            {technologies.map((technology) => (
              <li key={technology._id} className="text-gray-700">{technology.name}</li>
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
