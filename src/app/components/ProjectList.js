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
      <h2 className="text-3xl font-semibold mb-5 text-center animate-fadeIn">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white shadow-md rounded-lg p-5 transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.liveProjectUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline">{project.liveProjectUrl}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
