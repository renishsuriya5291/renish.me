"use client";
import { useEffect, useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data.projects);
    };
    fetchProjects();
  }, []);

  return (
    <section className="my-10 px-4">
      <h2 className="text-4xl font-bold mb-6 text-center animate-fadeIn">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.liveProjectUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Live Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
