'use client';

import { useState } from 'react';
import AddProjectForm from '../components/AddProjectForm';
import AddExperienceForm from '../components/AddExperienceForm';
import AddEducationForm from '../components/AddEducationForm';
import AddSkillForm from '../components/AddSkillForm';
import AddTechnologyForm from '../components/AddTechnologyForm';

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'renidh' && password === 'renidh96') {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 py-6 max-w-sm w-full">
          <h2 className="text-2xl mb-4 text-center">Admin Login</h2>
          <div className="mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white rounded py-2 w-full hover:bg-blue-700 transition duration-200">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <AddProjectForm />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <AddExperienceForm />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <AddEducationForm />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <AddSkillForm />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <AddTechnologyForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
