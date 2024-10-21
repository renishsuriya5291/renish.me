'use client';

import { useState, useEffect } from 'react';

const AddExperienceForm = () => {
  const [experiences, setExperiences] = useState([]);
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    const response = await fetch('/api/experience');
    const data = await response.json();
    setExperiences(data.experience);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await fetch(`/api/experience`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editing, role, company, description }),
      });
    } else {
      await fetch('/api/experience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, company, description }),
      });
    }
    setRole('');
    setCompany('');
    setDescription('');
    setEditing(null);
    fetchExperiences();
  };

  const handleEdit = (experience) => {
    setRole(experience.role);
    setCompany(experience.company);
    setDescription(experience.description);
    setEditing(experience._id);
  };

  const handleDelete = async (id) => {
    await fetch('/api/experience', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchExperiences();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow mb-4">
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white rounded py-2 w-full hover:bg-blue-700 transition duration-200">
          {editing ? 'Update Experience' : 'Add Experience'}
        </button>
      </form>
      <ul className="space-y-2">
        {experiences.map((experience) => (
          <li key={experience._id} className="flex justify-between items-center bg-gray-100 p-2 rounded shadow">
            <span>
              {experience.role} at {experience.company}
            </span>
            <div>
              <button onClick={() => handleEdit(experience)} className="text-blue-600 hover:underline mr-2">Edit</button>
              <button onClick={() => handleDelete(experience._id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddExperienceForm;
