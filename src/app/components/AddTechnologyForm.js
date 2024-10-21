'use client';

import { useState, useEffect } from 'react';

const AddTechnologyForm = () => {
  const [technologies, setTechnologies] = useState([]);
  const [technology, setTechnology] = useState('');
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const fetchTechnologies = async () => {
    const res = await fetch('/api/technologies');
    const data = await res.json();
    setTechnologies(data.technologies);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updateId) {
      await fetch('/api/technologies', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: updateId, technology }),
      });
    } else {
      await fetch('/api/technologies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ technology }),
      });
    }
    resetForm();
    fetchTechnologies();
  };

  const resetForm = () => {
    setTechnology('');
    setUpdateId(null);
  };

  const handleUpdate = (technology) => {
    setTechnology(technology.name);
    setUpdateId(technology._id);
  };

  const handleDelete = async (id) => {
    await fetch('/api/technologies', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchTechnologies();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Technologies</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow mb-4">
        <input
          type="text"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          placeholder="Technology"
          required
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white rounded py-2 w-full hover:bg-blue-700 transition duration-200">
          {updateId ? 'Update' : 'Add'} Technology
        </button>
      </form>
      <ul className="space-y-2">
        {technologies.map((tech) => (
          <li key={tech._id} className="flex justify-between items-center bg-gray-100 p-2 rounded shadow">
            <span>{tech.name}</span>
            <div>
              <button onClick={() => handleUpdate(tech)} className="text-blue-600 hover:underline mr-2">Edit</button>
              <button onClick={() => handleDelete(tech._id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTechnologyForm;
