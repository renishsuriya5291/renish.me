'use client';
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
    <section className="bg-white p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-4">
            <strong>{project.title}</strong>
            <p>{project.description}</p>
            <a href={project.liveProjectUrl} target="_blank" rel="noopener noreferrer" className="text-highlight">View Live Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
