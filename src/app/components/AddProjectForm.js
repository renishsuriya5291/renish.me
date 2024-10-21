'use client';

import { useState, useEffect } from 'react';

const AddProjectForm = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [liveProjectUrl, setLiveProjectUrl] = useState('');
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(data.projects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updateId) {
      await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: updateId, title, description, liveProjectUrl }),
      });
    } else {
      await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, liveProjectUrl }),
      });
    }
    resetForm();
    fetchProjects();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setUpdateId(null);
  };

  const handleUpdate = (project) => {
    setTitle(project.title);
    setDescription(project.description);
    setLiveProjectUrl(project.liveProjectUrl);
    setUpdateId(project._id);
  };

  const handleDelete = async (id) => {
    await fetch('/api/projects', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchProjects();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          value={liveProjectUrl}
          onChange={(e) => setLiveProjectUrl(e.target.value)}
          placeholder="Live Project URL"
          required
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white rounded py-2 w-full hover:bg-blue-700 transition duration-200">
          {updateId ? 'Update' : 'Add'} Project
        </button>
      </form>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project._id} className="flex justify-between items-center bg-gray-100 p-2 rounded shadow">
            <span>{project.title}: {project.description}</span>
            <span>{project.liveProjectUrl}</span>
            <div>
              <button onClick={() => handleUpdate(project)} className="text-blue-600 hover:underline mr-2">Edit</button>
              <button onClick={() => handleDelete(project._id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProjectForm;
