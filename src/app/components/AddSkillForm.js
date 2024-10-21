'use client';

import { useState, useEffect } from 'react';

const AddSkillForm = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('');
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const res = await fetch('/api/skills');
    const data = await res.json();
    setSkills(data.skills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updateId) {
      await fetch('/api/skills', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: updateId, skill }),
      });
    } else {
      await fetch('/api/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skill }),
      });
    }
    setSkill('');
    setUpdateId(null);
    fetchSkills();
  };

  const handleUpdate = (skill) => {
    setSkill(skill.name);
    setUpdateId(skill._id);
  };

  const handleDelete = async (id) => {
    await fetch('/api/skills', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchSkills();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow mb-4">
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Skill"
          required
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white rounded py-2 w-full hover:bg-blue-700 transition duration-200">
          {updateId ? 'Update' : 'Add'} Skill
        </button>
      </form>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill._id} className="flex justify-between items-center bg-gray-100 p-2 rounded shadow">
            <span>{skill.name}</span>
            <div>
              <button onClick={() => handleUpdate(skill)} className="text-blue-600 hover:underline mr-2">Edit</button>
              <button onClick={() => handleDelete(skill._id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddSkillForm;
