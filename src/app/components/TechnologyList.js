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
    <section className="bg-white p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Technologies</h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((technology, index) => (
          <span key={technology.id} className="text-gray-700">
            {technology.name}
            {index < technologies.length - 1 && ','} {/* Add comma except for the last item */}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechnologyList;
