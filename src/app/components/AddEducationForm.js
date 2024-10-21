'use client';

import { useState, useEffect } from 'react';

const AddEducationForm = () => {
  const [educationList, setEducationList] = useState([]);
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [description, setDescription] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    const response = await fetch('/api/education');
    const data = await response.json();
    setEducationList(data.education);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await fetch(`/api/education`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editing, degree, institution, description }),
      });
    } else {
      await fetch('/api/education', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ degree, institution, description }),
      });
    }
    resetForm();
    fetchEducation();
  };

  const resetForm = () => {
    setDegree('');
    setInstitution('');
    setDescription('');
    setEditing(null);
  };

  const handleEdit = (education) => {
    setDegree(education.degree);
    setInstitution(education.institution);
    setDescription(education.description);
    setEditing(education._id);
  };

  const handleDelete = async (id) => {
    await fetch('/api/education', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchEducation();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow mb-4">
        <input
          type="text"
          placeholder="Degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Institution"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
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
          {editing ? 'Update Education' : 'Add Education'}
        </button>
      </form>
      <ul className="space-y-2">
        {educationList.map((education) => (
          <li key={education._id} className="flex justify-between items-center bg-gray-100 p-2 rounded shadow">
            <span>
              {education.degree} from {education.institution}
            </span>
            <div>
              <button onClick={() => handleEdit(education)} className="text-blue-600 hover:underline mr-2">Edit</button>
              <button onClick={() => handleDelete(education._id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddEducationForm;
